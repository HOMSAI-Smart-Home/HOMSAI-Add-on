# https://developers.home-assistant.io/docs/add-ons/configuration#add-on-dockerfile
ARG BUILD_FROM
FROM $BUILD_FROM

COPY rootfs /
# Execute during the build of the image
ARG TEMPIO_VERSION BUILD_ARCH
RUN apk add --no-cache \
    git && \
    git clone https://github.com/HOMSAI-Smart-Home/HOMSAI-Engine.git /home/homsai-engine
RUN \
    curl -sSLf -o /usr/bin/tempio \
    "https://github.com/home-assistant/tempio/releases/download/${TEMPIO_VERSION}/tempio_${BUILD_ARCH}" && \
    apk add --no-cache \
    coreutils=9.0-r2 \
    wget=1.21.2-r2 \
    python3 \
    py3-pip \
    && pip3 install -r /home/homsai-engine/requirements.txt

