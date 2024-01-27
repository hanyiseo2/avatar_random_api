# BUILD
FROM node:18 AS build
WORKDIR /app
COPY ./backend/package.json ./
COPY ./backend/package-lock.json ./
RUN npm install
COPY . .
RUN npm run test && npm run build

# RUNNING SERVER
FROM node:18
WORKDIR /app
COPY --from=build ./package*.json ./
COPY --from=build ./dist ./dist
EXPOSE 8080
CMD ["npm", "run", "server"]