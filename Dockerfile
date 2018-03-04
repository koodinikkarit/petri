FROM node:9.7.1-stretch as builder
WORKDIR /usr/src/
ADD package.json ./package.json
ADD package-lock.json ./package-lock.json
ADD tsconfig.json tsconfig.json
ADD combineGraphqlSchema.js combineGraphqlSchema.js
COPY src src
RUN npm install
RUN npm run build-schemadef
RUN npm run build

FROM node:9.7.1-alpine
ADD package.json ./package.json
COPY --from=builder /usr/src/node_modules /usr/src/node_modules
COPY --from=builder /usr/src/dist /usr/src/dist
CMD ["npm", "run", "app"]