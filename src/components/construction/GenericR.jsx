import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { renovationProjects } from '../data/data';

export default function GenericR() {
  const { id } = useParams();
  const project = renovationProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="mx-auto max-w-4xl px-5 py-24 text-center">
        <h1 className="text-2xl font-bold text-zinc-900">Project not found</h1>
        <p className="mt-2 text-zinc-600">Please go back and choose another card.</p>
        <Link to="/construction" className="mt-6 inline-block rounded-lg bg-zinc-900 px-4 py-2 font-semibold text-white">Back to Construction</Link>
      </div>
    );
  }

  const related = renovationProjects.filter((p) => p.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-white">
      {/* Warm light hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-amber-400 via-rose-400 to-fuchsia-400 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.2),rgba(255,255,255,0)_60%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90 backdrop-blur">
                <HomeIcon /> {project.tag}
              </span>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-3 max-w-xl text-white/90">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/construction" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/15">
                  <ArrowLeftIcon /> Back to Construction
                </Link>
                <a href="#details" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-rose-700 shadow hover:bg-rose-50">
                  <ChecklistIcon /> Details
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/20 shadow-2xl backdrop-blur">
              <img src={project.image} alt={project.title} className="h-80 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Steps + Highlights */}
      <section id="details" className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-rose-200 bg-white p-5 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-rose-700"><SparklesIconWarm /> Renovation steps</h2>
            <ol className="mt-4 space-y-3 text-sm text-zinc-700">
              <li className="flex items-start gap-2"><Badge>1</Badge> Consultation & vision</li>
              <li className="flex items-start gap-2"><Badge>2</Badge> Design & materials</li>
              <li className="flex items-start gap-2"><Badge>3</Badge> Build & quality checks</li>
              <li className="flex items-start gap-2"><Badge>4</Badge> Handover & aftercare</li>
            </ol>
          </div>

          <div className="rounded-2xl border border-rose-200 bg-white p-5 shadow-sm lg:col-span-2">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-rose-700"><ChecklistIcon /> Highlights</h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {project.highlights?.map((h) => (
                <li key={h} className="flex items-start gap-3 rounded-xl border border-rose-100 bg-rose-50 p-3 text-sm text-rose-900">
                  <CheckIconWarm />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-6xl px-5 pb-12">
        <div className="rounded-2xl border border-rose-200 bg-gradient-to-r from-rose-50 to-amber-50 p-6 text-rose-900 shadow-sm">
          <blockquote className="text-lg font-medium">“Spaces that feel like you — designed with care, built for life.”</blockquote>
          <div className="mt-2 text-sm text-rose-700">Our promise on every project.</div>
        </div>
      </section>

      {/* Related */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-rose-800"><GridIconWarm /> Related projects</h3>
          <Link to="/construction" className="text-sm font-semibold text-rose-700 hover:text-rose-800">View all</Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {related.map((r) => (
            <Link key={r.id} to={`/construction/renovation/${r.id}`} className="group overflow-hidden rounded-2xl border border-rose-200 bg-white shadow-sm transition hover:shadow-xl">
              <img src={r.image} alt={r.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="flex items-center justify-between px-4 py-3 text-rose-900">
                <div>
                  <div className="font-semibold">{r.title}</div>
                  <div className="text-xs text-rose-700/80">{r.tag}</div>
                </div>
                <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-semibold text-rose-700">View</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-600 text-xs font-bold text-white">
      {children}
    </span>
  );
}

function HomeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white">
      <path d="M12 3l9 8h-3v10h-5v-6H11v6H6V11H3l9-8z" />
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

function ChecklistIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-rose-700">
      <path d="M3 4h18v2H3zM3 11h18v2H3zM3 18h18v2H3z" />
    </svg>
  );
}

function SparklesIconWarm() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-rose-700">
      <path d="M5 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4zm12 6l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2zm-5 8l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
    </svg>
  );
}

function CheckIconWarm() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-700">
      <path d="m20 6-11 11L4 12" />
    </svg>
  );
}

function GridIconWarm() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-rose-700">
      <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" />
    </svg>
  );
}

