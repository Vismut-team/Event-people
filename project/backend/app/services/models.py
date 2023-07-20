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


class Service(Base):
    __tablename__ = 'service'

    id = Column(Integer, primary_key=True, nullable=False)
    profession_id = Column(ForeignKey('profession.id'), nullable=False)
    price_hour = Column(Integer)
    city_id = Column(ForeignKey('city.id'), nullable=False)
    description = Column(String(length=500), nullable=False)
    created_at = Column(TIMESTAMP, default=datetime.utcnow, nullable=False)
    updated_at = Column(TIMESTAMP, default=datetime.utcnow, nullable=False)


class Profession(Base):
    __tablename__ = 'profession'

    id = Column(Integer, primary_key=True, nullable=False)
    title = Column(String(length=150), nullable=False)


class City(Base):
    __tablename__ = 'city'

    id = Column(Integer, primary_key=True, nullable=False)
    title = Column(String, nullable=False)
    region_id = Column(ForeignKey('region.id'), nullable=False)


class Region(Base):
    __tablename__ = 'region'

    id = Column(Integer, primary_key=True, nullable=False)
    title = Column(String, nullable=False)


class PortfolioImgs(Base):
    __tablename__ = 'portfolio_imgs'

    id = Column(Integer, primary_key=True, nullable=False)
    service_id = Column(ForeignKey('service.id'), nullable=False)
    url = Column(String, nullable=False)