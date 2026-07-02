import { getGitHubStats } from "@/lib/github";
import StatusClient from "./status-client";

export default async function Status() {
  const stats = await getGitHubStats();
  return <StatusClient stats={stats} />;
}
