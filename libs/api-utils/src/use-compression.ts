import { INestApplication, Logger } from '@nestjs/common';
import * as compression from 'compression';

export const useCompression = (app: INestApplication) => {
  app.use(compression());
  Logger.log('Compression initialized', 'Bootstrap');
  return app;
};
