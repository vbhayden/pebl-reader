FROM nginx:alpine

ARG HOSTNAME

# Move our configuration into place
#
COPY nginx.conf /etc/nginx/nginx.conf

COPY startNginx.sh /etc/nginx/startNginx.sh
RUN chmod 755 /etc/nginx/startNginx.sh

# Swap our environment variables
#
RUN cat /etc/nginx/nginx.conf | envsubst '$HOSTNAME' | tee /tmp/nginx.conf
RUN mv /tmp/nginx.conf /etc/nginx/nginx.conf

COPY --chown=www-data:www-data cloud-reader/ /usr/share/nginx/html/


ENTRYPOINT [ "/etc/nginx/startNginx.sh" ]
