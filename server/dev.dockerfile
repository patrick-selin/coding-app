FROM node:20.11.1-alpine AS builder

EXPOSE 3333

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm cache clean --force
# RUN npm ci --only=production 

COPY . .

FROM node:20.11.1-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

RUN addgroup -S nodejs && adduser -S nodejs -G nodejs
RUN chown -R nodejs:nodejs /usr/src/app
USER nodejs

#use node, not npm
# CMD ["npm", "run", "start"]
CMD ["npx", "tsx", "watch", "src/index.ts"]