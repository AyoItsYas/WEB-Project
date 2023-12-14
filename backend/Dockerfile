FROM php:8.3.0-apache
WORKDIR /var/www/html

RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

# ADD ./build.sql /docker-entrypoint-initdb.d/
# ENTRYPOINT "mysql -u ${MYSQL_ROOT_USER} -p${MYSQL_ROOT_PASSWORD} < /docker-entrypoint-initdb.d/build.sql"

RUN a2enmod proxy
RUN a2enmod rewrite
RUN a2enmod ssl && a2enmod socache_shmcb

COPY src/ .
EXPOSE 80