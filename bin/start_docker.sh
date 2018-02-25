#!/usr/bin/env bash
export DATABASE_URL=pgsql://django:django123@db:5432/postgres
export DOCKER_CONFIG=${DOCKER_CONFIG:-docker-compose.yml}
docker-compose -f $DOCKER_CONFIG build
./bin/init_db.sh
docker-compose -f $DOCKER_CONFIG run --rm frontend install
docker-compose -f $DOCKER_CONFIG run --rm frontend build
docker-compose -f $DOCKER_CONFIG run --rm backend makemigrations
docker-compose -f $DOCKER_CONFIG run --rm backend migrate
docker-compose -f $DOCKER_CONFIG up