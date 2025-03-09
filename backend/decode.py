from animal import Animal
import datetime

def decode_animal(row) -> Animal:
    id, name, image_data, image_format, timestamp_str = row
    
    img_value = f"data:image/{image_format};base64,{image_data}"
    
    timestamp = datetime.datetime.fromisoformat(timestamp_str)
    
    return Animal(
        name=name,
        img=img_value,
        timestamp=timestamp
    )
    
def decode_animals(rows) -> list:
    return [decode_animal(row) for row in rows]