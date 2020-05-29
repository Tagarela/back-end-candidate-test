#client
FROM node:11 as prepare

WORKDIR /app/client/
COPY client/package*.json ./
RUN npm ci
COPY client/ ./
RUN npm run build:docker

EXPOSE 3000
CMD ["npm", "start"]
