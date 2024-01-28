# Use the official Node.js 20 image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /home/node/app

# Copy the package.json and package-lock.json files to the container
COPY package.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which your NestJS app runs
EXPOSE 80

# Start the NestJS app
CMD ["npm", "run", "start:dev"]
