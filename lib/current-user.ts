import { cookies } from "next/headers";
import { UserName } from "./types";

const COOKIE_NAME = "mk_user";

// Server Components / layouts only (uses next/headers). Reads the demo
// "logged in as" cookie set by lib/auth.ts's loginAs action. Defaults to
// Mr. Kersi when no cookie is present yet (e.g. first run before login).
export function getCurrentUser(): UserName {
  const value = cookies().get(COOKIE_NAME)?.value;
  return value === "Mr. Patel" ? "Mr. Patel" : "Mr. Kersi";
}
