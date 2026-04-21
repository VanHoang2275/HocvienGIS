import { Link } from 'react-router-dom';
import { Map, Facebook, Youtube, Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Map className="text-orange-500 w-8 h-8" />
              <span className="text-white font-bold text-xl">HocvienGIS</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dẫn đầu trong đào tạo công nghệ dữ liệu không gian tại Việt Nam. 
              Chúng tôi cung cấp lộ trình thực chiến từ cơ bản đến chuyên gia.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Khóa học</h3>
            <ul className="space-y-4">
              <li><Link to="/catalog" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">ArcGIS Cơ bản</Link></li>
              <li><Link to="/catalog" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">QGIS Chuyên nghiệp</Link></li>
              <li><Link to="/catalog" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Viễn thám nâng cao</Link></li>
              <li><Link to="/catalog" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Google Earth Engine</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6">Học viện</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Về chúng tôi</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Dự án tiêu biểu</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Blog kiến thức</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-gray-400 text-sm">support@hocviengis.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-gray-400 text-sm">0901.123.456</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-gray-400 text-sm">Hà Nội & TP. Hồ Chí Minh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-xs">
            © 2024 HocvienGIS. Nền tảng đào tạo GIS hàng đầu Việt Nam.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white">Điều khoản</a>
            <a href="#" className="hover:text-white">Bảo mật</a>
            <a href="#" className="hover:text-white">Sơ đồ trang</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
