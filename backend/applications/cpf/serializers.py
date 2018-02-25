from rest_framework.serializers import ModelSerializer, ValidationError
from applications.cpf.models import Cpf
from applications.cpf.validator import is_valid_cpf
from rest_framework_tracking.models import APIRequestLog


class CpfSerializer(ModelSerializer):
    def validate_number(self, value):
        """
        Check that value is a valid cpf number.
        """
        if not is_valid_cpf(value):
            raise ValidationError("Please enter valid CPF")
        return value

    class Meta:
        model = Cpf
        fields = ('slug', 'number', 'blocked')
        read_only_fields = ('slug',)


class CpfSerializerUpdate(CpfSerializer):

    class Meta:
        model = Cpf
        fields = ('slug', 'number', 'blocked')
        read_only_fields = ('slug', 'number',)


class CpfSerializerQuery(CpfSerializer):

    class Meta:
        model = Cpf
        fields = ('number', 'blocked')
        read_only_fields = ('number', 'blocked')


class CpfStatusSerializer(ModelSerializer):

    class Meta:
        model = Cpf
        fields = ('blocked',)
        read_only_fields = ('blocked',)


class QueryStatusSerializer(ModelSerializer):

    class Meta:
        model = APIRequestLog
        fields = ('requested_at',)
        read_only_fields = ('requested_at',)
