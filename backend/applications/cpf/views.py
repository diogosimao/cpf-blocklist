from drf_multiple_model.viewsets import MultipleModelAPIViewSet
from rest_framework import mixins, viewsets
from rest_framework_tracking.mixins import LoggingMixin
from rest_framework_tracking.models import APIRequestLog
from uptime import boottime

from applications.cpf.models import Cpf
from applications.cpf.serializers import CpfSerializerQuery, CpfStatusSerializer, QueryStatusSerializer
from .renderer import CpfStatusJSONRenderer, ServerStatusJSONRenderer


class QueryViewSet(LoggingMixin,
                   mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    logging_methods = ['GET']
    queryset = Cpf.objects.all()
    serializer_class = CpfSerializerQuery
    renderer_classes = [CpfStatusJSONRenderer]

    def get_queryset(self):
        queryset = Cpf.objects.all()
        cpf = self.request.query_params.get('cpf', None)
        if cpf is not None:
            queryset = queryset.filter(number=cpf)
        return queryset


class StatusViewSet(MultipleModelAPIViewSet):
    queryList = [
        (Cpf.objects.filter(blocked=1), CpfStatusSerializer),
        (APIRequestLog.objects.filter(requested_at__gte=boottime()), QueryStatusSerializer),
        ]
    renderer_classes = [ServerStatusJSONRenderer]
