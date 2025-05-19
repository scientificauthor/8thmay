import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalValidationPipe } from './common/pipes/validation.pipe';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    cors:true
  });
  app.useGlobalPipes(GlobalValidationPipe);

  const config = new DocumentBuilder()
    .setTitle('API Docs')
    .setVersion('1.0')
    .build();
  app.setGlobalPrefix('api');
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT ?? 5002);
}
bootstrap();
