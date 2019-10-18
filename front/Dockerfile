FROM keymetrics/pm2:10-alpine

RUN echo "http://dl-2.alpinelinux.org/alpine/edge/main" > /etc/apk/repositories
RUN echo "http://dl-2.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories
RUN echo "http://dl-2.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories

ADD ... /app/

WORKDIR /app/

ENV NPM_CONFIG_LOGLEVEL warn
ENV PORT 5000
ENV REACT_APP_ENV server
RUN npm i
RUN npm run build
RUN mv /app/build/index.html /app/src/server/index.html

EXPOSE 5000

ENTRYPOINT ["sh", "start.sh"]