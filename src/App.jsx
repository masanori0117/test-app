import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'
import InquiryForm from './components/InquiryForm'

export default function App() {
  return (
    <div className='App'>
      <div className="min-h-screen">
        <Header />
        <main className="w-full max-w-[1200px] mx-auto mt-20 px-4">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/inquiry" element={<InquiryForm />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
