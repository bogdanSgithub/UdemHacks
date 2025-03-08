from pymongo import MongoClient, ServerApi

uri = "mongodb+srv://ale_admin:test123@testdatabases.0w1ds.mongodb.net/?retryWrites=true&w=majority&appName=TestDatabases"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

database = client.animals
animal_collection = database["animals"]
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)