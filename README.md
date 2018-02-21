CPF-Blocklist
=====================================================

Small CPF blocklist manager

Docker setup requirements 
=============================

* Docker CE (lastest) installed
    * Installation    
        * Docker, see [here](https://docs.docker.com/installation/)
    
    * Used Docker images:
        * Python, Node

Requires
=============
* Bootstrap4
* [Gerador-Validador-CPF](http://tiagoporto.github.io/gerador-validador-cpf/)

Run development server
=============

```sh
# start django dev server & frontend builder
./bin/development.sh
```

App should be up on [http://localhost:8000](http://localhost:8000/), running django development server.

Support routes
=============

* [http://localhost:8000/status](http://localhost:8000/status)
* [http://localhost:8000/consulta?cpf=00000000000](http://localhost:8000/consulta?cpf=00000000000)
