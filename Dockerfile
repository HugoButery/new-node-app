FROM node:latest
WORKDIR /code
COPY * ./
RUN npm install
EXPOSE 8080
CMD ["node", "app.js"]