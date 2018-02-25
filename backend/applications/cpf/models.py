from django.db import models
from applications.core.models import DefaultBaseModel


class Cpf(DefaultBaseModel):
    number = models.BigIntegerField(unique=True, blank=False)
    blocked = models.BooleanField(default=0)

    def __str__(self):
        return self.number

    class Meta:
        ordering = ('number',)
