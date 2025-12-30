import { describe, it, expect, beforeEach } from "vitest";
import { addBook, getBookById } from "@/lib/books.service";
import { books } from "@/lib/books.store";

describe("Books Service", () => {
  beforeEach(() => {
    books.length = 0; // reset shared state
  });

  it("should add a book with valid input", () => {
    const book = addBook({
      title: "Psycho-Cybernetics",
      author: "Maxwell Maltz",
    });

    expect(book.id).toBe(1);
    expect(book.title).toBe("Psycho-Cybernetics");
  });

  it("should throw error if title is missing", () => {
    expect(() =>
      addBook({ author: "Someone" })
    ).toThrow("Title and Author are required");
  });

  it("should return book by id", () => {
    const book = addBook({
      title: "Test Book",
      author: "QA",
    });

    const found = getBookById(book.id);
    expect(found?.title).toBe("Test Book");
  });
});
