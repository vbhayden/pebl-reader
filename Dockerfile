FROM nginx:alpine

ARG HOSTNAME

# Move our configuration into place
#
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/startNginx.sh /etc/nginx/startNginx.sh

# Swap our environment variables
#
RUN cat /etc/nginx/nginx.conf | envsubst '$HOSTNAME' | tee /tmp/nginx.conf
RUN mv /tmp/nginx.conf /etc/nginx/nginx.conf

COPY --chown=nginx:nginx cloud-reader/ /usr/share/nginx/html/

RUN chmod 755 /etc/nginx/startNginx.sh

ENTRYPOINT [ "/etc/nginx/startNginx.sh" ]
