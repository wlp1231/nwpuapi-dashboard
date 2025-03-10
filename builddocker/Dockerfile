ARG IMAGE_BASE="ubuntu"
ARG IMAGE_TAG="20.04"

FROM ${IMAGE_BASE}:${IMAGE_TAG}

ARG HTTP_PROXY
ARG HTTPS_PROXY

COPY ./utils/install-common.sh /install-common.sh
COPY ./utils/determine-dist.sh /determine-dist.sh

# install dependencies
RUN env http_proxy=${HTTP_PROXY} https_proxy=${HTTPS_PROXY} /install-common.sh install_dashboard_dependencies_deb

ARG checkout_v="v2.3"
ARG iteration="0"
ARG goproxy=""
ARG IMAGE_BASE
ARG IMAGE_TAG
ARG CODE_PATH

ENV IMAGE_BASE=${IMAGE_BASE}
ENV IMAGE_TAG=${IMAGE_TAG}

RUN env http_proxy=${HTTP_PROXY} https_proxy=${HTTPS_PROXY} git clone https://github.com/wlp1231/nwpuapi-dashboard.git /nwpuapi-dashboard

RUN env http_proxy=${HTTP_PROXY} https_proxy=${HTTPS_PROXY} /install-common.sh install_dashboard \
    && /determine-dist.sh
EXPOSE 9000   
WORKDIR /tmp/build/output/nwpuapi/dashboard/usr/local/nwpuapi/dashboard
ENTRYPOINT ["./manager-api"]