#!/bin/bash
#start developemnt server on :8000

export DOCKER_CONFIG=${DOCKER_CONFIG:-docker-compose.yml}
docker-compose -f $DOCKER_CONFIG build
docker-compose -f $DOCKER_CONFIG run --rm backend migrate
docker-compose -f $DOCKER_CONFIG up