ARG IMAGE_BASE="ubuntu"
ARG IMAGE_TAG="20.04"

FROM ${IMAGE_BASE}:${IMAGE_TAG}


COPY ./utils/install-common.sh /install-common.sh
COPY ./utils/determine-dist.sh /determine-dist.sh

# install dependencies
RUN /install-common.sh install_dashboard_dependencies_deb

ARG checkout_v="v2.3"
ARG iteration="0"
ARG goproxy=""
ARG IMAGE_BASE
ARG IMAGE_TAG
ARG CODE_PATH

ENV IMAGE_BASE=${IMAGE_BASE}
ENV IMAGE_TAG=${IMAGE_TAG}

# COPY /home/wlp/apisixFile/apisix-dashboard/ /apisix-dashboard
RUN git clone https://github.com/wlp1231/apisix-dashboard.git /apisix-dashboard

# install APISIX dashboard
RUN /install-common.sh install_dashboard \
    # determine dist and write it into /tmp/dist file
    && /determine-dist.sh
EXPOSE 9000   
WORKDIR /tmp/build/output/apisix/dashboard/usr/local/apisix/dashboard
ENTRYPOINT ["./manager-api"]
