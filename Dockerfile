FROM node
WORKDIR /usr/src/petri
COPY . .
#RUN npm install

CMD ["npm", "start"]

EXPOSE 9595


