import Link from "next/link";

export default function BackButton() {
  return (
    <Link href="/" className="fixed z-50">
      <div className="fixed top-8 left-8 w-12 h-12 border border-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </div>
    </Link>
  );
}