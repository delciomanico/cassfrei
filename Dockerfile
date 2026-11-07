# ---- build: compila o site estático (vite build + sitemap.xml) ----
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Ligação ao Dynamix-CMS — variáveis do Vite, lidas em build-time (ver docs/dynamix.md).
# Sem elas usa-se o defeito do código (https://dynamix.cassfrei.com/api/v1, projecto "cassfrei").
ARG VITE_DYNAMIX_API_URL
ARG VITE_DYNAMIX_PROJECT
ARG VITE_DYNAMIX_DISABLED
ENV VITE_DYNAMIX_API_URL=$VITE_DYNAMIX_API_URL \
    VITE_DYNAMIX_PROJECT=$VITE_DYNAMIX_PROJECT \
    VITE_DYNAMIX_DISABLED=$VITE_DYNAMIX_DISABLED
RUN npm run build

# ---- runtime: serve os ficheiros estáticos gerados ----
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Usado pelo Dokploy (e por "docker ps") para saber quando o container está mesmo a
# responder, antes de encaminhar tráfego para ele num deploy sem downtime.
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s CMD wget -qO- http://127.0.0.1/ || exit 1
