import { Injectable } from '@nestjs/common';
import { Posts } from './posts.entity';
import { v4 } from 'uuid';

@Injectable()
export class PostsService {
  // simulate a database
  private posts: Posts[] = [
    {
      id: '1',
      title: 'First post',
      content: 'This is the first post',
      img: 'https://picsum.photos/200/300',
    },
    {
      id: '2',
      title: 'Second post',
      content: 'This is the second post',
      img: 'https://picsum.photos/200/300',
    },
    {
      id: '3',
      title: 'Third post',
      content: 'This is the third post',
      img: 'https://picsum.photos/200/300',
    },
    {
      id: '4',
      title: 'Fourth post',
      content: 'This is the fourth post',
      img: 'https://picsum.photos/200/300',
    },
  ];

  getPosts(): Posts[] {
    return this.posts;
  }

  getPost(id: string): Posts {
    return this.posts.find((post: Posts) => post.id == id);
  }

  createPost(title: string, content: string): Posts[] {
    const newPost: Posts = {
      id: v4(),
      title,
      content,
    };
    this.posts.push(newPost);
    return this.posts;
  }

  deletePost(id: string): Posts[] {
    this.posts = this.posts.filter((post: Posts) => post.id !== id);
    return this.posts;
  }

  updatePost(id: string, updatedPost): Posts {
    const index = this.posts.findIndex((post: Posts) => post.id == id);
    const newPost = Object.assign(this.posts[index], updatedPost);
    return (this.posts[index] = newPost);
  }
}
