FROM node:16.16.0
WORKDIR /server_app
COPY package.json ./
COPY yarn.lock ./
ADD . .
RUN yarn install
CMD ["yarn", "run", "start:dev"]