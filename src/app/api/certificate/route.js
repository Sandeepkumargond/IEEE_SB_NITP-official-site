import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const certId = searchParams.get("id");

  if (!certId) {
    return NextResponse.json({ error: "Certificate number required" }, { status: 400 });
  }

  // Build path correctly
  const filePath = path.resolve("./public/certificates", `${certId}.pdf`);
  console.log("Looking for certificate at:", filePath);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Certificate not found" }, { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${certId}.pdf"`,
    },
  });
}
