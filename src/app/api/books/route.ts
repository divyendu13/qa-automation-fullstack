export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { getAllBooks, addBook } from "@/lib/books.service";

export async function GET() {
  return NextResponse.json(getAllBooks());
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const book = addBook(body);
    return NextResponse.json(book, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 400 }
    );
  }
}
