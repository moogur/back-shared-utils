import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import type { INestApplication } from '@nestjs/common';

interface SetupSwagger {
  app: INestApplication;
  mode: string;
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
  if (mode === 'test') return;

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
