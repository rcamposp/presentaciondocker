#Test Nginx
docker run -it -p 80:80 nginx

#Test nodejs
vi app.js
console.log("Hello V2S");
wq
docker run -it -p 8080:8080 app

#instalar node en instancia
apk add --update nodejs npm
