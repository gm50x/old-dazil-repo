import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { useSwagger, SwaggerOptions } from '@dazil/docs';
import {
  getAppPort,
  useCompression,
  useCors,
  useValidators,
} from '@dazil/api-utils';

const swaggerConfig: SwaggerOptions = {
  title: 'Dazil',
  description: 'Conceptual Nest JS Monorepo',
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  useCors(app);
  useCompression(app);
  useSwagger(app, swaggerConfig);
  useValidators(app);

  const port = getAppPort(app);
  await app.listen(port);
  Logger.log(`Application is running on port ${port}`, 'Startup');
}
bootstrap();
