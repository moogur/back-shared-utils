import type { INestApplication } from '@nestjs/common';
export declare function setupSwagger({ app, swaggerDescription, swaggerTitle, needBearerAuth, }: {
    app: INestApplication;
    swaggerTitle: string;
    swaggerDescription: string;
    needBearerAuth?: boolean;
}): void;
