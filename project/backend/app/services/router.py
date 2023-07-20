from fastapi import APIRouter, status, Depends

from typing import Annotated

from app.services.schemas import ServiceSchema
from app.services.service import ServicesService
from app.services.dependencies import services_service

router = APIRouter(
    prefix='/services', tags=['Services']
)


@router.post('/add/services', status_code=status.HTTP_201_CREATED)
async def add_service(profession_id: int, price_hour: int,
                      city_id: int, description: str,
                      service_service: Annotated[ServicesService, Depends(services_service)],
                      ) -> ServiceSchema:
    service = await service_service.add_service(profession_id, price_hour, city_id, description)
    return service["Service"]
