from node:20.18.0

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
#RUN nodemon app.js

EXPOSE 3000
CMD ["node", "app.js"]