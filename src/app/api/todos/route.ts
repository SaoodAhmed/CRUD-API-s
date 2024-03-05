import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    todos: [
      { id: 1, name: "saud" },
      { id: 2, name: "Ahmed" },
      { id: 3, name: "Hamzaa" },
    ],
  });
};
