FROM node:24 AS build-stage

WORKDIR /usr/src/app

ENV VITE_BACKEND_URL=/api

COPY . .

RUN npm ci

RUN CI=true npm test

RUN npm run build

FROM nginx:1.29-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
