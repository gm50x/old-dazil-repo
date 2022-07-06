import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export type BearerAuthType = 'http' | 'apiKey' | 'oauth2' | 'openIdConnect';
export type BearerOptions = {
  name: string;
  type?: BearerAuthType;
};

export type SwaggerOptions = {
  title: string;
  description: string;
  version?: string;
  env?: string;
  bearer?: BearerOptions | Array<BearerOptions>;
  swaggerEndpoint?: string;
};

export const useSwagger = (app: INestApplication, opts: SwaggerOptions) => {
  const {
    title,
    description,
    version = 'v1',
    env = 'development',
    bearer = [],
    swaggerEndpoint = 'docs',
  } = opts;

  const documentBuilder = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(`${version}-${env}`)
    .setExternalDoc('Export Specs', `/${swaggerEndpoint}-json`);

  const bearers = [...(Array.isArray(bearer) ? bearer : [bearer])];
  bearers.forEach(({ name, type = 'http' }) => {
    documentBuilder.addBearerAuth({ type, name });
  });

  const swaggerDocument = documentBuilder.build();
  const document = SwaggerModule.createDocument(app, swaggerDocument);
  SwaggerModule.setup(swaggerEndpoint, app, document);
};
