FROM nginx:1.19.1

COPY nginx/*.pem /ssl/

COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY nginx/startNginx.sh /etc/nginx/startNginx.sh
RUN chmod 755 /etc/nginx/startNginx.sh

COPY --chown=www-data:www-data cloud-reader/ /usr/share/nginx/html/

ENTRYPOINT ["/etc/nginx/startNginx.sh"]
