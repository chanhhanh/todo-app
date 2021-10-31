import os
from fastapi import APIRouter, Body, Request, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from app.models import Models
from bson.objectid import ObjectId

#MongoDB driver
import motor.motor_asyncio

#Client object
client = motor.motor_asyncio.AsyncIOMotorClient(os.getenv('DB_HOST'))
database = client.TodoList
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


async def create_todo(todo):
    document = jsonable_encoder(todo)
    await collection.insert_one(document)
    return document


async def update_todo(id, completed):
    await collection.update_one({'id': id}, {'$set': {"completed": completed}})
    document = await collection.find_one({"id": id})
    return document


async def remove_todo(id):
    result = await collection.delete_one({"id": id})
    return result