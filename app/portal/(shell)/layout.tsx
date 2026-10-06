import Sidebar from "@/components/portal/Sidebar";
import MobileNav from "@/components/portal/MobileNav";
import Topbar from "@/components/portal/Topbar";
import { getCurrentUser } from "@/lib/current-user";

export default function ShellLayout({ children }: { children: React.ReactNode }) {
  const user = getCurrentUser();
  const initials = user === "Mr. Patel" ? "MP" : "MK";

  return (
    <div className="grid grid-cols-[248px_minmax(0,1fr)] max-[980px]:grid-cols-1 min-h-screen bg-offwhite">
      <Sidebar />
      <main className="min-w-0">
        <MobileNav />
        <Topbar userName={user} userInitials={initials} />
        <div className="p-8 max-w-[1240px] max-[980px]:p-5 max-[560px]:p-4 max-[700px]:[&_table]:block max-[700px]:[&_table]:overflow-x-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
