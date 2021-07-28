FROM nginx:alpine

ARG HOSTNAME

# Move our configuration into place
#
COPY startNginx.conf /etc/nginx/nginx.conf
COPY proxy_headers.conf /etc/nginx/proxy_headers.conf

# Swap our environment variables
#
RUN cat /etc/nginx/nginx.conf | envsubst '$HOSTNAME' | tee /tmp/nginx.conf
RUN mv /tmp/nginx.conf /etc/nginx/nginx.conf

COPY --chown=www-data:www-data cloud-reader/ /usr/share/nginx/html/

RUN chmod 755 /etc/nginx/startNginx.sh

ENTRYPOINT [ "/etc/nginx/startNginx.sh" ]