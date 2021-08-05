FROM node 

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn 
COPY . ./
RUN yarn build
FROM nginx
COPY /usr/src/app/build/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


