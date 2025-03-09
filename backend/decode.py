def decode_animal(doc) -> dict:
    return {
        "name": doc["name"],
        "img": doc["img"],
        "timestamp": doc["timestamp"]
    }
    
def decode_animals(docs) -> list:
    return [decode_animal(doc) for doc in docs]