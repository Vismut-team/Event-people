#!/bin/bash

cd project
cd backend
python3 manage.py makemigrations
python3 manage.py migrate --no-input
gunicorn core.wsgi -b 0.0.0.0:8000