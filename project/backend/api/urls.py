from django.urls import path, include
from api import docs

app_name = "api"

urlpatterns = [
    path("docs/", include(docs.urlpatterns)),
    # path("users/", include("users.urls", namespace="users")),
]
