from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.models import Models
import os
import shutil
from typing import List
from app.database import (fetch_one_todo, fetch_all_todo, create_todo,
                          update_todo, remove_todo)

#App object
app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"ping": 'pong'}


@app.get('/api/todo')
async def get_todo():
    response = await fetch_all_todo()
    return response


@app.get('/api/todo{title}', response_model=Models.Todos)
async def get_todo_by_id(title):
    response = await fetch_one_todo(title)
    if response:
        return response
    raise HTTPException(404, f'there is no todo item with title {title}')


@app.post('/api/todo/post', response_model=Models.Todos)
async def post_todo(todo: Models.Todos):
    response = await create_todo(todo.dict())
    if response:
        return response
    raise HTTPException(400, f'something went wrong | bad request')


@app.put('/api/todo/put/{id}', response_model=Models.Todos)
async def put_todo(id, completed: bool):
    response = await update_todo(id, completed)
    if response:
        return response
    raise HTTPException(404, f"there is no TODO")


@app.delete('/api/todo/delete/{id}')
async def delete_todo(id):
    response = await remove_todo(id)
    if response:
        return 'Removed successfully'
    raise HTTPException(404, f"there is no TODO with ID {id}")


DIRECTORY = os.getcwd()


@app.post("/predict", tags=["PREDICT"])
def upload_single_file(model_name: str, image: UploadFile = File(...)):

    try:
        new_file_name = f"{model_name}_{image.filename}"
        file_save = os.path.join(DIRECTORY, "data", new_file_name)
        with open(file_save, 'wb') as tmp:
            shutil.copyfileobj(image.file, tmp)

        return {'filename': image.filename}
    except Exception as e:
        print(e)
        return {"success": False}


@app.post("/product", tags=["PRODUCT"])
def upload_new_product(model: Models.HangHoa, image: UploadFile = File(...)):

    try:
        new_file_name = f"{model.ma_hh}_{image.filename}"
        file_save = os.path.join(DIRECTORY, "data", new_file_name)
        with open(file_save, 'wb') as tmp:
            shutil.copyfileobj(image.file, tmp)

        return {'filename': image.filename}
    except Exception as e:
        print(e)
        return {"success": False}


@app.post("/images", tags=["UPLOAD"])
def upload_file(image: UploadFile = File(...)):
    print(DIRECTORY)
    try:
        file_save = os.path.join(DIRECTORY, 'data', image.filename)
        with open(file_save, 'wb') as tmp:
            shutil.copyfileobj(image.file, tmp)
        return {'filename': image.filename}
    except Exception as e:
        print(e)
        return {"success": False}


@app.post("/images/multiple", tags=["UPLOAD"])
def upload_multiple_file(images: List[UploadFile] = File(...)):
    try:
        uploaded_files = []
        for image in images:
            uploaded_files.append(image.filename)
            file_save = os.path.join(DIRECTORY, "data", image.filename)
            with open(file_save, "wb") as tmp:
                shutil.copyfileobj(image.file, tmp)

        return {"files": uploaded_files}
    except Exception as e:
        print(e)
        return {"success": False}