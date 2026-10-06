import RemindersClient from "./RemindersClient";
import { getCurrentUser } from "@/lib/current-user";

export default function RemindersPage() {
  const currentUser = getCurrentUser();
  return <RemindersClient currentUser={currentUser} />;
}
