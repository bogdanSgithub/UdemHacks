from animal import Animal
import datetime

def decode_animal(doc) -> Animal:
    # For base64 encoded images
    if "image_data" in doc:
        img_value = f"data:image/jpeg;base64,{doc['image_data']}"
    else:
        img_value = "no-image"
    
    return Animal(
        name=name,
        img=img_value,
        timestamp=timestamp
    )
    
def decode_animals(rows) -> list:
    return [decode_animal(row) for row in rows]