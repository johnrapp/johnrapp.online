FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY conf /etc/nginx/conf