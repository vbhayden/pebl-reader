FROM nginx:1.19.1

EXPOSE 80 443

VOLUME ["/usr/share/nginx/html/epub_content"]

COPY nginx/*.pem /ssl/

COPY nginx/startNginx.sh /etc/nginx/

RUN chmod 755 /etc/nginx/startNginx.sh

COPY nginx/reader.conf.template /etc/nginx/templates/

COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY --chown=www-data:www-data dist/cloud-reader/ /usr/share/nginx/html/

ENTRYPOINT ["/etc/nginx/startNginx.sh"]
