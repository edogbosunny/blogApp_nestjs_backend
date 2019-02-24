import { Get, Post, Res, Param, Body, HttpCode, Controller, Patch, Put, Delete } from '@nestjs/common';
import { PostsService } from '../../service/posts/posts.service';
import { Posts } from '../../model/entity/posts.entity';

@Controller('posts')
export class PostsController {

  constructor(private readonly postService: PostsService) { }
  @Get()
  async findAll(@Res() res) {
    res.send(await this.postService.findAll());
  }

  @Post()
  async createPost(@Body() post: Posts) {
    // console.log('--->', post);
    const createdPost = await this.postService.create(post);
    return {
      message: 'post created succesfully',
      data: createdPost,
    };
  }

  // find single post by ID
  @Get(':id')
  async getById(@Param() params: any) {
    return this.postService.findByID(parseInt(params.id, 10));
  }

  // Update post
  @Put(':id')
  async updateById(@Body() post: Posts, @Res() res, @Param('id') id: number) {
    await this.postService.updateData(id, post);
    return res.json(await { message: 'post updated succesfully' });
  }
  // Delete
  @Delete(':id')
  async remove(@Param('id') id, @Res() res) {
    await this.postService.delete(id);
    return res.json(await { message: 'post deleted succesfully' });
  }
}
