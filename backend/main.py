from fastapi import FastAPI
from decode import decode_animals, decode_animal
import asyncio
import datetime
from motor.motor_asyncio import AsyncIOMotorClient

client = AsyncIOMotorClient('mongodb://localhost:27017')
db = client.animals
animals_collection = db.animals

app = FastAPI()

@app.get("/report")
async def report():  # Make this function async
    # Convert cursor to list asynchronously
    cursor = animals_collection.find()
    documents = await cursor.to_list(length=1000000)
    return decode_animals(documents)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8001)