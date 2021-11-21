FROM node:14-alpine

# ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait

RUN npm install --global nodemon

WORKDIR /usr/src/backend

COPY . .
COPY package.json /usr/src/backend
COPY package-lock.json /usr/src/backend

RUN npm install

CMD ["npm", "run", "start"]