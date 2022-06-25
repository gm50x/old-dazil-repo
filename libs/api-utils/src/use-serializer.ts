import {
  ClassSerializerInterceptor,
  INestApplication,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export const useSerializer = (app: INestApplication) => {
  const reflector = app.get(Reflector);
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(reflector, { excludePrefixes: ['_'] }),
  );
  Logger.log('Serialization initialized', 'Bootstrap');
  return app;
};
