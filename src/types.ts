export interface Course {
  id: string;
  title: string;
  slug: string;
  category: 'GIS' | 'Remote Sensing' | 'WebGIS' | 'Google Earth Engine' | 'Specialized';
  level: 'Beginner' | 'Intermediate' | 'Expert';
  shortDescription: string;
  longDescription: string;
  price: number;
  thumbnail: string;
  duration: string;
  studentsCount: number;
  instructor: string;
  rating: number;
  modules: {
    title: string;
    lessons: string[];
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  thumbnail: string;
  tags: string[];
}
