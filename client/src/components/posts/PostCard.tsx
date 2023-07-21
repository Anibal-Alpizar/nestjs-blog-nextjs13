import { Posts } from '../../../types/posts.index';
import Image from 'next/image';

function PostCard({ post }: { post: Posts }) {
  const {
    title,
    content,
    img,
  }: { title: string; content: string; img?: string } = post;

  const defaultImg = 'https://picsum.photos/500/500'; // random image

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-4">{content}</p>

      <Image
        className="w-full rounded-lg"
        width={500}
        height={500}
        src={img || defaultImg}
        alt={title}
      />
    </div>
  );
}

export default PostCard;
