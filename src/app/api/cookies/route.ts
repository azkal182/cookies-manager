// import { NextResponse } from "next/server";
// import { parseNetscapeText, saveCookies } from "@/lib/cookieUtils";

// export async function POST(req: Request) {
//   const { raw, domain } = await req.json();

//   try {
//     const parsed = parseNetscapeText(raw);

//     const cookies = Object.values(parsed)
//       .flat()
//       .map((cookie) => ({
//         ...cookie,
//         domain,
//       }));

//     saveCookies({ [domain]: cookies });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: "Failed to parse cookies" },
//       { status: 400 }
//     );
//   }
// }

// export async function GET() {
//   const { readCookies } = await import("@/lib/cookieUtils");
//   const data = readCookies();
//   return NextResponse.json(data);
// }

import { NextResponse } from "next/server";
import { parseNetscapeText, readCookies, saveCookies } from "@/lib/cookieUtils";
// import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { raw, domain, label } = await req.json();

  try {
    const cookies = parseNetscapeText(raw);
    console.log({ domain, label, cookies });

    const domainExist = await prisma?.streaming.findUnique({
      where: {
        id: Number(domain),
      },
    });

    if (!domainExist) {
      return NextResponse.json(
        { success: false, error: "No Domain exist" },
        { status: 404 }
      );
    }

    // const allCookies = readCookies();
    // const domainIndex = allCookies.findIndex((entry) => entry.name === domain);

    // if (domainIndex !== -1) {
    //   // domain sudah ada
    //   const domainEntry = allCookies[domainIndex];

    //   // cek label apakah sudah ada
    //   const labelExists = domainEntry.data.some((d) => d.label === label);
    //   if (labelExists) {
    //     return NextResponse.json(
    //       { success: false, error: "Label already exists for this domain" },
    //       { status: 400 }
    //     );
    //   }

    //   domainEntry.data.push({ label, cookies });
    // } else {
    //   // domain belum ada
    //   allCookies.push({
    //     name: domain,
    //     data: [{ label, cookies }],
    //   });
    // }

    const data = await saveCookies({
      streamingId: domainExist.id,
      data: { label, cookies },
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: "Failed to parse cookies" },
      { status: 400 }
    );
  }
}

export async function GET() {
  const data = await readCookies();
  return NextResponse.json(data);
}
