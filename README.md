CPF-Blocklist
=====================================================

Small CPF blocklist manager

[![Requirements Status](https://requires.io/github/diogosimao/cpf-blocklist/requirements.svg?branch=master)](https://requires.io/github/diogosimao/cpf-blocklist/requirements/?branch=master)

Docker setup requirements 
=============================

* Docker CE (lastest) installed
    * Installation    
        * Docker, see [here](https://docs.docker.com/installation/)
    
    * Used Docker images:
        * Python, Node, PostgreSQL

Frontend requires
=============
* bootstrap4
* font-awesome

Run frontend development server
===============================

See `README.md` at `./frontend` 


Backend requires
=============

* Python3
* pipenv

and see `requirements_docker.txt` and `backend/requirements.txt`

Run backend development server
===============================

Run:
    
    $ pipenv --three && pipenv shell
    $ pipenv install -r requirements_docker.txt

if necessary:

    $ pipenv install -r backend/requirements.txt

touch `.env` at `./backend/cpfblocklist/`

    $ touch ./backend/cpfblocklist/.env
    
with proper content:

```
HIDE_DOCS=False
DEBUG=True
DATABASE_URL=pgsql://USER:PWD@127.0.0.1:5432/cpf-blocklist
SECRET_KEY=<YOUR_KEY>
```

or `export` variables on terminal before running bash script.    

Either run `start_docker.sh`
    
```sh
# start django dev server and angular frontend with docker
. ./bin/start_docker.sh
```

or run `. ./bin/start_local.sh`

Django backend should be up on [http://localhost:8080](http://localhost:8080/)

Support routes
=============

* [http://localhost:8000/status](http://localhost:8000/status)
* [http://localhost:8000/consulta?cpf=00000000000](http://localhost:8000/consulta?cpf=00000000000)
