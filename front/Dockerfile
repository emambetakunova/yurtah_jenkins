FROM nginx:1.13-alpine
COPY education.conf /etc/nginx/conf.d/default.conf
RUN mkdir -p /build/static
COPY ./build /build/static

ENTRYPOINT ["sh", "start.sh"]