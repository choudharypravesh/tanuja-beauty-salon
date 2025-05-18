export interface Service {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  imageUrl: string;
}

export interface GalleryImage {
  id: number;
  imageUrl: string;
  alt: string;
}