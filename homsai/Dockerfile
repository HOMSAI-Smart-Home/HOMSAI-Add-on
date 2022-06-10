FROM adoptopenjdk/openjdk11

COPY rootfs /
# Execute during the build of the image

CMD java -jar /home/homsai-engine-0.0.1.jar --home_assistant.api_url=http://supervisor/core  --home_assistant.token="$SUPERVISOR_TOKEN"
