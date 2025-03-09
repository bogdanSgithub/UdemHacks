from pydantic import BaseModel
import datetime

class Animal(BaseModel):
    name: str
    img: str
    timestamp: datetime.datetime
    
    