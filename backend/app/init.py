from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from app.models import Models
import os
import shutil
from typing import List

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
    return 1


@app.post('/api/todo/post')
async def post_todo(model: Models.Todos):
    return {'success': True, 'data': model}


@app.put('/api/todo/put/{id}')
async def put_todo(id):
    return 1


@app.delete('/api/todo/delete/{id}')
async def delete_todo(id):
    return 1


DIRECTORY = os.getcwd()


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