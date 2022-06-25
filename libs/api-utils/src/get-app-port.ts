import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const getAppPort = (app: INestApplication) => {
  const config = app.get(ConfigService);
  return config.get('DAZIL_PORT') || config.get('PORT') || '3000';
};
