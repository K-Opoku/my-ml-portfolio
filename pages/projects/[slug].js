import Head from 'next/head';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { client } from '../../src/sanity/lib/client';
import { singleProjectQuery } from '../../src/sanity/queries';
import { ArrowLeft, Github, ExternalLink, Cpu, Layers, BarChart3 } from 'lucide-react';

export default function ProjectPage({ project }) {
  if (!project) return null;

  return (
    <>
      <Head>
        <title>{project.title} | OpokuML Project</title>
        <meta name="description" content={project.summary} />
      </Head>

      <div className="min-h-screen bg-[#0F0F10] text-slate-300 selection:bg-indigo-500/30 pb-20">
        
        {/* 1. TOP NAV (Back Button) */}
        <nav className="sticky top-0 z-50 bg-[#0F0F10]/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center">
            <Link 
              href="/#work" 
              className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 pt-12">
          
          {/* 2. PROJECT HERO HEADER */}
          <header className="mb-16">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider border border-indigo-500/20">
                {project.category || 'Engineering'}
              </span>
              {project.status && (
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-bold uppercase border border-white/10">
                  {project.status}
                </span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {project.title}
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl leading-relaxed mb-8">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-4">
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-indigo-50 hover:text-indigo-700 transition">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
              {project.repoLink && (
                <a href={project.repoLink} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white font-medium rounded-full hover:bg-white/10 border border-white/10 transition">
                  <Github className="w-4 h-4" /> View Code
                </a>
              )}
            </div>
          </header>

          {/* 3. MAIN GRID LAYOUT */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
            
            {/* LEFT COLUMN: Content & Diagrams (Takes up 2/3 space) */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* 🌟 A. SYSTEM ARCHITECTURE DIAGRAM */}
              {project.architectureDiagram && (
                <div className="rounded-3xl overflow-hidden bg-[#161618] border border-white/10 shadow-2xl shadow-black/50">
                  <div className="px-6 py-4 border-b border-white/5 bg-white/5 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-indigo-400" />
                    <span className="text-sm font-bold text-white uppercase tracking-wider">System Architecture</span>
                  </div>
                  <div className="p-4 md:p-8 bg-[url('/grid-pattern.svg')]">
                    <img 
                      src={project.architectureDiagram} 
                      alt="System Architecture Diagram" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              )}

              {/* B. MAIN IMAGE (If separate from diagram) */}
              {project.mainImage && !project.architectureDiagram && (
                 <div className="rounded-3xl overflow-hidden border border-white/10">
                    <img src={project.mainImage} alt={project.title} className="w-full object-cover" />
                 </div>
              )}

              {/* C. RICH TEXT DESCRIPTION */}
              <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-indigo-400 hover:prose-a:text-indigo-300 prose-strong:text-white">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Layers className="w-6 h-6 text-indigo-500" /> 
                  Technical Deep Dive
                </h3>
                {/* NOTE: If you haven't installed the portable text component yet, 
                   install it via: npm install @portabletext/react 
                */}
                {project.description ? (
                  <PortableText value={project.description} />
                ) : (
                  <p className="text-slate-500 italic">No detailed description provided for this project yet.</p>
                )}
              </div>
            </div>


            {/* RIGHT COLUMN: Sidebar (Takes up 1/3 space) */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                
                {/* METRICS CARD */}
                {project.metrics && (
                  <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold uppercase text-xs tracking-wider">
                      <BarChart3 className="w-4 h-4" /> Key Performance
                    </div>
                    <div className="text-3xl font-bold text-white">{project.metrics}</div>
                  </div>
                )}

                {/* TECH STACK LIST */}
                <div className="p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Built With</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-[#1F1F22] border border-white/10 text-sm text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}

// FETCH DATA FOR THIS SPECIFIC PROJECT
export async function getServerSideProps({ params }) {
  const project = await client.fetch(singleProjectQuery, { slug: params.slug });

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project },
  };
}