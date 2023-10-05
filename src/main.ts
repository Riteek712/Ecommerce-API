import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('E Commerse API')
  .setDescription('The NEST.js and PostgreSQL E-commerce API with TypeORM is a powerful and flexible solution designed to enable seamless and efficient e-commerce operations. Leveraging the robust NEST.js framework and PostgreSQL database management system, this API offers a scalable and secure foundation for building feature-rich e-commerce applications. TypeORM, a popular Object-Relational Mapping (ORM) library, is seamlessly integrated into this API to simplify database interactions, making development faster and more maintainable.')
  .setVersion('1.0')
  // .addTag('cats')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({whitelist:true}))
  app.setGlobalPrefix('api/v1')
  await app.listen(3000);
}
bootstrap();
