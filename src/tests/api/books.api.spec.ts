import { test, expect } from "@playwright/test";

test.describe("Books API", () => {
  test("create and fetch a book", async ({ request }) => {
    const createRes = await request.post("/api/books", {
      data: {
        title: "Psycho-Cybernetics",
        author: "Maxwell Maltz",
      },
    });

    expect(createRes.status()).toBe(201);

    const created = await createRes.json();
    expect(created.id).toBeDefined();

    const fetchRes = await request.get(`/api/books/${created.id}`);
    expect(fetchRes.status()).toBe(200);

    const fetched = await fetchRes.json();
    expect(fetched.title).toBe("Psycho-Cybernetics");
  });
});
