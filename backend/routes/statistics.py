from fastapi import APIRouter
from config import animal_collection
from utils.decode import decode_animals, decode_animal

stats_root = APIRouter()

@stats_root.get("/read")
async def read_all_images():
    result = animal_collection.find().limit(6)
    animals = decode_animals(result)
    return animals