import { expenses } from "@/lib/demo-data";
import { getCurrentUser } from "@/lib/current-user";
import ExpensesClient from "./ExpensesClient";

export default function ExpensesPage() {
  const currentUser = getCurrentUser();
  return <ExpensesClient initialExpenses={expenses} currentUser={currentUser} />;
}
