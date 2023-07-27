FROM python:3.10

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


# RUN mkdir /event
# WORKDIR /event

# COPY requirements.txt .
# RUN pip install -r requirements.txt

# # COPY scripts/start*.sh /
# COPY scripts/prod.sh /
# COPY . .

# # RUN chmod a+x prod.sh

# # ADD . /code/
# # RUN chmod a+x deploy/*.sh

RUN mkdir /code
WORKDIR /code

ADD requirements.txt /code/
RUN pip install -r requirements.txt


COPY scripts/*.sh /
ADD . /code/