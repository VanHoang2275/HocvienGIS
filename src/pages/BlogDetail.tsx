import { Link, useParams } from "react-router-dom";
import { getPostBySlug } from "../lib/blog";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0F172A] text-white px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Không tìm thấy bài viết</h1>
          <Link to="/blog" className="text-orange-400 hover:underline">
            ← Quay lại Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="text-orange-400 hover:underline">
          ← Quay lại Blog
        </Link>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover rounded-2xl mt-6 mb-8"
        />

        <div className="text-sm text-orange-400 mb-3">{post.category}</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-400 mb-8">{post.date}</div>

        <div className="whitespace-pre-line text-lg leading-8 text-gray-200">
          {post.content}
        </div>
      </div>
    </div>
  );
}
