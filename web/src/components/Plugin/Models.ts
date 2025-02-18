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

/**
 * Model List of PluginType of Monaco editor
 */

import { editor, Uri } from 'monaco-editor';

import * as modelCode from './modelCode';

/**
 * Model type is authentication as fllows:
 */

export const opaModel = editor.createModel(modelCode.opa, 'json', Uri.parse('file:opa'));


/**
 * Model type is security as fllows:
 */

export const csrfModel = editor.createModel(modelCode.csrf, 'json', Uri.parse('file:csrf'));

export const iprestrictionModel = editor.createModel(
  modelCode.iprestriction,
  'json',
  Uri.parse('file:ip-restriction'),
);

export const uarestrictionModel = editor.createModel(
  modelCode.uarestriction,
  'json',
  Uri.parse('file:ua-restriction'),
);


/**
 * Model type is traffic as fllows:
 */


export const trafficsplitModel = editor.createModel(
  modelCode.trafficsplit,
  'json',
  Uri.parse('file:traffic-split'),
);

/**
 * Model type is serverless as fllows:
 */





/**
 * Model type is observability as fllows:
 */


export const fileloggerModel = editor.createModel(
  modelCode.filelogger,
  'json',
  Uri.parse('file:file-logger'),
);



/**
 * Model type is other as fllows:
 */

export const extpluginprereqModel = editor.createModel(
  modelCode.extpluginprereq,
  'json',
  Uri.parse('file:ext-plugin-pre-req'),
);

export const realipModel = editor.createModel(modelCode.realip, 'json', Uri.parse('file:real-ip'));
