FROM node:14.17-alpine
WORKDIR /usr/app
COPY  package*.json .
RUN npm ci
COPY . .
EXPOSE ${PORT}
CMD [ "npm", "run", "start" ]