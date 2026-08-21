"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Next.js Error Boundary caught an error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#faf7f3] text-[#2b1a05] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md p-8 border-[3px] border-[#2b1a05] bg-[#efe9da] rounded-3xl shadow-[6px_6px_0_#2b1a05] space-y-4">
        <h2 className="text-2xl font-serif font-bold text-[#2b1a05]">✦ Something went wrong</h2>
        <p className="text-sm font-mono text-[#2b1a05]/75">
          {error.message || "An unexpected error occurred while loading this section."}
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#2b1a05] text-[#ffca78] border-[2px] border-[#2b1a05] shadow-[2px_2px_0_#ffca78] hover:shadow-[4px_4px_0_#2b1a05] hover:-translate-y-0.5 transition-all"
        >
          Try Again ✦
        </button>
      </div>
    </div>
  );
}
