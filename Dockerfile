FROM node:20

WORKDIR /discord-clone

COPY . .

RUN npm install

RUN npx prisma generate

RUN npm run build

CMD ["sh", "-c", "npx prisma db push && npm run start"]
