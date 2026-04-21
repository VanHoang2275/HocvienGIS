import * as React from 'react';
import { COURSES } from '../constants';
import CourseCard from '../components/CourseCard';

export default function Catalog() {
  return (
    <div className="py-24 bg-[#0F172A] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-black text-white mb-6">Tất cả khóa học</h1>
          <p className="text-gray-400 max-w-2xl">
            Lựa chọn lộ trình phù hợp với mục tiêu nghề nghiệp của bạn. 
            Từ GIS cơ bản đến phân tích dữ liệu lớn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
