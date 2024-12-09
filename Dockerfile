FROM node:lts-slim

COPY .output /opt/

ENTRYPOINT ["node", "/opt/server/index.mjs"]