FROM node:16

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm ci
# If you are building your code for production
# RUN npm ci --only=production
COPY . .


WORKDIR /app/server

RUN npm ci


# Bundle app source

EXPOSE 8080
CMD [ "node", "server.js" ]


# 1. Run npm run install
# 2. npm run build
# 3. cd server
# 4. npm Install
# 5. node server.js