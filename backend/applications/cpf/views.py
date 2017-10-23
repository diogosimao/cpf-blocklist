from uptime import boottime
from rest_framework import mixins, viewsets
from rest_framework_tracking.mixins import LoggingMixin
from rest_framework_tracking.models import APIRequestLog
from drf_multiple_model.viewsets import MultipleModelAPIViewSet

from applications.cpf.models import Cpf
from applications.api.v1.serializers import CpfSerializerQuery, CpfStatusSerializer, QueryStatusSerializer
from .renderer import CpfJSONRenderer, ServerStatusJSONRenderer


class QueryViewSet(LoggingMixin,
                   mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    logging_methods = ['GET']
    queryset = Cpf.objects.all()
    serializer_class = CpfSerializerQuery
    renderer_classes = [CpfJSONRenderer]

    def get_queryset(self):
        queryset = Cpf.objects.all()
        cpf = self.request.query_params.get('cpf', None)
        if cpf is not None:
            queryset = queryset.filter(number=cpf)
        return queryset


class StatusViewSet(MultipleModelAPIViewSet):
    queryList = [
        (Cpf.objects.filter(status=1), CpfStatusSerializer),
        (APIRequestLog.objects.filter(requested_at__gte=boottime()), QueryStatusSerializer),
        ]
    #serializer_class = ServerStatusSerializerQuery
    renderer_classes = [ServerStatusJSONRenderer]
