import React from 'react';
import { Link } from 'react-router-dom';

export default function Renovation() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-10">
        <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-rose-600"><path d="M12 3l9 8h-3v10h-5v-6H11v6H6V11H3l9-8z"/></svg>
          Renovation
        </h2>
        <p className="mt-1 text-zinc-600">Premium home transformations with craftsmanship, materials, and timeless design.</p>
      </div>
      {/* Hero */}
      <div className="relative isolate bg-gradient-to-br from-amber-500 via-rose-500 to-fuchsia-500 text-white">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90 backdrop-blur">
            Transform your space
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-6xl">
            Premium Renovations, Crafted to Last
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">
            From kitchens to full-home makeovers, we deliver stunning results with meticulous detail,
            modern materials, and a client-first approach.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#consultation" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-gray-900 px-5 py-3 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">
              Book a consultation
            </a>
            <a href="#gallery" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/15">
              View gallery
            </a>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div id="gallery" className="mx-auto max-w-6xl px-5 pb-14 pt-8 sm:pb-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ImageCard to="/construction/renovation/kitchen-modern" src="https://images.unsplash.com/photo-1505692794403-34d4982c4638?q=80&w=1600&auto=format&fit=crop" title="Warm modern kitchen" />
          <ImageCard to="/construction/renovation/living-open" src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop" title="Open living room" />
          <ImageCard to="/construction/renovation/bath-spa" src="https://images.unsplash.com/photo-1505691723518-36a5ac3b2d62?q=80&w=1600&auto=format&fit=crop" title="Spa-inspired bathroom" />
          <ImageCard to="/construction/renovation/staircase-sculptural" src="https://images.unsplash.com/photo-1616593960647-3712c2df6b0f?q=80&w=1600&auto=format&fit=crop" title="Statement staircase" />
          <ImageCard to="/construction/renovation/bedroom-minimal" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop" title="Minimalist bedroom" />
          <ImageCard to="/construction/renovation/outdoor-living" src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop" title="Outdoor living" />
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Feature iconBg="bg-amber-500/20" title="Quality Materials" desc="We source premium finishes and fixtures for durability and beauty." />
          <Feature iconBg="bg-rose-500/20" title="Expert Craftsmanship" desc="Certified professionals who obsess over the smallest details." />
          <Feature iconBg="bg-fuchsia-500/20" title="On-Time Delivery" desc="Transparent timelines with proactive communication." />
        </div>
      </div>
    </section>
  );
}

function ImageCard({ src, title, to }) {
  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-xl">
      <Link to={to}>
        <img
          src={src}
          alt={title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </Link>
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-sm text-white">
        <span className="font-semibold drop-shadow">{title}</span>
        <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">Renovation</span>
      </figcaption>
    </figure>
  );
}

function Feature({ iconBg, title, desc }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <span className={`mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl ${iconBg}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </span>
      <div>
        <div className="font-semibold text-zinc-900">{title}</div>
        <p className="mt-1 text-sm text-zinc-600">{desc}</p>
      </div>
    </div>
  );
}

