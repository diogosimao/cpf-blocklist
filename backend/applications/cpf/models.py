from django.db import models
from applications.core.models import TimestampedModel


class Cpf(TimestampedModel):
    number = models.CharField(max_length=11, unique=True, blank=False)
    status = models.BooleanField(default=0)

    def __str__(self):
        return self.number

    class Meta:
        ordering = ('number',)
