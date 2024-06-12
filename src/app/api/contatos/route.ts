import { NextResponse } from "next/server";

export async function GET() {
  const contatos = [
    {
      nome: "Wesley",
      email: "wesley@uol.com"
    },
    {
      nome: "Marcela",
      email: "marcela@uol.com"
    }
  ]

  return new NextResponse(JSON.stringify(contatos), {
    status: 200,
    statusText: "OK"
  });
}