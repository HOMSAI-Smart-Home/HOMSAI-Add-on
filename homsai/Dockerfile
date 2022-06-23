FROM adoptopenjdk/openjdk11

COPY rootfs /
# Execute during the build of the image
RUN apt update && apt install wget
<<<<<<< HEAD
RUN wget "https://github.com/HOMSAI-Smart-Home/HOMSAI-Engine/releases/download/v0.0.21-dev-alpha/homsai-engine-0.0.21.jar" -P /home
=======
RUN wget "https://github.com/HOMSAI-Smart-Home/HOMSAI-Engine/releases/download/v0.0.2-dev-alpha/homsai-engine-0.0.2.jar" -P /home
>>>>>>> 43f4370cdeee6172bb7d3065b23d253187815572

CMD java -jar /home/homsai-engine-0.0.21.jar --home_assistant.api_url=http://supervisor/core  --home_assistant.token="$SUPERVISOR_TOKEN"
