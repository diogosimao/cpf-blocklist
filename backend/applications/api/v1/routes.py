from rest_framework import routers
from applications.api.v1.viewsets import CpfViewSet


api_router = routers.SimpleRouter(trailing_slash=False)
api_router.register('cpf', CpfViewSet)
