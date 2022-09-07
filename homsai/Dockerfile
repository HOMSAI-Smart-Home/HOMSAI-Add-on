FROM adoptopenjdk/openjdk11

COPY rootfs /

EXPOSE 80

RUN apt update && apt install wget
RUN wget "https://github.com/HOMSAI-Smart-Home/HOMSAI-Engine/releases/download/v0.0.25-dev-alpha/homsai-engine-0.0.25.jar" -P /home
RUN apt update
RUN apt install -y apache2
RUN apt install -y apache2-utils
RUN apt clean

RUN cp /conf/vhost.conf /etc/apache2/sites-available/homsai.conf
RUN service apache2 stop
RUN a2enmod proxy
RUN a2enmod proxy_http
RUN a2dissite 000-default
RUN a2ensite homsai

CMD service apache2 start && java -jar /home/homsai-engine-0.0.25.jar --home_assistant.api_url=http://supervisor/core  --home_assistant.token="$SUPERVISOR_TOKEN"