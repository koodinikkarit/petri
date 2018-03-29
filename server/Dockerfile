FROM node:9.9.0-stretch as builder
WORKDIR /usr/src/
ADD package.json ./package.json
ADD package-lock.json ./package-lock.json
ADD tsconfig.json tsconfig.json
ADD combineGraphqlSchema.js combineGraphqlSchema.js
COPY src src
RUN npm install
RUN npm run build-schemadef
RUN npm run build

FROM node:9.9.0-stretch
WORKDIR /usr/src
ADD package.json ./package.json
COPY --from=builder /usr/src/node_modules node_modules
COPY --from=builder /usr/src/dist dist
RUN ls dist
CMD ["npm", "run", "app"]