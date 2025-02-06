FROM ubuntu:latest

RUN mkdir /react-app
WORKDIR /react-app

RUN apt-get update -y && apt-get install -y npm

COPY ./react-app/package*.json ./

COPY ./react-app/ ./
RUN npm install
COPY scripts/launch.sh /launch.sh

ENTRYPOINT ["bash", "/launch.sh"]