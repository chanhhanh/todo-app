from pydantic import BaseModel, Field
import uuid
from typing import Optional


class Todos(BaseModel):
    id: str
    text: str
    deadline: str
    completed: bool = False


class UpdateTodoModel(BaseModel):
    text: Optional[str]
    deadline: Optional[str]
    completed: Optional[bool]


class HangHoa(BaseModel):
    ten_hh: str
    ma_hh: str
    mo_ta: str
    don_gia: str