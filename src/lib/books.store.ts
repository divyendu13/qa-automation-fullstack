import { Book } from "./types";

declare global {
  var __books__: Book[] | undefined;
}

export const books: Book[] = global.__books__ ?? [];

if (!global.__books__) {
  global.__books__ = books;
}
