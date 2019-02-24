import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { DatabaseModule } from '../../database/database.module';
import { PostsService } from '../../service/posts/posts.service';
import { Posts } from '../../model/entity/posts.entity';

@Module({
  imports: [DatabaseModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule { }
