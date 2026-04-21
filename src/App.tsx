import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Catalog from "./pages/Catalog";
import CourseDetail from "./pages/CourseDetail";

export default function App() {
  return (
    <BrowserRouter basename="/HocvienGIS">
      <div className="min-h-screen bg-[#0F172A] text-white flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Catalog />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
