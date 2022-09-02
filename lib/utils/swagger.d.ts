import { WorkModeEnum } from '../types';
import type { INestApplication } from '@nestjs/common';
interface SetupSwagger {
    app: INestApplication;
    mode?: WorkModeEnum;
    swaggerTitle: string;
    swaggerDescription: string;
    swaggerVersion: string;
    needBearerAuth?: boolean;
}
export declare function setupSwagger({ app, mode, swaggerDescription, swaggerTitle, swaggerVersion, needBearerAuth, }: SetupSwagger): void;
export declare function getVersion(filePath: string): string;
export {};
