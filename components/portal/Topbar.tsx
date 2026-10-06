import { Search } from "lucide-react";
import { logout } from "@/lib/auth";

export default function Topbar({ userName, userInitials }: { userName: string; userInitials: string }) {
  return (
    <div className="flex items-center justify-between gap-3 px-8 py-4 bg-white border-b border-border sticky top-0 z-10 max-[980px]:static max-[980px]:px-4 max-[980px]:py-3">
      <div className="flex-1 min-w-0 max-w-[420px] relative">
        <Search
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-faint"
        />
        <input
          type="text"
          placeholder="Search clients, vessels, enquiries..."
          className="w-full pl-10 pr-4 py-2.5 border-[1.5px] border-border rounded-full text-[14.5px] bg-offwhite focus:outline-none focus:border-ocean"
        />
      </div>
      <div className="flex items-center gap-4 flex-shrink-0 max-[560px]:gap-3">
        <div className="flex items-center gap-2.5 text-[14px] font-semibold text-navy max-[560px]:text-[0px]">
          <div className="w-9 h-9 rounded-full bg-ocean text-white flex items-center justify-center font-bold text-[14px]">
            {userInitials}
          </div>
          {userName}
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="text-[13px] font-semibold text-ink-faint hover:text-ocean"
          >
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
}
