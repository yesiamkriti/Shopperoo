# frontend/Dockerfile
# FROM node:18
# WORKDIR /app
# COPY package.json package-lock.json* ./
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD ["npm", "start"]

# ---- Build Stage ----
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- Production Stage ----
FROM nginx:stable-alpine    
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
