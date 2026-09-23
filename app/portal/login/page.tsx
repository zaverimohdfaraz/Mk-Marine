import { loginAs } from "@/lib/auth";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-navy-deep flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-10">
          <img src="/logo.jpg" alt="MK Marine Services" className="w-16 h-16 object-contain mb-4" />
          <h1 className="font-display text-2xl text-white font-semibold">MK Marine Services</h1>
          <p className="text-white/50 text-sm mt-1">Operations Portal</p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-card">
          <h2 className="text-[15px] font-semibold text-navy mb-1">Sign in</h2>
          <p className="text-[13.5px] text-ink-muted mb-6">
            Select your account to continue.
          </p>

          <form action={loginAs} className="mb-3">
            <input type="hidden" name="user" value="Mr. Kersi" />
            <button
              type="submit"
              className="w-full flex items-center gap-3 border-[1.5px] border-border rounded-md px-4 py-3.5 text-left hover:border-ocean transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-ocean-light text-ocean-hover flex items-center justify-center font-bold">
                MK
              </span>
              <span>
                <span className="block font-semibold text-navy text-[15px]">Mr. Kersi</span>
                <span className="block text-[12.5px] text-ink-faint">Administrator</span>
              </span>
            </button>
          </form>

          <form action={loginAs}>
            <input type="hidden" name="user" value="Mr. Patel" />
            <button
              type="submit"
              className="w-full flex items-center gap-3 border-[1.5px] border-border rounded-md px-4 py-3.5 text-left hover:border-ocean transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-ocean-light text-ocean-hover flex items-center justify-center font-bold">
                MP
              </span>
              <span>
                <span className="block font-semibold text-navy text-[15px]">Mr. Patel</span>
                <span className="block text-[12.5px] text-ink-faint">Staff</span>
              </span>
            </button>
          </form>

          <p className="text-[12px] text-ink-faint mt-6 text-center">
            Demo sign-in — no password yet. Real authentication is a Phase 2
            hardening item (see README).
          </p>
        </div>
      </div>
    </div>
  );
}
