Django + Angular
=====================================================


Requirements
=============
* Docker CE (lastest)
* Docker-compose (latest)

Stack
=============
* Python 3
* Django
* AngularJS frontend framework
* Bootstrap3  css framework
* [Gerador-Validador-CPF](http://tiagoporto.github.io/gerador-validador-cpf/)

Installation
=============

Docker dev environent requires latest docker, see https://docs.docker.com/installation/

Run development server
=============

```sh
# start django dev server & frontend builder
./bin/develop.sh
```

App should be up on [http://localhost:8000](http://localhost:8000/), running django development server.

Support routes
=============

* [http://localhost:8000/status](http://localhost:8000/status)
* [http://localhost:8000/consulta?cpf=00000000000](http://localhost:8000/consulta?cpf=00000000000)
