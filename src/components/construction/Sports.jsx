import React from 'react';
import { Link } from 'react-router-dom';
import { sportsProjects } from '../data/data.js';

export default function Sports() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-10">
        <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-cyan-600">
            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 2a7.977 7.977 0 0 1 5.657 2.343L14 10h6a7.977 7.977 0 0 1-2.343 5.657L14 14v6A8 8 0 0 1 12 4Z"/>
          </svg>
          Sports Construction
        </h2>
        <p className="mt-1 text-zinc-600">
          High-performance arenas, fields, and complexes engineered for victory.
        </p>
      </div>

      {/* Hero */}
      <div className="relative isolate mt-6 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-28 -left-20 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90 backdrop-blur">
            Elevate performance
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-6xl">
            Sports Facilities Built for Victory
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">
            From turf fields to indoor arenas, we design and construct environments that boost
            performance, safety, and fan experience.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-gray-900 px-5 py-3 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore projects
            </a>
            <Link
              to="/ContactUs"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div id="projects" className="mx-auto max-w-6xl px-5 pb-14 pt-8 sm:pb-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sportsProjects.map((project) => (
            <ImageCard
              key={project.id}
              src={project.image}
              title={project.title}
              tag={project.tag}
            
            />
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Feature iconBg="bg-emerald-500/20" title="Safety First" desc="Shock-absorbing surfaces and code-compliant designs." />
          <Feature iconBg="bg-teal-500/20" title="Performance Surfaces" desc="Pro-grade turf, tracks, and courts engineered for speed." />
          <Feature iconBg="bg-cyan-500/20" title="Fan Experience" desc="Lighting, seating, and acoustics that energize every event." />
        </div>
      </div>
    </section>
  );
}

function ImageCard({ src, title, tag, to }) {
  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-xl">
      <Link to={to || '#'}>
        <img
          src={src}
          alt={title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </Link>
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-sm text-white">
        <span className="font-semibold drop-shadow">{title}</span>
        <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">{tag}</span>
      </figcaption>
    </figure>
  );
}

function Feature({ iconBg, title, desc }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <span className={`mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl ${iconBg}`}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-zinc-700"
        >
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
