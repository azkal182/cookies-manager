// import fs from "fs";
// import path from "path";

// const COOKIE_PATH = path.resolve(process.cwd(), "cookies.json");

// export function parseNetscapeText(text: string) {
//   const lines = text
//     .split("\n")
//     .filter((line) => line && !line.startsWith("#"));
//   const cookies: Record<string, any[]> = {};

//   for (const line of lines) {
//     const parts = line.split("\t");
//     if (parts.length >= 7) {
//       const [domain, flag, path, secure, expires, name, value] = parts;
//       if (!cookies[domain]) cookies[domain] = [];
//       cookies[domain].push({
//         domain,
//         path,
//         secure: secure === "TRUE",
//         expires: Number(expires),
//         name,
//         value,
//       });
//     }
//   }

//   return cookies;
// }

// export function saveCookies(newData: Record<string, any[]>) {
//   const oldData = readCookies();
//   const merged = { ...oldData, ...newData };
//   fs.writeFileSync(COOKIE_PATH, JSON.stringify(merged, null, 2));
// }

// export function readCookies(): Record<string, any[]> {
//   try {
//     const raw = fs.readFileSync(COOKIE_PATH, "utf-8");
//     return JSON.parse(raw);
//   } catch {
//     return {};
//   }
// }

// lib/cookieUtils.ts

// 1. Parsing dari format Netscape ke format array of cookies
export function parseNetscapeText(text: string) {
  const lines = text
    .split("\n")
    .filter((line) => line && !line.startsWith("#"));

  const cookies: any[] = [];

  for (const line of lines) {
    const parts = line.split("\t");
    if (parts.length >= 7) {
      const [domain, flag, path, secure, expires, name, value] = parts;
      cookies.push({
        domain,
        path,
        secure: secure === "TRUE",
        expires: Number(expires),
        name,
        value,
      });
    }
  }

  return cookies;
}

// // 2. Membaca cookies (format: Array<{ name, data }>)
// export function readCookies(): {
//   name: string;
//   data: { label: string; cookies: any[] }[];
// }[] {
//   try {
//     const raw = fs.readFileSync(COOKIE_PATH, "utf-8");
//     return JSON.parse(raw);
//   } catch {
//     return [];
//   }
// }

// // 3. Menyimpan cookies (override seluruh array)
// export function saveCookies(
//   data: { name: string; data: { label: string; cookies: any[] }[] }[]
// ) {
//   fs.writeFileSync(COOKIE_PATH, JSON.stringify(data, null, 2));
// }
// 2. Membaca cookies (format: Array<{ name, data }>)

export async function readCookies() {
  try {
    //   const raw = fs.readFileSync(COOKIE_PATH, "utf-8");
    //   return JSON.parse(raw);
    const data = await prisma?.streaming.findMany({
      include: {
        cookies: true,
      },
      where: {
        cookies: {
          some: {},
        },
      },
    });

    const result = data?.map((item) => {
      return {
        name: item.domain,
        data: item.cookies.map((cook) => {
          return {
            label: cook.label,
            cookies: cook.cookies,
          };
        }),
      };
    });
    return result;
  } catch {
    return [];
  }
}

// 3. Menyimpan cookies (override seluruh array)
export async function saveCookies(body: {
  streamingId: number;
  data: { label: string; cookies: any[] };
}) {
  return await prisma?.cookies.create({
    data: {
      cookies: body.data.cookies,
      label: body.data.label,
      streamingId: body.streamingId,
    },
  });
  // return;
}
