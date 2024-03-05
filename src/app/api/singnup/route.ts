import { NextRequest, NextResponse } from "next/server";

// export const GET = async (req: NextRequest) => {
//   const data = await req.nextUrl.searchParams;
//   console.log(data.has("name"));

//   if (data.has("age") && data.has('name')) {
//     return NextResponse.json({ message: `Welcome ${data}` });
//   } else {
//     return NextResponse.json({ message: "missing name in params" });
//   }
// };

export const POST = async (req: NextRequest) => {
  const ress = await req.json();

  return NextResponse.json({ data: ress });
};
