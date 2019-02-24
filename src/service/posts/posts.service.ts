import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from '../../model/entity/posts.entity';
import { PostsDTO } from '../../model/dto/posts.dto';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Posts) private readonly posts: Repository<Posts>) { }

  // find all
  async findAll(): Promise<PostsDTO[]> {
    return await this.posts.find();
  }

  // create post
  async create(createPost: Posts): Promise<Posts> {
    const createdPost = this.posts.save(createPost);
    return createdPost;
  }

  // update post ***
  async updateData(id: number, createPost: Posts) {
    const updatedPost = this.posts.update(id, createPost);
    return updatedPost;
  }

    // find post by ID
    async findByID(id: number): Promise<Posts> {
      const result = await this.posts.find({ id });
      return result[0];
    }

  // delete request
  async delete(id: number) {
    const deletedData = await this.posts.delete(id);
    return deletedData;
  }
}
