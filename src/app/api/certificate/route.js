import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(request, { params }) {
  const { certificateNo } = params;

  try {
    // Path to your mock.json in the public folder
    const filePath = path.join(process.cwd(), "public", "mock.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    // Find member with matching certificate number
    const member = data.members.find(
      (m) => m.certificate_no.toUpperCase() === certificateNo.toUpperCase()
    );

    if (!member) {
      return NextResponse.json({ error: "Certificate not found" }, { status: 404 });
    }

    // You can add certificate info here if you want
    const certificate = {
      certificate_no: member.certificate_no,
      generated_on: member.generated_on
    };

    return NextResponse.json({ member, certificate });
  } catch (err) {
    console.error("Error reading mock.json:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
