from datetime import datetime

from sqlalchemy import (
    Column,
    Integer,
    String,
    TIMESTAMP,
    ForeignKey
)

from app.database import Base


class Service(Base):
    __tablename__ = 'service'

    id = Column(Integer, primary_key=True, nullable=False)
    profession_id = Column(ForeignKey('profession.id'), nullable=False)
    price_hour = Column(Integer)
    description = Column(String(length=500), nullable=False)
    created_at = Column(TIMESTAMP, default=datetime.utcnow, nullable=False)
    updated_at = Column(TIMESTAMP, default=datetime.utcnow, nullable=False)


class UserService(Base):
    __tablename__ = 'user_service'

    id = Column(Integer, primary_key=True, nullable=False)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    service_id = Column(ForeignKey('service.id'), nullable=False)


class ServiceTag(Base):
    __tablename__ = 'service_tag'

    id = Column(Integer, primary_key=True, nullable=False)
    service_id = Column(ForeignKey('service.id'), nullable=False)
    tag_id = Column(Integer, nullable=False)


class Tag(Base):
    __tablename__ = 'tag'

    id = Column(Integer, primary_key=True, nullable=False)
    title = Column(String(length=150), nullable=False)
    slug = Column(String(length=255), unique=True, nullable=False)


class PortfolioImgs(Base):
    __tablename__ = 'portfolio_imgs'

    id = Column(Integer, primary_key=True, nullable=False)
    service_id = Column(ForeignKey('service.id'), nullable=False)
    url = Column(String, nullable=False)
    description = Column(String(length=500), nullable=False)


class Profession(Base):
    __tablename__ = 'profession'

    id = Column(Integer, primary_key=True, nullable=False)
    title = Column(String(length=150), nullable=False)
    