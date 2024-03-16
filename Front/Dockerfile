FROM node:latest
WORKDIR /
ADD package*.json ./
RUN npm install
ADD . .
RUN npm run build
CMD npm run preview