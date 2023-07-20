from app.users.repository import UsersRepository
from app.users.service import UserService


def users_service():
    return UserService(UsersRepository)
