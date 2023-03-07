import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as morgan from 'morgan';
import { AppModule } from './app.module';
import configuration from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = configuration();
  app.use(morgan(config.node_env));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(config.port);
}
bootstrap().then(() =>
  console.log('Service listening 👍', configuration().port),
);
