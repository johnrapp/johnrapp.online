FROM nginx

COPY index /data/index
COPY nginx.conf /etc/nginx/nginx.conf
COPY conf /etc/nginx/conf