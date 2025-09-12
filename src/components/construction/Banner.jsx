import React, { useState } from 'react';

// Beautiful, responsive banner using Tailwind CSS utility classes
export default function Banner() {
  const [isLoading, setIsLoading] = useState(false);

  const handlePrimaryClick = (e) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1800);
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-black via-slate-900 to-blue-900"
      aria-label="Hero banner"
    >
      {/* Decorative glows */}
      <div className="pointer-events-none">
        <span
          className="absolute -top-32 -right-32 h-[420px] w-[420px] rotate-[25deg] blur-md"
          style={{
            background:
              'radial-gradient(closest-side, rgba(56,189,248,0.25), rgba(56,189,248,0) 70%)',
          }}
        />
        <span
          className="absolute -bottom-36 -left-24 h-[520px] w-[520px] -rotate-6 blur-lg"
          style={{
            background:
              'radial-gradient(closest-side, rgba(99,102,241,0.22), rgba(99,102,241,0) 70%)',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:py-24">
        <div className="z-10 max-w-3xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90 backdrop-blur">
            <Dot />
            <span>Now available</span>
          </span>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            Build confidently with{' '}
            <span className="bg-gradient-to-r from-sky-200 via-indigo-200 to-blue-100 bg-clip-text text-transparent">
              Tamsco
            </span>
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            A modern, polished banner that elevates first impressions. Responsive, accessible,
            and ready to drop into your page.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {/* Get started button */}
            <a
              onClick={handlePrimaryClick}
              className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-sky-400/30 bg-black px-5 py-3 font-bold text-white shadow-[0_10px_20px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-2 hover:shadow-[0_14px_28px_rgba(0,0,0,0.45)] focus:outline-none ${
                isLoading ? 'ring-2 ring-sky-400/50 animate-pulse cursor-wait' : ''
              }`}
              href="#get-started"
              aria-label="Get started"
            >
              {isLoading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-sky-300 border-t-transparent" />
                  Processing...
                </>
              ) : (
                <>
                  <ArrowRight />
                  Get started
                </>
              )}

              {/* Sweep shimmer effect */}
              <span className="absolute inset-0 -z-10 overflow-hidden rounded-xl">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              </span>

              {/* Glow background */}
              <span className="pointer-events-none absolute inset-0 -z-20 rounded-xl bg-gradient-to-r from-sky-500/20 via-indigo-500/10 to-blue-500/20 blur transition duration-300 group-hover:blur-md" />
            </a>

            {/* Learn more button */}
            <a
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur transition-colors hover:bg-white/15"
              href="#learn-more"
              aria-label="Learn more"
            >
              Learn more
            </a>
          </div>

          {/* Stats cards */}
          <div className="mt-6 grid max-w-2xl grid-cols-1 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/95 backdrop-blur sm:grid-cols-3">
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-white/75">Reliability</span>
              <span className="text-lg font-extrabold tracking-tight">99.9%</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-white/75">Performance</span>
              <span className="text-lg font-extrabold tracking-tight">Fast</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-white/75">Satisfaction</span>
              <span className="text-lg font-extrabold tracking-tight">5/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <circle cx="5" cy="5" r="5" fill="#22d3ee" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
