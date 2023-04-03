FROM docker.io/library/node:19.7.0-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --omit=dev

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
