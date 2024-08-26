# dev.Dockerfile
FROM mcr.microsoft.com/playwright:v1.46.1-jammy AS builder

WORKDIR /usr/src/app

COPY package*.json .
COPY *config.js .

RUN npm install && npm cache clean --force
RUN npx playwright install chromium

COPY . .

CMD [ "npx", "playwright", "test" ]