import { books } from "./books.store";
import { Book } from "./types";

export function getAllBooks(): Book[] {
  return books;
}

export function getBookById(id: number): Book | undefined {
  return books.find(b => b.id === id);
}

export function addBook(book: Partial<Book>): Book {
  if (!book.title || !book.author) {
    throw new Error("Title and Author are required");
  }

  const newBook: Book = {
    id: books.length + 1,
    title: book.title,
    author: book.author,
    genre: book.genre,
    publishedYear: book.publishedYear,
    description: book.description,
    isbn: book.isbn,
    pages: book.pages,
    rating: book.rating ?? 0,
  };

  books.push(newBook);
  return newBook;
}
