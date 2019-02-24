import { Repository } from 'typeorm';
import { Posts } from '../../model/entity/posts.entity';
import { PostsDTO } from '../../model/dto/posts.dto';
export declare class PostsService {
    private readonly posts;
    constructor(posts: Repository<Posts>);
    findAll(): Promise<PostsDTO[]>;
    create(createPost: Posts): Promise<Posts>;
    updateData(id: number, createPost: Posts): Promise<import("typeorm").UpdateResult>;
    findByID(id: number): Promise<Posts>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
