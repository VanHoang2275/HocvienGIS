import { Course, BlogPost } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Làm chủ ArcGIS Toàn diện: Từ cơ bản đến nâng cao',
    slug: 'arcgis-mastery',
    category: 'GIS',
    level: 'Beginner',
    shortDescription: 'Khóa học giúp bạn nắm vững phần mềm ArcGIS Pro trong việc xây dựng bản đồ và phân tích không gian.',
    longDescription: 'Trong khóa học này, bạn sẽ được học cách quản lý dữ liệu bản đồ, thực hiện các phép phân tích không gian phức tạp và trình bày kết quả chuyên nghiệp...',
    price: 1500000,
    thumbnail: 'https://picsum.photos/seed/arcgis/800/600',
    duration: '20 giờ',
    studentsCount: 1250,
    instructor: 'ThS. Nguyễn Văn A',
    rating: 4.8,
    modules: [
      { title: 'Giới thiệu về GIS và ArcGIS', lessons: ['GIS là gì?', 'Giao diện ArcGIS Pro', 'Hệ tọa độ'] },
      { title: 'Quản lý Dữ liệu bản đồ', lessons: ['Tạo Feature Class', 'Geodatabase', 'Import dữ liệu Excel'] }
    ]
  },
  {
    id: '2',
    title: 'Xử lý Ảnh vệ tinh với ENVI & ERDAS',
    slug: 'remote-sensing-processing',
    category: 'Remote Sensing',
    level: 'Intermediate',
    shortDescription: 'Kỹ thuật giải đoán và phân tích biến động sử dụng đất từ ảnh Landsat, Sentinel.',
    longDescription: 'Khóa học đi sâu vào các thuật toán phân loại có kiểm tra, không kiểm tra và phân tích chỉ số thực vật NDVI, NDBI...',
    price: 1800000,
    thumbnail: 'https://picsum.photos/seed/satellite/800/600',
    duration: '25 giờ',
    studentsCount: 850,
    instructor: 'TS. Trần Thị B',
    rating: 4.9,
    modules: [
      { title: 'Cơ sở Viễn thám', lessons: ['Phổ điện từ', 'Các hệ thống vệ tinh'] },
      { title: 'Tiền xử lý Ảnh', lessons: ['Hiệu chỉnh khí quyển', 'Cắt ghép ảnh'] }
    ]
  },
  {
    id: '3',
    title: 'Lập trình WebGIS với Leaflet & OpenLayers',
    slug: 'webgis-development',
    category: 'WebGIS',
    level: 'Expert',
    shortDescription: 'Xây dựng bản đồ tương tác trực tuyến bằng Javascript.',
    longDescription: 'Học cách kết nối dữ liệu GeoJSON, xây dựng Dashboard bản đồ và tích hợp API bản đồ.',
    price: 2500000,
    thumbnail: 'https://picsum.photos/seed/webgis/800/600',
    duration: '30 giờ',
    studentsCount: 620,
    instructor: 'Kỹ sư Lê Văn C',
    rating: 4.7,
    modules: [
      { title: 'Javascript cơ bản cho GIS', lessons: ['Variables', 'Functions', 'JSON/GeoJSON'] },
      { title: 'Leaflet Fundamentals', lessons: ['Add Map Container', 'Layers and Markers'] }
    ]
  },
  {
    id: '4',
    title: 'Google Earth Engine (GEE) cho Phân tích Tài nguyên',
    slug: 'gee-analytic',
    category: 'Google Earth Engine',
    level: 'Intermediate',
    shortDescription: 'Phân tích dữ liệu lớn (Big Data) không gian ngay trên trình duyệt.',
    longDescription: 'Sử dụng sức mạnh của Google Cloud để phân tích hàng triệu ảnh vệ tinh chỉ trong vài phút.',
    price: 2200000,
    thumbnail: 'https://picsum.photos/seed/google-earth/800/600',
    duration: '22 giờ',
    studentsCount: 450,
    instructor: 'Chuyên gia GEE Nguyễn Văn D',
    rating: 5.0,
    modules: [
      { title: 'Bắt đầu với GEE', lessons: ['Code Editor', 'JavaScript API in GEE'] },
      { title: 'Xử lý chuỗi thời gian', lessons: ['Time-series analysis', 'Trend detection'] }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: '5 phần mềm GIS miễn phí tốt nhất 2024',
    slug: 'best-free-gis-software-2024',
    date: '2024-03-20',
    excerpt: 'Khám phá QGIS, GRASS GIS và các công cụ mạnh mẽ khác không mất phí bản quyền.',
    content: 'Chi tiết nội dung bài viết...',
    author: 'Admin',
    thumbnail: 'https://picsum.photos/seed/gis-software/800/600',
    tags: ['Thủ thuật', 'Phần mềm']
  },
  {
    id: 'b2',
    title: 'Ứng dụng viễn thám trong giám sát cháy rừng',
    slug: 'remote-sensing-fire-monitoring',
    date: '2024-03-15',
    excerpt: 'Sử dụng ảnh vệ tinh nhiệt để phát hiện sớm các điểm cháy và lan truyền.',
    content: 'Chi tiết nội dung bài viết...',
    author: 'TS. Nguyễn Văn E',
    thumbnail: 'https://picsum.photos/seed/fire/800/600',
    tags: ['Ứng dụng', 'Môi trường']
  }
];
