import './App.css'
import { posts } from './data/posts'
import PostCard from './components/PostCard'
import Header from './components/Header'

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto mt-20 px-4">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
};

export default App;
