FROM nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY dist/BookMonkey /usr/share/nginx/html
