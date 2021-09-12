import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

declare const module: any;

function swaggerConfig(app) {
  const config = new DocumentBuilder()
    .setTitle('Doctor Case Label')
    .setDescription('description...')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-ui', app, document);
}

async function bootstrap() {
  const PORT = 3001;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  swaggerConfig(app);
  await app.listen(PORT);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();

