# base image
FROM alpine:3.12

ENV NODE_VERSION 16.13.1
# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent

# start app
CMD ["npm", "start"]