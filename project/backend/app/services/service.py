from datetime import datetime

from app.utils.repository import AbstractRepository


class ServicesService:
    def __init__(self, services_repo: AbstractRepository):
        self.user_repo: AbstractRepository = services_repo()

    async def add_service(self, profession_id: int, price_hour: int,
                          city_id: int, description: str):
        service = await self.user_repo.create(profession_id=profession_id,
                                              price_hour=price_hour,
                                              city_id=city_id,
                                              description=description,
                                              created_at=datetime.utcnow(),
                                              updated_at=datetime.utcnow())
        return service
