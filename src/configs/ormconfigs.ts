import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import {ConfigService, registerAs} from '@nestjs/config';
import {DatabaseType} from 'typeorm';


const config: ConfigService = new ConfigService();

const getOrmConfig = (config: ConfigService): TypeOrmModuleOptions => {

    return {
        type: config.get<DatabaseType>(`DB_TYPE`),
        host: config.get(`DB_HOST`),
        port: config.get<number>(`DB_PORT`),
        database: config.get(`DB_NAME`),
        username: config.get(`DB_USERNAME`),
        password: config.get(`DB_PASSWORD`),
        synchronize: config.get('DB_SYNC'),
        autoLoadEntities: true,
        cli: {
            entitiesDir: "src/**/entities",
            migrationsDir: 'src/resources/migrations',
        },
        //migrationsRun: true,
        migrations: ['dist/src/resources/migrations/**/*{.ts,.js}'],
        seeds: ['dist/src/resources/seeds/**/*{.ts,.js,.json}'],
        factories: ['src/resources/factories/**/*{.ts,.js}'],
        entities: ["dist/**/*.entity{.ts,.js}"],
        migrationsTableName: "migrations",
    } as TypeOrmModuleOptions;
};

export const dbConnectionsConfig = registerAs('DB_CONFIG', () => getOrmConfig(config));


export default getOrmConfig(config);
