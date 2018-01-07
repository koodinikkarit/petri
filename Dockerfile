FROM node
WORKDIR /usr/src/petri
ADD package.json ./package.json
RUN npm install
ADD webpack.config.js ./webpack.config.js
COPY .babelrc .
COPY src ./src

CMD ["npm", "start"]

EXPOSE 9595


