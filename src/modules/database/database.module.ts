import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    providers: [ConfigService],
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
                return configService.get('DB_CONFIG');
            },
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}
