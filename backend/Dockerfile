FROM php:8.3.0-apache
WORKDIR /var/www/html

RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

RUN a2enmod proxy
RUN a2enmod rewrite
RUN a2enmod ssl
RUN a2enmod socache_shmcb

COPY src/ .
EXPOSE 80