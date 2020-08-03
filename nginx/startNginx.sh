#!/bin/sh

mkdir -p /etc/nginx/conf.d/

cp /etc/nginx/templates/reader.conf.template /etc/nginx/conf.d/default.conf

sed -ie "s|__READER_SERVER_NAME__|$READER_SERVER_NAME|g" /etc/nginx/conf.d/default.conf
sed -ie "s|__HTTP_SERVICES_ENDPOINT__|$HTTP_SERVICES_ENDPOINT|g" /usr/share/nginx/html/scripts/pack.js
sed -ie "s|__WS_SERVICES_ENDPOINT__|$WS_SERVICES_ENDPOINT|g" /usr/share/nginx/html/scripts/pack.js

nginx -g "daemon off;"
