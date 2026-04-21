import { Link } from "react-router-dom";
import { posts } from "../lib/blog";

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold">Blog & Kiến thức</h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Chia sẻ kiến thức chuyên sâu về GIS, Viễn thám, Google Earth Engine
            và các ứng dụng thực tiễn trong tài nguyên môi trường.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300 hover:-translate-y-1"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-orange-400 font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500">{post.date}</span>
                  </div>

                  <h2 className="text-xl font-bold leading-snug mb-3 group-hover:text-orange-400 transition">
                    {post.title}
                  </h2>

                  <p className="text-sm text-gray-400 leading-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 text-sm text-orange-400 font-medium">
                    Đọc tiếp →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-3">
              Chưa có bài viết nào
            </h3>
            <p className="text-gray-400">
              Hãy thêm file vào thư mục{" "}
              <span className="text-orange-400">src/content/blog</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
