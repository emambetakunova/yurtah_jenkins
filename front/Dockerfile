FROM nginx:1.13-alpine

RUN echo "http://dl-2.alpinelinux.org/alpine/edge/main" > /etc/apk/repositories
RUN echo "http://dl-2.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories
RUN echo "http://dl-2.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories

# install chromium
RUN apk -U --no-cache \
    --allow-untrusted add \
    zlib-dev \
    chromium \
    xvfb \
    wait4ports \
    xorg-server \
    dbus \
    ttf-freefont \
    grep \
    udev \
    && apk del --purge --force linux-headers binutils-gold gnupg zlib-dev libc-utils \
    && rm -rf /var/lib/apt/lists/* \
    /var/cache/apk/* \
    /usr/share/man \
    /tmp/* \
    /usr/lib/node_modules/npm/man \
    /usr/lib/node_modules/npm/doc \
    /usr/lib/node_modules/npm/html \
    /usr/lib/node_modules/npm/scripts

ENV CHROME_BIN=/usr/bin/chromium-browser
ENV CHROME_PATH=/usr/lib/chromium/

ARG REACT_APP_MODE=development

ENV REACT_APP_MODE=$REACT_APP_MODE

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