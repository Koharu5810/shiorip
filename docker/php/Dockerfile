FROM php:8.3-fpm

COPY php.ini /usr/local/etc/php/

RUN apt update \
	&& apt install -y default-mysql-client zlib1g-dev libzip-dev unzip \
	&& docker-php-ext-install pdo_mysql zip

RUN curl -sS https://getcomposer.org/installer | php \
	&& mv composer.phar /usr/local/bin/composer \
	&& composer self-update

# bcmath のインストール（Laravel10での実行）
RUN docker-php-ext-install bcmath

WORKDIR /var/www