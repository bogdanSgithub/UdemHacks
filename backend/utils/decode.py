def decode_animal(doc) -> dict:
    return {
        "_id": doc["_id"],
        "name": doc["name"],
        "img": doc["img"],
        "timestamp": doc["timestamp"]
    }
    
def decode_animals(docs) -> list:
    return [decode_animal(doc) for doc in docs]