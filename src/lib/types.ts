export interface Book {
  id: number;
  title: string;
  author: string;
  genre?: string;
  publishedYear?: number;
  description?: string;
  isbn?: string;
  pages?: number;
  rating?: number;
}
