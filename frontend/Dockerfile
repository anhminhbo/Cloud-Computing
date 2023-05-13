# Install dependencies only when needed - Dependencies installation stage
FROM php:7.4-apache as webserver
COPY ./src/php/  /var/www/html
RUN chown -R www-data:www-data /var/www

FROM node:16-alpine as frontend

WORKDIR /app

# Creator
LABEL author="Minh Nguyen"
LABEL maintainer="Minh Nguyen"
LABEL alias="BugFixWanderer"
LABEL email="nca.minh8897@gmail.com"
LABEL linkedln="https://www.linkedin.com/in/cuong-anh-minh-nguyen/"
LABEL youtube="https://www.youtube.com/channel/UCRUJYpLa_nQrR6NY5Uy6egQ"

RUN npm install --global gulp-cli

RUN npm install --legacy-peer-deps

# Start server
CMD ["npm", "run", "serve"]