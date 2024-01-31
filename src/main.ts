import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 8000;

  app.enableCors({
    origin: process.env.NODE_ENV === 'development' ? true : [''],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  if (process.env.NODE_ENV === 'development') {
    app.useLogger(new Logger());
  }

  await app.listen(PORT);
  Logger.log(`Application running on port ${PORT}`);
}
bootstrap();
