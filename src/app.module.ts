import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';

import { PartyModule } from './party/party.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { UserModule } from './user/user.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './common/interceptor/response';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      migrations: [__dirname + '/**/migrations/*.js'],
      extra: {
        decimalNumbers: true, //decimal number type
      },
      bigNumberStrings: false, // bigint number type
      namingStrategy: new SnakeNamingStrategy(),
      logging: process.env.MODE_ENV !== 'prod',
    }),
    UserModule,
    PartyModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {
  constructor() {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
