import { tasks } from "@/lib/demo-data";
import { getCurrentUser } from "@/lib/current-user";
import TasksClient from "./TasksClient";

export default function TasksPage() {
  const currentUser = getCurrentUser();
  return <TasksClient initialTasks={tasks} currentUser={currentUser} />;
}
