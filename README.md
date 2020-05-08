#Test Nginx
docker run -it -p 80:80 nginx

#Test nodejs
vi app.js
console.log("Hello V2S");
wq
docker run -it -p 8080:8080 -v "$PWD":/app -w /app node node app.js

#instalar node en instancia
apk add --update nodejs npm

#Dockerfile
FROM node:10
COPY ./ /app
RUN cd app
RUN npm install
CMD ["node", "app.js"];


#Llamar a una api externa

const axios = require('axios');

var main = async ()  => {
    try {
        const response = await axios.get('https://swapi.dev/api/people/3/');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

main();