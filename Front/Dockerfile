FROM node:latest
WORKDIR /
EXPOSE 3000
ADD package*.json ./
RUN npm install
ADD . .
CMD npm run dev
