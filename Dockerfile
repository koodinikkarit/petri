FROM node
WORKDIR /usr/src/petri
ADD package.json ./package.json
RUN npm install
ADD webpack.config.js ./webpack.config.js
COPY .babelrc .
COPY src ./src

# FROM grpc/node:0.11-onbuild
# WORKDIR /usr/src/petri

# ADD package.json /tmp/package.json

# RUN cd /tmp && npm install
# RUN cp -ar /tmp/node_modules /usr/src/petri/

# COPY src ./src

# ADD package.json ./package.json
# ADD webpack.config.js ./webpack.config.js
# COPY .babelrc .
# COPY ./ssl ./ssl

CMD ["npm", "start"]

EXPOSE 9595


