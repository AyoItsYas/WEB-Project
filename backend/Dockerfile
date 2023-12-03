FROM php:8.3.0-apache
WORKDIR /var/www/html

RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

# ADD ./build.sql /docker-entrypoint-initdb.d/
# ENTRYPOINT "mysql -u ${MYSQL_ROOT_USER} -p${MYSQL_ROOT_PASSWORD} < /docker-entrypoint-initdb.d/build.sql"

COPY src/ .
EXPOSE 80