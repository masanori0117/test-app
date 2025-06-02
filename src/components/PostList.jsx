
import { posts } from '../data/posts';
import PostCard from './PostCard';

export default function PostList() {
  return (
    <>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}