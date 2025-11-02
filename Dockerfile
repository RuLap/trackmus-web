FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

EXPOSE 3100

CMD ["npm", "start"]
