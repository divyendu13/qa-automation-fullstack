export const dynamic = "force-dynamic";

interface Book {
  id: number;
  title: string;
  author: string;
}

async function getBooks(): Promise<Book[]> {
  const res = await fetch("http://localhost:3000/api/books", {
    cache: "no-store",
  });
  return res.json();
}

export default async function HomePage() {
  const books = await getBooks();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Book Library</h1>

      {books.length === 0 && (
        <p>No books available</p>
      )}

      <ul>
        {books.map((book) => (
          <li key={book.id} className="mb-2">
            <strong>{book.title}</strong> — {book.author}
          </li>
        ))}
      </ul>
    </main>
  );
}
