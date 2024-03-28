import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule as NestJwtModule  } from "@nestjs/jwt";


@Module({
  providers: [ConfigService],
  imports: [
    NestJwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        secret: config.get('JWT_SECRET'),
        signOptions: {
          expiresIn: '3600s',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [NestJwtModule],
})

export class JwtModule {}