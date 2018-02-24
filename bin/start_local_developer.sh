#!/usr/bin/env bash
export SECRET_KEY=b+^a=+spknionlge_$%yf!47g&_2n&td$r$cm%szhbo3!@a!v4
export DATABASE_URL=pgsql://USER:PWD@127.0.0.1:5432/cpf-blocklist
python manage.py collectstatic --noinput
python manage.py makemigrations
python manage.py migrate
python manage.py runserver