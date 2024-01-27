# BUILD
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run test && npm run build

# RUNNING SERVER
FROM node:18
WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
EXPOSE 8000
CMD ["npm", "run", "dev"]