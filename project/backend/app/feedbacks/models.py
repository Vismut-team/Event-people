from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    ForeignKey
)

from app.database import Base


class Feedback(Base):
    __tablename__ = 'feedback'

    id = Column(Integer, primary_key=True, nullable=False)
    creator = Column(String(length=50), nullable=False)
    text = Column(String(length=150), nullable=False)
    is_verification = Column(Boolean, nullable=False)
    service_id = Column(ForeignKey('service.id'))
