from pydantic import BaseModel
from animal import Animal
import datetime

def decode_animal(doc) -> Animal:
    # For base64 encoded images
    if "image_data" in doc:
        img_value = f"data:image/jpeg;base64,{doc['image_data']}"
    else:
        img_value = "no-image"
    
    return Animal(
        name=doc["name"],
        img=img_value,
        timestamp=doc["timestamp"]
    )
    
def decode_animals(docs) -> list:
    return [decode_animal(doc) for doc in docs]