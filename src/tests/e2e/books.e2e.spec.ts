import { test, expect } from "@playwright/test";

test("user can see a newly added book", async ({ page, request }) => {
  // Arrange: create book via API (fast, stable)
  const res = await request.post("/api/books", {
    data: {
      title: "UI Test Book",
      author: "QA Engineer",
    },
  });

  const book = await res.json();
 
  // Act: visit UI
  await page.goto("/");
   await page.pause()
  // Assert: book appears
  await expect(
    page.getByText(book.title)
  ).toBeVisible();
});
