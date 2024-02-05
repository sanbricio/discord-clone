FROM node:20

WORKDIR /discord-clone

COPY . .

RUN npm install

CMD ["npm","run","deploy"]
