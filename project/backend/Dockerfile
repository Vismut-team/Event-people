FROM python:3.11

RUN mkdir /event

WORKDIR /event

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

RUN chmod a+x deploy/*.sh