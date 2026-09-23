"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { UserName } from "./types";

const COOKIE_NAME = "mk_user";

// IMPORTANT: this is a placeholder for local development and design review
// only. It has no password, no hashing, and no session expiry. Before this
// goes anywhere near production, replace it with real authentication
// (hashed passwords, server-side sessions, protected route middleware) per
// the master spec's Security section.

export async function loginAs(formData: FormData) {
  const user = formData.get("user");
  const value: UserName = user === "Mr. Patel" ? "Mr. Patel" : "Mr. Kersi";
  cookies().set(COOKIE_NAME, value, { path: "/", httpOnly: true });
  redirect("/portal/dashboard");
}

export async function logout() {
  cookies().delete(COOKIE_NAME);
  redirect("/portal/login");
}
