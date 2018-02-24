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

Run development server
=============

```sh
# start django dev server & angular frontend with docker
. ./bin/start_docker.sh
```

App should be up on [http://localhost](http://localhost/)

Support routes
=============

* [http://localhost/status](http://localhost/status)
* [http://localhost/consulta?cpf=00000000000](http://localhost/consulta?cpf=00000000000)
