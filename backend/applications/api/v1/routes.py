from rest_framework import routers
from applications.api.v1.viewsets import CpfViewSet


api_router = routers.SimpleRouter(trailing_slash=True)
api_router.register('cpf', CpfViewSet)
