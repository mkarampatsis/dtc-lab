# version of node to use
FROM node:18
# Directory to save image
WORKDIR /app
RUN npm install -g @angular/cli
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
# Bundle app source
COPY . .
EXPOSE 4200
CMD [ "ng", "serve", "--host", "0.0.0.0" ]