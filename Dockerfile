# base image
FROM node:12-slim as builder


USER root
# set working directory
WORKDIR /app

# install and cache app dependencies
COPY . .
RUN yarn && yarn build

FROM nginx:1.17-alpine

RUN rm -f /usr/share/nginx/html/index.html

COPY --from=builder /app/public/ /usr/share/nginx/html/
