import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { sportsProjects } from '../data/data';

export default function GenericC() {
  const { id } = useParams();
  const project = sportsProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="mx-auto max-w-4xl px-5 py-24 text-center">
        <h1 className="text-2xl font-bold text-zinc-900">Project not found</h1>
        <p className="mt-2 text-zinc-600">Please go back and choose another card.</p>
        <Link to="/construction" className="mt-6 inline-block rounded-lg bg-zinc-900 px-4 py-2 font-semibold text-white">Back to Construction</Link>
      </div>
    );
  }

  const related = sportsProjects.filter((p) => p.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      {/* Sporty dark hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 ring-1 ring-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),rgba(14,165,233,0)_60%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90 backdrop-blur">
                <SportIcon />
                {project.tag}
              </span>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-3 max-w-xl text-white/80">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/construction" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/15">
                  <ArrowLeftIcon /> Back to Construction
                </Link>
                <a href="#details" className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-bold text-slate-950 shadow hover:bg-cyan-400">
                  <BoltIcon /> Specs
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
              <img src={project.image} alt={project.title} className="h-80 w-full object-cover" />
            </div>
          </div>
          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Stat icon={<UsersIcon />} label="Capacity" value="20k+" />
            <Stat icon={<LightIcon />} label="Lighting" value="Broadcast" />
            <Stat icon={<ShieldIcon />} label="Safety" value="A+ rated" />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="details" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-white">
          <SparklesIcon /> Key highlights
        </h2>
        <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {project.highlights?.map((h) => (
            <li key={h} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/90">
              <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
                <CheckIcon />
              </span>
              <span className="text-sm">{h}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-6xl px-5 pb-12">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/15 via-teal-500/10 to-emerald-500/15 p-5 sm:flex-row">
          <div className="text-white/90">
            <div className="font-semibold">Ready to build for victory?</div>
            <div className="text-sm">Get a tailored plan for your facility.</div>
          </div>
          <a href="#quote" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-900 shadow">
            <RocketIcon /> Get a quote
          </a>
        </div>
      </section>

      {/* Related */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
            <GridIcon /> Related projects
          </h3>
          <Link to="/construction" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">View all</Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {related.map((r) => (
            <Link key={r.id} to={`/construction/sports/${r.id}`} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm transition hover:shadow-xl">
              <img src={r.image} alt={r.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="flex items-center justify-between px-4 py-3 text-white">
                <div>
                  <div className="font-semibold">{r.title}</div>
                  <div className="text-xs text-white/70">{r.tag}</div>
                </div>
                <span className="rounded-full bg-cyan-400/20 px-2 py-0.5 text-xs font-semibold text-cyan-200">View</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">{icon}</span>
      <div>
        <div className="text-sm text-white/70">{label}</div>
        <div className="text-lg font-bold">{value}</div>
      </div>
    </div>
  );
}

function SportIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white">
      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 2a7.977 7.977 0 0 1 5.657 2.343L14 10h6a7.977 7.977 0 0 1-2.343 5.657L14 14v6A8 8 0 0 1 12 4Z"/>
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
      <line x1="9" y1="12" x2="21" y2="12" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
      <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm8 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C23 14.17 18.33 13 16 13zM8 13c-.29 0-.62.02-.97.05C5.26 13.26 3 14.11 3 15.5V19h5v-2.5c0-.43.09-.84.26-1.22C8.47 14.4 8.21 14 8 14v-1z" />
    </svg>
  );
}

function LightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
      <path d="M9 21h6v-1H9v1zm3-20C7.92 1 4 4.92 4 10c0 3.87 2.69 7.16 6 8v2h4v-2c3.31-.84 6-4.13 6-8 0-5.08-3.92-9-8-9z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
      <path d="M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-.26-7-5-7-10V6l7-4z" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-cyan-300">
      <path d="M5 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4zm12 6l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2zm-5 8l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m20 6-11 11L4 12" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c4 0 8 3 8 7 0 6-8 13-8 13S4 15 4 9c0-4 4-7 8-7zm0 4a3 3 0 1 0 .001 6.001A3 3 0 0 0 12 6z" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-cyan-300">
      <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" />
    </svg>
  );
}

