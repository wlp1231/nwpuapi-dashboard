/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';

import IconFont from '../IconFont';

export const PLUGIN_ICON_LIST: Record<string, any> = {
  prometheus: <IconFont name="iconPrometheus_software_logo" />,
  'jwt-auth': <IconFont name="iconjwt-3" />,
  'basic-auth': <IconFont name="iconbasic-auth" />,
  cors: <IconFont name="iconcors" />,
  'key-auth': <IconFont name="iconkey-auth" />,
  'fault-injection': <IconFont name="iconfault-injection" />,
  'consumer-restriction': <IconFont name="iconconsumer-restriction" />,
  'api-breaker': <IconFont name="iconapi-breaker" />,
  'ip-restriction': <IconFont name="iconip-restriction" />,
  'limit-conn': <IconFont name="iconlimit-connect" />,
  'limit-count': <IconFont name="iconlimit-count" />,
  'traffic-split': <IconFont name="icontraffic-split" />,
  'proxy-rewrite': <IconFont name="iconproxy-rewrite" />,
  zipkin: <IconFont name="iconzipkin" />,
  'grpc-transcode': <IconFont name="icongrpc-transcode" />,
  'error-log-logger': <IconFont name="iconerror-logger" />,
};

// This list is used to filter out plugins that cannot be displayed in the plugins list.
export const PLUGIN_FILTER_LIST: Record<string, { list: PluginComponent.ReferPage[] }> = {
  redirect: { list: ['route'] }, // Filter out the redirect plugin on the route page.
  'proxy-rewrite': { list: ['route'] },
};

export enum PluginType {
  authentication = 'authentication',
  security = 'security',
  traffic = 'traffic',
  serverless = 'serverless',
  observability = 'observability',
  other = 'other',
}

/**
 * Plugin List that contains type field
 */
export const PLUGIN_LIST = {
  'api-breaker': {
    type: PluginType.security,
  },
  'basic-auth': {
    type: PluginType.authentication,
  },
  'consumer-restriction': {
    type: PluginType.security,
  },
  cors: {
    type: PluginType.security,
  },
  csrf: {
    type: PluginType.security,
  },
  'dubbo-proxy': {
    type: PluginType.other,
    hidden: true,
  },
  echo: {
    type: PluginType.other,
    hidden: true,
  },
  'error-log-logger': {
    type: PluginType.observability,
    hidden: true,
  },
  'example-plugin': {
    type: PluginType.other,
    hidden: true,
  },
  zipkin: {
    type: PluginType.observability,
  },
  'fault-injection': {
    type: PluginType.security,
  },
  'file-logger': {
    type: PluginType.observability,
  },
  'grpc-transcode': {
    type: PluginType.other,
  },
  'grpc-web': {
    type: PluginType.other,
  },
  'ip-restriction': {
    type: PluginType.security,
  },
  'jwt-auth': {
    type: PluginType.authentication,
  },
  'key-auth': {
    type: PluginType.authentication,
  },
  'limit-conn': {
    type: PluginType.traffic,
  },
  'limit-count': {
    type: PluginType.traffic,
  },
  'log-rotate': {
    type: PluginType.observability,
    hidden: true,
  },
  'node-status': {
    type: PluginType.other,
    hidden: true,
  },
  prometheus: {
    type: PluginType.observability,
  },
  'proxy-rewrite': {
    type: PluginType.other,
  },
  'real-ip': {
    type: PluginType.other,
  },
  redirect: {
    type: PluginType.other,
    hidden: true,
  },
  'server-info': {
    type: PluginType.other,
    hidden: true,
  },

  'traffic-split': {
    type: PluginType.traffic,
  },
  'ua-restriction': {
    type: PluginType.security,
  },

  'mqtt-proxy': {
    type: PluginType.other,
    hidden: true,
  },
  'elasticsearch-logger': {
    type: PluginType.observability,
  },
};
