import { INestApplication, Logger } from '@nestjs/common';
import helmet from 'helmet';

export const useHelmet = (app: INestApplication) => {
  app.use(helmet());
  Logger.log('Helmet initialized', 'Bootstrap');
  return app;
};
