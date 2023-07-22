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


class User(Base):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True, nullable=False)
    password_hash = Column(String(length=256), nullable=False)
    email = Column(String(length=50), nullable=False)
    is_verified = Column(Boolean, default=False, nullable=False)
    is_active = Column(Boolean, default=False, nullable=False)
    is_admin = Column(Boolean, default=False, nullable=False)
    created_at = Column(TIMESTAMP, default=datetime.utcnow, nullable=False)
    updated_at = Column(TIMESTAMP, default=datetime.utcnow, nullable=False)


class UserInfo(Base):
    __tablename__ = 'user_info'

    id = Column(Integer, primary_key=True, nullable=False)
    user_id = Column(ForeignKey('user.id'))
    first_name = Column(String(length=150), nullable=False)
    last_name = Column(String(length=150), nullable=False)
    gender = Column(String(length=10), nullable=False)
    avatar = Column(String, nullable=False)
    phone_number = Column(String)
    telegram = Column(String)
    description = Column(String)
    city_id = Column(ForeignKey('city.id'), nullable=False)


class City(Base):
    __tablename__ = 'city'

    id = Column(Integer, primary_key=True, nullable=False)
    title = Column(String, nullable=False)
    region_id = Column(ForeignKey('region.id'), nullable=False)


class Region(Base):
    __tablename__ = 'region'

    id = Column(Integer, primary_key=True, nullable=False)
    title = Column(String, nullable=False)
