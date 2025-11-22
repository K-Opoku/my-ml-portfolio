import Head from "next/head";
import Link from "next/link";
import { SITE_DATA } from "../lib/data";
import { ArrowUpRight, Download, Terminal, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 selection:bg-indigo-500/30 font-sans">
      <Head>
        <title>{SITE_DATA.brand.name} | {SITE_DATA.brand.role}</title>
      </Head>

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-white tracking-tight">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-xs font-mono">
              {SITE_DATA.brand.initials}
            </div>
            {SITE_DATA.brand.name}
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <Link href="/" className="text-white">Overview</Link>
            <Link href="/blog" className="hover:text-white transition">Insights (Blog)</Link>
            <a href="#projects" className="hover:text-white transition">Work</a>
          </nav>

          <a href={SITE_DATA.brand.resume} download className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm transition text-white">
            <Download className="w-4 h-4" /> Resume
          </a>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        
        {/* HERO SECTION */}
        <section className="mb-24">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-green-900/20 border border-green-800 text-green-400 text-xs font-bold tracking-wider uppercase">
            ● {SITE_DATA.brand.status}
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            {SITE_DATA.hero.h1}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
            {SITE_DATA.hero.sub}
          </p>

          {/* METRICS GRID */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl">
            {SITE_DATA.stats.map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS MARQUEE */}
        <section className="mb-24 overflow-hidden">
          <p className="text-sm text-gray-500 mb-6 uppercase tracking-widest">Technical Arsenal</p>
          <div className="flex flex-wrap gap-3">
            {SITE_DATA.skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-gray-300 text-sm">
                <span>{skill.icon}</span> {skill.name}
              </div>
            ))}
          </div>
        </section>

        {/* BENTO GRID PROJECTS */}
        <section id="projects" className="mb-24">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl font-bold text-white">Featured Shipments</h2>
            <a href={SITE_DATA.brand.github} className="text-indigo-400 text-sm hover:underline flex items-center gap-1">
              View GitHub <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SITE_DATA.projects.map((project, i) => (
              <div key={i} className="group relative p-8 rounded-3xl bg-[#111] border border-white/10 hover:border-indigo-500/50 transition duration-500 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">{project.tags[0]}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{project.desc}</p>
                
                <div className="pt-6 border-t border-white/5">
                  <div className="text-xs text-green-400 font-mono mb-4">▲ {project.metrics}</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, t) => (
                      <span key={t} className="text-[10px] uppercase tracking-wider text-gray-500 border border-gray-800 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LATEST WRITING PREVIEW */}
        <section className="mb-24">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl font-bold text-white">Engineering Log</h2>
            <Link href="/blog" className="text-white text-sm hover:text-indigo-400 flex items-center gap-1 transition">
              Read all posts <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid gap-4">
            {SITE_DATA.blog.slice(0, 2).map((post, i) => (
              <Link href="/blog" key={i} className="block group">
                <div className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition">{post.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{post.excerpt}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0 min-w-[120px]">
                    <span className="text-xs text-gray-500 block">{post.date}</span>
                    <span className="text-xs text-indigo-400">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div>© {new Date().getFullYear()} {SITE_DATA.brand.name}.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href={SITE_DATA.brand.linkedin} className="hover:text-white transition">LinkedIn</a>
            <a href={SITE_DATA.brand.github} className="hover:text-white transition">GitHub</a>
            <a href={`mailto:${SITE_DATA.brand.email}`} className="hover:text-white transition">Email</a>
          </div>
        </footer>

      </main>
    </div>
  );
}