import os
from app.models import Models

#MongoDB driver
import motor.motor_asyncio

#Client object
client = motor.motor_asyncio.AsyncIOMotorClient(os.getenv['DB_HOST'])
database = client.os.getenv['DB_NAME']
collection = database.todos


async def fetch_one_todo(title):
    document = await collection.find_one({"name": title})
    return document


async def fetch_all_todo():
    todos = []
    cursor = collection.find({})
    async for document in cursor:
        todos.append(Models.Todos(**document))
    return todos


async def create_todo():
    document = Models.Todos
    result = await collection.insert_one(document)
    return document


async def update_todo(title, description):
    await collection.update_one({'name': title},
                                {'$set': {
                                    "description": description
                                }})
    document = await collection.find_one({"title": title})
    return document


async def remove_todo(title):
    await collection.delete_one({"title": title})
    return True