from app.services.repository import ServicesRepository
from app.services.service import ServicesService


def services_service():
    return ServicesService(ServicesRepository)
