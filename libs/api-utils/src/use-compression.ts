import { INestApplication } from '@nestjs/common';
import * as compression from 'compression';

export const useCompression = (app: INestApplication) => {
  app.use(compression());
  return app;
};
