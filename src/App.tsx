import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import CourseDetail from './pages/CourseDetail';
import Blog from './pages/Blog';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0F172A]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/course/:slug" element={<CourseDetail />} />
            <Route path="/blog" element={<Blog />} />
            {/* Fallback for other links mentioned in navbar */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
