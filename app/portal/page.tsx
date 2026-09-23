import { redirect } from "next/navigation";

export default function PortalIndexPage() {
  // Middleware already sends anyone without the demo session cookie to
  // /portal/login, so reaching this page means a user is "signed in" —
  // send them straight to the dashboard.
  redirect("/portal/dashboard");
}
