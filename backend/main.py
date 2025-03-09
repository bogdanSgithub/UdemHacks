from fastapi import FastAPI
from animal import Animal
from decode import decode_animals, decode_animal
import asyncio
import datetime
import base64
import os.path
from motor.motor_asyncio import AsyncIOMotorClient
from fastapi.middleware.cors import CORSMiddleware

client = AsyncIOMotorClient('mongodb://localhost:27017')
db = client.animals
animals_collection = db.animals

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/report")
async def report():
    cursor = animals_collection.find()
    documents = await cursor.to_list(length=100)
    return decode_animals(documents)

async def insert_animal(animal: Animal):
    with open(animal.img, "rb") as image_file:
        binary_data = image_file.read()
        base64_data = base64.b64encode(binary_data).decode('utf-8')
    
    file_extension = os.path.splitext(animal.img)[1].lower().strip('.')
    
    animal_doc = {
        "name": animal.name,
        "image_data": base64_data,
        "image_format": file_extension,
        "timestamp": animal.timestamp
    }
    
    await animals_collection.insert_one(animal_doc)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8001)