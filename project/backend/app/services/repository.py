from app.utils.repository import SQLAlchemyRepository

from app.services.models import Service


class ServicesRepository(SQLAlchemyRepository):
    model = Service
