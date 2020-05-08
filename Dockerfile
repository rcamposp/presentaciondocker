FROM node:10
COPY ./ /app
WORKDIR /app
CMD ["node", "app.js"];