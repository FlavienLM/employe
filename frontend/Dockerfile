# Etape 1 : Construction
FROM node:16 AS build

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Etape 2 : Serveur web
FROM nginx:alpine

COPY --from=build /build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]