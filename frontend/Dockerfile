# frontend/Dockerfile
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of your code
COPY . .

# Expose React's default port
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
