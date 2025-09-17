import React from 'react';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-black via-slate-900 to-blue-900"
      aria-label="Hero banner"
    >
      {/* Decorative glows */}
      <div className="pointer-events-none">
        <span
          className="absolute -top-32 -right-32 h-[300px] w-[300px] sm:h-[420px] sm:w-[420px] rotate-[25deg] blur-md"
          style={{
            background:
              'radial-gradient(closest-side, rgba(56,189,248,0.25), rgba(56,189,248,0) 70%)',
          }}
        />
        <span
          className="absolute -bottom-24 -left-16 h-[360px] w-[360px] sm:h-[520px] sm:w-[520px] -rotate-6 blur-lg"
          style={{
            background:
              'radial-gradient(closest-side, rgba(99,102,241,0.22), rgba(99,102,241,0) 70%)',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="z-10 max-w-3xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-white/90 backdrop-blur">
            <Dot />
            <span>Now available</span>
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-snug text-white sm:text-5xl lg:text-6xl">
            Build confidently with{' '}
            <span className="text-[#1C80BB]">Tamsco</span>
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg">
            A modern, polished banner that elevates first impressions. Responsive, accessible,
            and ready to drop into your page.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
            {/* Get started button */}
            <Link
              to="/ContactUs"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-sky-400/30 bg-black px-4 py-2 sm:px-5 sm:py-3 font-bold text-white shadow-[0_6px_12px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.45)] focus:outline-none text-sm sm:text-base"
              aria-label="Get started"
            >
              <ArrowRight />
              Get started

              {/* Sweep shimmer effect */}
              <span className="absolute inset-0 -z-10 overflow-hidden rounded-xl">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              </span>

              {/* Glow background */}
              <span className="pointer-events-none absolute inset-0 -z-20 rounded-xl bg-gradient-to-r from-sky-500/20 via-indigo-500/10 to-blue-500/20 blur transition duration-300 group-hover:blur-md" />
            </Link>

            {/* Learn more button */}
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 sm:px-5 sm:py-3 font-bold text-white backdrop-blur transition-colors hover:bg-white/15 text-sm sm:text-base"
              to="/about"
              aria-label="Learn more"
            >
              Learn more
            </Link>
          </div>

          {/* Stats cards */}
          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 text-white/95 backdrop-blur">
            <div className="flex flex-col items-center sm:items-start gap-0.5">
              <span className="text-[10px] sm:text-xs text-white/75">Reliability</span>
              <span className="text-base sm:text-lg font-extrabold tracking-tight">99.9%</span>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-0.5">
              <span className="text-[10px] sm:text-xs text-white/75">Performance</span>
              <span className="text-base sm:text-lg font-extrabold tracking-tight">Fast</span>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-0.5">
              <span className="text-[10px] sm:text-xs text-white/75">Satisfaction</span>
              <span className="text-base sm:text-lg font-extrabold tracking-tight">5/5</span>
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
