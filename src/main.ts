import * as path from 'path';
import * as YAML from 'yamljs';
import { SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './common/config';
import { initAdmin } from './helpers/db';

const { PORT } = config;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
  SwaggerModule.setup('/doc', app, swaggerDocument);

  await app.listen(PORT, () =>
    process.stdout.write(`App is running on http://localhost:${PORT} \n`),
  );
}
bootstrap().then(async () => {
  await initAdmin();
});
