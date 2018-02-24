#!/usr/bin/env bash
export DOCKER_CONFIG=${DOCKER_CONFIG:-docker-compose.yml}
docker-compose -f $DOCKER_CONFIG build
docker-compose -f $DOCKER_CONFIG up