FROM grpc/node:0.11-onbuild
WORKDIR /usr/src/petri
COPY . .
#RUN npm install

CMD ["npm", "start"]

EXPOSE 9595


