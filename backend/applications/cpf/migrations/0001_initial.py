# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-19 22:06
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cpf',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('number', models.CharField(max_length=10, unique=True)),
                ('status', models.BooleanField(default=0)),
            ],
            options={
                'ordering': ('number',),
            },
        ),
    ]
