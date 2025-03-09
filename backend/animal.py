from pydantic import BaseModel
import datetime

class Animal(BaseModel):
    name: str
    img: str  # This will now store the base64-encoded image data
    timestamp: datetime.datetime