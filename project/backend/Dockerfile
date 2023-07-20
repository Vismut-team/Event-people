FROM python:3.11

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir /event

WORKDIR /event

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

RUN chmod a+x deploy/*.sh