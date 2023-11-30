import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {writeFileSync} from 'fs';
const yaml = require('yaml');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('bpmn')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document,{
    swaggerOptions: { showExtensions: true, persistAuthorization: true },
  });

  writeFileSync('./openapi.yaml', yaml.stringify(document));
  await app.listen(3000);
}
bootstrap();
