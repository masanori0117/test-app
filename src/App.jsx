import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'

export default function App() {
  return (
    <div className='App'>
      <div className="min-h-screen">
        <Header />
        <main className="max-w-3xl mx-auto mt-20 px-4">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
