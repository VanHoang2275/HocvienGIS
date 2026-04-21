import { Link } from "react-router-dom";
import { courses } from "../lib/courses";

export default function Catalog() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold">Khóa học</h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Danh mục các khóa học GIS, Viễn thám và Google Earth Engine dành cho
            người học từ cơ bản đến nâng cao.
          </p>
        </div>

        {courses.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Link
                key={course.slug}
                to={`/courses/${course.slug}`}
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300 hover:-translate-y-1"
              >
                <div className="overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-orange-400 font-medium">
                      {course.level}
                    </span>
                    <span className="text-gray-500">{course.duration}</span>
                  </div>

                  <h2 className="text-xl font-bold leading-snug mb-3 group-hover:text-orange-400 transition">
                    {course.title}
                  </h2>

                  <p className="text-sm text-gray-400 leading-6 line-clamp-3">
                    {course.shortDescription}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-lg font-semibold text-white">
                      {course.price}
                    </span>
                    <span className="text-sm text-orange-400 font-medium">
                      Xem chi tiết →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-3">
              Chưa có khóa học nào
            </h3>
            <p className="text-gray-400">
              Hãy thêm file vào thư mục{" "}
              <span className="text-orange-400">src/content/courses</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
