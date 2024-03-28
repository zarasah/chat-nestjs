import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as passport from "passport";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);

  app.enableCors({
    origin: configService.get('ACCESS_CONTROL_ALLOW_ORIGIN', '*'),
  });

  app.setGlobalPrefix(configService.get('PREFIX'));
  app.useGlobalPipes(new ValidationPipe());

  app.use(passport.initialize());

  await app.listen(configService.get('PORT', 3300),);
}
bootstrap();
