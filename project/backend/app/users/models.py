from datetime import datetime

from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    TIMESTAMP,
    ForeignKey
)

from app.database import Base

from app.services.models import Service


class User(Base):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True, nullable=False)
    password_hash = Column(String(256), nullable=False)
    service_id = Column(ForeignKey('service.id'), nullable=False)
    is_admin = Column(Boolean, default=False, nullable=False)
    is_active = Column(Boolean, default=False, nullable=False)
    is_verified = Column(Boolean, default=False, nullable=False)
    created_at = Column(TIMESTAMP, default=datetime.utcnow, nullable=False)
    updated_at = Column(TIMESTAMP, default=datetime.utcnow, nullable=False)


class UserData(Base):
    __tablename__ = 'user_data'

    id = Column(Integer, primary_key=True, nullable=False)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    first_name = Column(String(length=150), nullable=False)
    last_name = Column(String(length=150), nullable=False)
    avatar = Column(String)
    phone_number = Column(String)
    telegram = Column(String)
    description = Column(String)
