# BUILD
FROM node:18 AS build
WORKDIR /app
COPY /package.json .
COPY /package-lock.json .
RUN npm install
COPY . .
RUN npm run test && npm run build

# RUNNING SERVER
FROM node:18
WORKDIR /app
COPY --from=build /app/package.json ./
COPY --from=build /app/package-lock.json ./
COPY --from=build /app/dist ./dist
EXPOSE 8080
RUN npm install
CMD ["npm", "run", "server"]