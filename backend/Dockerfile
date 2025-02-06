FROM ubuntu:latest

RUN apt-get update -y && apt-get upgrade -y && apt-get install npm -y
# RUN npm i express body-parser typescript @types/express @types/node mysql2
# RUN mkdir /app
RUN mkdir /react-app
WORKDIR /app
COPY ./app ./
RUN npm i -D @types/express@4
RUN npm i express ejs ts-node body-parser cors
RUN npm i @aws-sdk/client-ses
RUN npm install

COPY "scripts/launch.sh" "/launch.sh"

ENTRYPOINT ["bash", "/launch.sh"]