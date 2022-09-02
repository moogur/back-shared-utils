import { readFileSync } from 'node:fs';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { replace } from 'lodash';

import { WorkModeEnum } from 'types';

import type { INestApplication } from '@nestjs/common';

interface SetupSwagger {
  app: INestApplication;
  mode?: WorkModeEnum;
  swaggerTitle: string;
  swaggerDescription: string;
  swaggerVersion: string;
  needBearerAuth?: boolean;
}

export function setupSwagger({
  app,
  mode,
  swaggerDescription,
  swaggerTitle,
  swaggerVersion,
  needBearerAuth,
}: SetupSwagger): void {
  if (mode === WorkModeEnum.Test) return;

  const config = new DocumentBuilder()
    .setTitle(swaggerTitle)
    .setDescription(swaggerDescription)
    .setVersion(swaggerVersion)
    .setExternalDoc('json', '/swagger-json');

  if (needBearerAuth)
    config.addBearerAuth(
      { type: 'http', description: 'header name: Authorization<br /><b>For services requests</b>' },
      'ServiceToken',
    );

  const builderConfig = config.build();

  const document = SwaggerModule.createDocument(app, builderConfig);
  SwaggerModule.setup('swagger', app, document);
}

export function getVersion(filePath: string) {
  try {
    const data: { version?: string } = JSON.parse(readFileSync(filePath, 'utf8'));
    const version = data?.version;
    if (typeof version !== 'string') throw new Error('Version not found');

    return replace(version, /[\sv]/g, '');
  } catch (error) {
    console.log(error);

    return '0.0.0';
  }
}
