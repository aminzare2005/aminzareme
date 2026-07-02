import { getGitHubStats } from "@/lib/github";
import { NextResponse } from "next/server";

export const revalidate = 36000;

export async function GET() {
  const stats = await getGitHubStats();
  return NextResponse.json(stats);
}
