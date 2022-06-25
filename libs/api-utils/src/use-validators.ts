import { INestApplication, ValidationPipe } from '@nestjs/common';

export const useValidators = (app: INestApplication) => {
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
};
