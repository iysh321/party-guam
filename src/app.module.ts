import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';

import { PartiesModule } from './parties/parties.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { UserModule } from './user/user.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '!Q2w3e4r',
      database: 'party',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      migrations: [__dirname + '/**/migrations/*.js'],
      extra: {
        decimalNumbers: true, //decimal number type
      },
      bigNumberStrings: false, // bigint number type
      namingStrategy: new SnakeNamingStrategy(),
    }),
    UserModule,
    PartiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
