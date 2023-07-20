from fastapi import FastAPI

from app.services.router import router as services_router

app = FastAPI(
    title='Epeople - агрегатор творческих людей'
)

app.include_router(services_router)
