FROM node:22.16.0-alpine

WORKDIR /app

COPY package.json .

RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose the port
EXPOSE 3000