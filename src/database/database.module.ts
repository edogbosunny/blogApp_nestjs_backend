import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedTypes } from '../common/Types';
import { Posts } from '../model/entity/posts.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: SharedTypes.DatabaseUri,
      entities: [Posts],
      synchronize: true,
      logging: process.env.DATABASE_LOGGING === 'true',
    }),
  ],
})
export class DatabaseModule { }
