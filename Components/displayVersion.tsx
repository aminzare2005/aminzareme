import { readFileSync } from "fs";
import path from "path";

export function DisplayVersion() {
  const packageJson = JSON.parse(
    readFileSync(path.join(process.cwd(), "package.json"), "utf-8"),
  );

  return <>{packageJson.version || "0.0.0"}</>;
}
