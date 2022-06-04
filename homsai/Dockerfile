# https://developers.home-assistant.io/docs/add-ons/configuration#add-on-dockerfile
ARG BUILD_FROM
FROM $BUILD_FROM

COPY rootfs /
# Execute during the build of the image

RUN apk add --no-cache \
    coreutils=9.0-r2  \
    wget=1.21.2-r2 \
    openjdk8

RUN wget "https://github.com/HOMSAI-Smart-Home/HOMSAI-Engine/releases/download/v0.0.1-dev-alpha/homsai-engine-0.0.1.jar" -P /home
