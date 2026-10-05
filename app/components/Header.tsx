'use client';

export default function Header() {
  return (
    <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-col items-center justify-center text-center">
      <style jsx>{`
        @keyframes subtle-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        .animate-subtle-pulse {
          animation: subtle-pulse 3s ease-in-out infinite;
        }
      `}</style>
      <h1 className="font-mono text-5xl sm:text-6xl md:text-7xl font-bold tracking-[0.3em] uppercase text-white animate-subtle-pulse">
        GATE 2027
      </h1>
      <p className="mt-4 text-sm sm:text-base md:text-lg text-zinc-500 uppercase tracking-widest font-mono">
        You have one mission.
      </p>
    </div>
  );
}
