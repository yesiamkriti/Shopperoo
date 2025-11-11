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
# For CRA: /build, for Vite: /dist
COPY --from=build /app/build /usr/share/nginx/html

# Optional custom Nginx config
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
