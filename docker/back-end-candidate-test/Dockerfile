FROM node:11 AS production

WORKDIR /var/www

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "node", "dist/server.js" ]