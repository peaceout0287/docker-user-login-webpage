FROM node:16
WORKDIR /app
RUN npm install -g pm2
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
# Start app with PM2
CMD ["pm2-runtime", "start", "server.js"]
