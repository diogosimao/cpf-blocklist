from rest_framework import viewsets
from rest_framework_tracking.mixins import LoggingMixin
from applications.cpf.models import Cpf
from applications.api.v1.serializers import CpfSerializer, CpfSerializerUpdate


class CpfViewSet(LoggingMixin,
                 viewsets.ModelViewSet):
    queryset = Cpf.objects.all()
    serializer_class = CpfSerializer
    logging_methods = ['GET']

    def get_queryset(self):
        queryset = Cpf.objects.all()
        cpf_number = self.request.query_params.get('cpf_number', None)
        if cpf_number is not None:
            queryset = queryset.filter(number=cpf_number)
        return queryset

    def get_serializer_class(self):
        serializer_class = self.serializer_class

        if self.request.method == 'PUT':
            serializer_class = CpfSerializerUpdate

        return serializer_class
