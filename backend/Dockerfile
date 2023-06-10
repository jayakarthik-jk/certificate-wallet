# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

RUN apt-get update && apt-get install -y \
    libcairo2-dev \
    libjpeg-dev \
    libpango1.0-dev \
    libgif-dev \
    build-essential \
    g++ \
    imagemagick \
    ghostscript \
    && rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm run build

# Copy the rest of the application code to the container
COPY . .

# Expose the port your application listens on
EXPOSE 3000


# Set the command to run your Node.js application
CMD [ "npm", "run", "start" ]
