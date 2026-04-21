import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogDetail() {
  const { slug } = useParams();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-white p-20">
        Không tìm thấy bài viết
      </div>
    );
  }

  return (
    <div className="bg-[#0F172A] text-white min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <Link
          to="/blog"
          className="text-orange-400"
        >
          ← Quay lại Blog
        </Link>

        <img
          src={post.image}
          className="rounded-2xl my-8 w-full h-80 object-cover"
        />

        <div className="text-sm text-orange-400 mb-3">
          {post.category}
        </div>

        <h1 className="text-5xl font-bold mb-4">
          {post.title}
        </h1>

        <div className="text-gray-400 mb-8">
          {post.date}
        </div>

        <div className="whitespace-pre-line text-lg leading-8 text-gray-200">
          {post.content}
        </div>
      </div>
    </div>
  );
}
