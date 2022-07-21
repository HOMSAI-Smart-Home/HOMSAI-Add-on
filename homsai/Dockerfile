FROM adoptopenjdk/openjdk11

COPY rootfs /

RUN apt update && apt install wget
RUN wget "https://github.com/HOMSAI-Smart-Home/HOMSAI-Engine/releases/download/v0.0.25-dev-alpha/homsai-engine-0.0.25.jar" -P /home

CMD java -jar /home/homsai-engine-0.0.25.jar --home_assistant.api_url=http://supervisor/core  --home_assistant.token="$SUPERVISOR_TOKEN"
