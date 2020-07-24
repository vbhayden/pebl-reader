cd dist/cloud-reader/scripts/

cat handlerSW.js jquery-3.3.1.min.js config.js > pack.js
echo "function consoleLog(...x) { if (DEBUGGING) { console.log(...x); } }" >> pack.js
echo "function consoleError(...x) { if (DEBUGGING) { console.error(...x); } }" >> pack.js
cat PeBLCore.js pebl-login-widget.js readium-js-viewer_all.js ../font-faces/fonts.js >> pack.js

echo "let DEBUGGING=false;function consoleLog(...x) { if (DEBUGGING) { console.log(...x); } }; function consoleError(...x) { if (DEBUGGING) { console.error(...x); } }" | cat - readium-js-viewer_CLOUDAPP-WORKER.js > readium-js-viewer_CLOUDAPP-WORKER.js2
mv readium-js-viewer_CLOUDAPP-WORKER.js2 readium-js-viewer_CLOUDAPP-WORKER.js

TIME=$(date)
sed -i "s/||timestamp||/$TIME/" ../peblSW.js
