from pydantic import BaseModel


class Todos(BaseModel):
    name: str
    deadline: str