// import { posts } from '../data/posts';
import PostCard from './PostCard';
import { useState, useEffect } from 'react';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchPost = async() => {
        try {
          const response = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
          const data = await response.json();
          const postArray = data.posts;
          setPosts(postArray);
        } catch(error) {
          console.error("データ取得失敗:", error);
        } finally {
            setLoading(false);
        }
      }
      fetchPost();
    }, []);

  if (loading) {
    return <div className="p-4">読み込み中...</div>;
  }

  return (
    <>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}