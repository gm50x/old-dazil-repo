import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';

export const useValidators = (app: INestApplication) => {
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  Logger.log('Validation initialized', 'Bootstrap');

  return app;
};
