import { Link, useParams } from "react-router-dom";
import { getCourseBySlug } from "../lib/courses";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <div className="min-h-screen bg-[#0F172A] text-white px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Không tìm thấy khóa học</h1>
          <Link to="/courses" className="text-orange-400 hover:underline">
            ← Quay lại danh sách khóa học
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-white px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <Link to="/courses" className="text-orange-400 hover:underline">
          ← Quay lại danh sách khóa học
        </Link>

        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-80 object-cover rounded-2xl mt-6 mb-8"
        />

        <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
          <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400">
            {course.level}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300">
            {course.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300">
            Giảng viên: {course.instructor}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
        <p className="text-lg text-gray-300 leading-8 mb-6">
          {course.description}
        </p>

        <div className="mb-10 flex items-center justify-between flex-wrap gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div>
            <div className="text-sm text-gray-400 mb-1">Học phí</div>
            <div className="text-3xl font-bold text-white">{course.price}</div>
          </div>

          <a
            href={course.ctaLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-400 transition"
          >
            {course.ctaText}
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <section className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold mb-4">Bạn sẽ học được gì</h2>
            <ul className="space-y-3 text-gray-300">
              {course.objectives.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold mb-4">Phù hợp với</h2>
            <ul className="space-y-3 text-gray-300">
              {course.audience.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold mb-4">Nội dung khóa học</h2>
          <ul className="space-y-3 text-gray-300">
            {course.contents.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
