from fastapi import FastAPI
from animal import Animal
from decode import decode_animals, decode_animal
import asyncio
import datetime
import base64
import os.path
import sqlite3
import aiosqlite

# SQLite database file
DB_FILE = "animals.db"

def init_db():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS animals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        image_data TEXT NOT NULL,
        image_format TEXT NOT NULL,
        timestamp TEXT NOT NULL
    )
    ''')
    conn.commit()
    conn.close()
    print("Database initialized successfully")

init_db()

app = FastAPI()

@app.get("/report")
async def report():
    async with aiosqlite.connect(DB_FILE) as db:
        cursor = await db.execute(
            "SELECT id, name, image_data, image_format, timestamp FROM animals ORDER BY timestamp DESC LIMIT 100"
        )
        rows = await cursor.fetchall()
        return decode_animals(rows)

async def insert_animal(animal: Animal):
    with open(animal.img, "rb") as image_file:
        binary_data = image_file.read()
        base64_data = base64.b64encode(binary_data).decode('utf-8')
    
    file_extension = os.path.splitext(animal.img)[1].lower().strip('.')
    
    timestamp_str = animal.timestamp.isoformat()
    
    async with aiosqlite.connect(DB_FILE) as db:
        await db.execute(
            "INSERT INTO animals (name, image_data, image_format, timestamp) VALUES (?, ?, ?, ?)",
            (animal.name, base64_data, file_extension, timestamp_str)
        )
        await db.commit()

@app.on_event("startup")
async def startup_db_client():
    try:
        # Check if we already have a test animal
        async with aiosqlite.connect(DB_FILE) as db:
            cursor = await db.execute("SELECT COUNT(*) FROM animals WHERE name = ?", ("bird",))
            count = await cursor.fetchone()
            
            if count[0] == 0:
                image_path = "./test_images/crow_eating_berry.jpg"
                if not os.path.exists(image_path):
                    print(f"Warning: Test image not found at {image_path}")
                    return
                
                await insert_animal(Animal(
                    name="bird", 
                    img=image_path,
                    timestamp=datetime.datetime.now()
                ))
                print("Test animal inserted successfully!")
            else:
                print("Test animal already exists in database")
    except Exception as e:
        print(f"Error during startup: {e}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8001)