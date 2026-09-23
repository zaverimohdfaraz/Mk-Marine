import Sidebar from "@/components/portal/Sidebar";
import Topbar from "@/components/portal/Topbar";
import { getCurrentUser } from "@/lib/current-user";

export default function ShellLayout({ children }: { children: React.ReactNode }) {
  const user = getCurrentUser();
  const initials = user === "Mr. Patel" ? "MP" : "MK";

  return (
    <div className="grid grid-cols-[248px_1fr] min-h-screen bg-offwhite">
      <Sidebar />
      <main>
        <Topbar userName={user} userInitials={initials} />
        <div className="p-8 max-w-[1240px]">{children}</div>
      </main>
    </div>
  );
}
