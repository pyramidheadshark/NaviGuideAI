FROM node:latest
WORKDIR /
EXPOSE 3000:3000
ADD package*.json ./
RUN npm install
ADD . .
RUN npm run build
CMD npm run preview

