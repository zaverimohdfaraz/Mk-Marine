import ImportantNotesClient from "./ImportantNotesClient";
import { getCurrentUser } from "@/lib/current-user";

export default function ImportantNotesPage() {
  const currentUser = getCurrentUser();
  return <ImportantNotesClient currentUser={currentUser} />;
}
