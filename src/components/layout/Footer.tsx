import { Link } from "react-router-dom";
import { courses } from "../../lib/courses";
import { posts } from "../../lib/blog";

export default function Footer() {
  const featuredCourses = courses.slice(0, 4);
  const latestPosts = posts.slice(0, 4);

  return (
    <footer className="bg-[#0B132B] text-white px-6 py-14 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-bold mb-4">HocvienGIS</h3>
          <p className="text-gray-400 leading-7">
            Nền tảng học tập và chia sẻ kiến thức về GIS, Viễn thám, Google
            Earth Engine và các ứng dụng thực tiễn trong tài nguyên môi trường.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Khóa học</h4>
          <ul className="space-y-3 text-gray-300">
            {featuredCourses.map((course) => (
              <li key={course.slug}>
                <Link
                  to={`/courses/${course.slug}`}
                  className="hover:text-orange-400 transition"
                >
                  {course.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/courses"
                className="text-orange-400 hover:underline font-medium"
              >
                Xem tất cả khóa học →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Blog mới</h4>
          <ul className="space-y-3 text-gray-300">
            {latestPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="hover:text-orange-400 transition"
                >
                  {post.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/blog"
                className="text-orange-400 hover:underline font-medium"
              >
                Xem tất cả bài viết →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
