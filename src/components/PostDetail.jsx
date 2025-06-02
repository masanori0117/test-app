import { posts } from '../data/posts';
import { useParams } from 'react-router-dom';
import PostDetailImage from './PostDetailImage';

export default function PostDetail() {
  const { id } = useParams();
  const postId = Number(id);
  const post = posts.find(post => post.id === postId);

  if (!post) {
    return <div className="p-4">投稿が見つかりませんでした。</div>;
  }

  return (
    <div className="p-4 mb-6 flex flex-col">
      <PostDetailImage imageName={post.thumbnailUrl} />
      <div className="flex justify-between">
        <p className="text-sm text-gray-500 mb-2">
          {new Date(post.createdAt).toLocaleDateString("ja-JP")}
        </p>
        <div className="flex gap-2">
          {post.categories.map((category, index) => (
            <span
              key={index}
              className="text-blue-700 border border-blue-700 text-xs px-2 py-1 rounded font-medium"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      <h1 className="text-2xl mb-4 mt-2 font-semibold text-left">{post.title}</h1>
      <div
        className="text-left mb-3 font-medium"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}