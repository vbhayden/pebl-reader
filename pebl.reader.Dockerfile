FROM nginx:1.19.1

COPY pebl-reader/nginx/*.pem /ssl/

COPY pebl-reader/nginx/startNginx.sh /etc/nginx/

RUN chmod 755 /etc/nginx/startNginx.sh

COPY overrides/reader.conf /etc/nginx/templates/reader.conf.template

COPY pebl-reader/nginx/nginx.conf /etc/nginx/nginx.conf

COPY --chown=www-data:www-data pebl-reader/cloud-reader/ /usr/share/nginx/html/

ENTRYPOINT ["/etc/nginx/startNginx.sh"]
