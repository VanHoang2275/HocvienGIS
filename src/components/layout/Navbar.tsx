import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Map, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

const NAV_LINKS = [
  { name: 'Trang chủ', href: '/' },
  { name: 'Khóa học', href: '/catalog' },
  { name: 'Blog', href: '/blog' },
  { name: 'Dự án', href: '/projects' },
  { name: 'Giới thiệu', href: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-[#0F172A]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-orange-500/20">
              <Map className="text-white w-6 h-6" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Hocvien<span className="text-orange-500">GIS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-orange-500",
                  location.pathname === link.href ? "text-orange-500" : "text-gray-300"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-gray-300 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link 
              to="/login"
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-orange-500 text-white hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 active:scale-95"
            >
              Vào học
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1E293B] border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-medium rounded-lg",
                    location.pathname === link.href 
                      ? "text-orange-500 bg-orange-500/10" 
                      : "text-gray-300 hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link 
                  to="/login"
                  className="w-full py-4 text-center rounded-xl bg-orange-500 text-white font-bold"
                >
                  Vào học ngay
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
