# Stage 1
FROM node:11 AS builder
WORKDIR /build
COPY . .
RUN npm ci
RUN npm run build

# Stage 2
FROM node:11 AS production
WORKDIR /var/www

COPY --from=builder /build/dist ./dist
RUN mkdir ./dist/assets
RUN echo `ls ./dist/`
COPY --from=builder /build/node_modules ./node_modules

EXPOSE 3001

CMD [ "node", "dist/server.js" ]
