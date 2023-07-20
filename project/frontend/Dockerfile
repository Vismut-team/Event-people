FROM node:16.13.0-alpine3.11 

# make the 'app' folder the current working directory
# RUN npm install -g http-server
WORKDIR /app/

COPY package.json ./

RUN npm cache verify
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]