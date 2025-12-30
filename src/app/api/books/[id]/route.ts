export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { getBookById } from "@/lib/books.service";

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const book = getBookById(Number(id));

  if (!book) {
    return NextResponse.json(
      { error: "Book not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(book);
}
