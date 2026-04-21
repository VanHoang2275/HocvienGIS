import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Globe, Map, Database, Code, Cpu, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { COURSES } from '../constants';
import CourseCard from '../components/CourseCard';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0A0F1E]">
        {/* Background Grid & Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />
          <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.15]" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #475569 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-widest mb-6">
                <Globe className="w-4 h-4" />
                Học viện Đào tạo GIS & Viễn thám số 1
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
                Làm chủ công nghệ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
                  Dữ liệu không gian
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                Học thực chiến trên dữ liệu vệ tinh thực tế. Lộ trình bài bản từ chuyên gia đầu ngành giúp bạn trở thành chuyên gia GIS & Viễn thám trong 6 tháng.
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <Link
                  to="/catalog"
                  className="px-8 py-5 rounded-full bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] flex items-center gap-2 group"
                >
                  Khám phá khóa học
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="flex items-center gap-3 text-white font-bold group">
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/5 transition-all">
                    <Play className="w-6 h-6 fill-white" />
                  </div>
                  Xem giới thiệu
                </button>
              </div>

              <div className="mt-12 flex items-center gap-8 border-t border-white/5 pt-8">
                <div>
                  <div className="text-3xl font-black text-white">5.000+</div>
                  <div className="text-sm text-gray-500">Học viên tốt nghiệp</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <div className="text-3xl font-black text-white">50+</div>
                  <div className="text-sm text-gray-500">Khóa học chuyên sâu</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <div className="text-3xl font-black text-white">100%</div>
                  <div className="text-sm text-gray-500">Hỗ trợ việc làm</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                 <img 
                   src="https://picsum.photos/seed/gis-map/800/800" 
                   alt="GIS Dashboard" 
                   className="w-full aspect-square object-cover"
                   referrerPolicy="no-referrer"
                 />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl z-20 shadow-xl hidden md:block">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                     <CheckCircle2 className="text-white w-6 h-6" />
                   </div>
                   <div>
                     <div className="text-white font-bold">Cấp chứng chỉ</div>
                     <div className="text-xs text-gray-400">Được doanh nghiệp công nhận</div>
                   </div>
                 </div>
              </div>
              <div className="absolute -bottom-10 -left-6 bg-[#0F172A] border border-white/10 p-8 rounded-2xl z-20 shadow-2xl hidden md:block max-w-[280px]">
                 <div className="text-orange-500 font-bold mb-2">Google Earth Engine</div>
                 <p className="text-gray-400 text-sm">Phân tích 100TB dữ liệu vệ tinh trong giây lát với Big Data Engine.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Hệ sinh thái đào tạo toàn diện</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Chúng tôi không chỉ dạy phần mềm, chúng tôi dạy tư duy giải quyết vấn đề bằng công nghệ không gian.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Map, title: 'GIS Chuyên sâu', color: 'bg-blue-500' },
              { icon: Cpu, title: 'Viễn thám', color: 'bg-green-500' },
              { icon: Code, title: 'Lập trình WebGIS', color: 'bg-orange-500' },
              { icon: Database, title: 'Hệ quản trị CSDL', color: 'bg-purple-500' },
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all group"
              >
                <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg", cat.color)}>
                  <cat.icon className="text-white w-7 h-7" />
                </div>
                <h3 className="text-white font-bold text-xl mb-4">{cat.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Lộ trình huấn luyện chuyên biệt từ cơ bản tới các bài toán nghiệp vụ phức tạp.
                </p>
                <Link to="/catalog" className="text-orange-500 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Xem lộ trình <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 bg-[#0A0F1E] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Khóa học nổi bật</h2>
              <p className="text-gray-400 text-lg">
                Các chương trình đào tạo thực chiến được học viên đánh giá cao nhất.
              </p>
            </div>
            <Link to="/catalog" className="px-8 py-4 rounded-full border border-white/10 text-white font-bold hover:bg-white/5 transition-all flex items-center gap-2">
              Xem tất cả khóa học
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-600 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            Sẵn sàng làm chủ <br /> bản đồ thế giới ngay hôm nay?
          </h2>
          <p className="text-orange-100 text-xl mb-12 max-w-2xl mx-auto">
            Hơn 5.000 học viên đã bắt đầu sự nghiệp GIS tại đây. <br />Đừng bỏ lỡ cơ hội bứt phá trong kỷ nguyên dữ liệu.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/catalog" className="px-10 py-5 rounded-full bg-white text-orange-600 font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl">
              Đăng ký ngay
            </Link>
            <Link to="/about" className="px-10 py-5 rounded-full bg-transparent border-2 border-white/30 text-white font-black text-xl hover:bg-white/10 transition-all">
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
