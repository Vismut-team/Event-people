from app.utils.repository import SQLAlchemyRepository

from app.users.models import User


class UsersRepository(SQLAlchemyRepository):
    model = User
