FROM node:lts

# RUN mkdir -p /app/src
WORKDIR /usr/app/src
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080

CMD ["node", "-r","esm", "app.js"]
