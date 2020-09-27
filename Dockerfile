FROM node:12-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN npm install && npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD npm start
