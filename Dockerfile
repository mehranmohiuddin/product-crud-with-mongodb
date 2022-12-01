FROM node:alpine

ENV PORT=8080

EXPOSE $PORT

WORKDIR /code

COPY . ./

RUN npm install

ENTRYPOINT ["npm", "start"]