# # backend/Dockerfile
# FROM node:18.17.1-alpine3.18

# WORKDIR /app

# COPY package.json package-lock.json* ./
# RUN npm install

# COPY . .

# EXPOSE 5454

# CMD ["npm", "run", "dev"]

FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev  
COPY . .
EXPOSE 5454
CMD ["npm", "start"]

