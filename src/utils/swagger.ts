import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { ProcessEnvironmentKeys, WorkModeEnum } from '@types';

import type { INestApplication } from '@nestjs/common';

function getVersion() {
  const appVersion = process.env[ProcessEnvironmentKeys.AppVersion];
  const mode = process.env[ProcessEnvironmentKeys.Mode];

  switch (mode) {
    case WorkModeEnum.Production:
      return appVersion ?? '0.0.0';

    case WorkModeEnum.Development:
      return 'development';

    default:
      return '';
  }
}

export function setupSwagger({
  app,
  swaggerDescription,
  swaggerTitle,
  needBearerAuth,
}: {
  app: INestApplication;
  swaggerTitle: string;
  swaggerDescription: string;
  needBearerAuth?: boolean;
}): void {
  if (process.env[ProcessEnvironmentKeys.Mode] === WorkModeEnum.Test) return;

  const config = new DocumentBuilder()
    .setTitle(swaggerTitle)
    .setDescription(swaggerDescription)
    .setVersion(getVersion())
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
