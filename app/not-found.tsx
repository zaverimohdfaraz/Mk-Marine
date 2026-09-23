import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-offwhite px-6">
      <div className="text-center max-w-sm">
        <div className="font-display text-5xl text-navy font-semibold mb-3">404</div>
        <h1 className="text-[18px] font-semibold text-navy mb-2">We couldn't find that page</h1>
        <p className="text-[14.5px] text-ink-muted mb-6">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-sm bg-ocean text-white text-[15px] font-semibold"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
