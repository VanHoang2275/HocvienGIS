import * as React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Course } from '../types';
import { cn } from '../lib/utils';

interface CourseCardProps {
  course: Course;
  key?: React.Key;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-[#1E293B] rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/50 transition-all shadow-xl"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className={cn(
            "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border",
            course.level === 'Beginner' ? "bg-green-500/20 text-green-400 border-green-500/30" :
            course.level === 'Intermediate' ? "bg-blue-500/20 text-blue-400 border-blue-500/30" :
            "bg-purple-500/20 text-purple-400 border-purple-500/30"
          )}>
            {course.level}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
          <span className="text-sm font-bold text-white">{course.rating}</span>
          <span className="text-xs text-gray-500">({course.studentsCount} học viên)</span>
        </div>

        <h3 className="text-white font-bold text-lg mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
          {course.title}
        </h3>

        <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.instructor}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Học phí</span>
            <span className="text-xl font-black text-orange-500">
              {course.price.toLocaleString('vi-VN')}đ
            </span>
          </div>
          <Link
            to={`/course/${course.slug}`}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500 transition-all"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
