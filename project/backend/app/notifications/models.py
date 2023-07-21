from sqlalchemy import (
    Column,
    Integer,
    String,
    ForeignKey
)

from app.database import Base


class UserNotification(Base):
    __tablename__ = 'user_notification'

    id = Column(Integer, primary_key=True, nullable=False)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    notification_id = Column(ForeignKey('notification.id'), nullable=False)


class Notification(Base):
    __tablename__ = 'notification'

    id = Column(Integer, primary_key=True, nullable=False)
    title = Column(String(length=50), nullable=False)
    text = Column(String(length=500), nullable=False)
