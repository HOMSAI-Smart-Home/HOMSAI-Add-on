FROM adoptopenjdk/openjdk11

COPY rootfs /

EXPOSE 8098

RUN apt update && apt install wget
RUN wget "https://github.com/HOMSAI-Smart-Home/HOMSAI-Engine/releases/download/v0.8.3/homsai-engine-0.8.3.jar" -P /home
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
RUN sed -i -e 's/80/8098/g' /etc/apache2/ports.conf

CMD service apache2 start && java -jar /home/homsai-engine-0.8.3.jar --home_assistant.api_url=http://supervisor/core  --home_assistant.token="$SUPERVISOR_TOKEN"