import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './modules/chat/chat.gateway';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { dbConnectionsConfig } from './configs/ormconfigs';
import { AuthModule } from './modules/auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './modules/auth/strategy/jwt.strategy';
import { JwtModule } from './modules/jwt/jwt.module';
import { DatabaseModule } from './modules/database/database.module';


@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
      expandVariables: true,
      load: [dbConnectionsConfig],
    }),
    DatabaseModule,
    JwtModule,
    AuthModule,
    UserModule,
    PassportModule.register({})
  ],
  controllers: [AppController],
  providers: [
    AppService, 
    ChatGateway,
    JwtStrategy,
  ],
})
export class AppModule {}
