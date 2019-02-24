import { Module, Global } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { PostsModule } from './module/posts/posts.module';
import { PostsService } from './service/posts/posts.service';
import { DatabaseModule } from './database/database.module';
import { Posts } from './model/entity/posts.entity';

@Global()
@Module({
  imports: [PostsModule, DatabaseModule, TypeOrmModule.forFeature([Posts])],
  controllers: [AppController],
  providers: [AppService, PostsService],
})
export class AppModule { }
