import { PostsService } from '../../service/posts/posts.service';
import { Posts } from '../../model/entity/posts.entity';
export declare class PostsController {
    private readonly postService;
    constructor(postService: PostsService);
    findAll(res: any): Promise<void>;
    createPost(post: Posts): Promise<{
        message: string;
        data: Posts;
    }>;
    getById(params: any): Promise<Posts>;
    updateById(post: Posts, res: any, id: number): Promise<any>;
    remove(id: any, res: any): Promise<any>;
}
