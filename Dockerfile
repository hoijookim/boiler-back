FROM node:14

WORKDIR /src/main

COPY ./package.json ./

RUN npm install

COPY . .

CMD ["npm", "run","start:prod"]