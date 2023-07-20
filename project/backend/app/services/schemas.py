from pydantic import BaseModel

from datetime import datetime


class ServiceSchema(BaseModel):
    id: int
    profession_id: int
    price_hour: int
    city_id: int
    description: str
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
