# BUILD
FROM node:18 AS build
WORKDIR /backend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run test && npm run build

# RUNNING SERVER
FROM node:18
WORKDIR /backend
COPY --from=build /backend/package*.json ./
COPY --from=build /backend/dist ./dist
EXPOSE 8080
CMD ["npm", "run", "server"]