import Head from 'next/head';
import Link from 'next/link';
import { client } from '../src/sanity/lib/client';
import { profileQuery, projectsQuery, postsQuery, servicesQuery } from '../src/sanity/queries';
import { MoveRight, Github, ExternalLink, Terminal, Code2, Database, Cloud, ChevronRight } from 'lucide-react';
import TechMarquee from '../components/TechMarquee';

export default function Home({ profile, projects, posts, services }) {
  
  // Icon map for Services (Dynamic Icons)
  const iconMap = {
    'Terminal': <Terminal className="w-6 h-6" />,
    'Code': <Code2 className="w-6 h-6" />,
    'Database': <Database className="w-6 h-6" />,
    'Cloud': <Cloud className="w-6 h-6" />,
  };

  return (
    <>
      <Head>
        <title>{profile?.brandName || 'OpokuML'} | AI & MLOps Engineer</title>
        <meta name="description" content={profile?.tagline || 'Machine Learning Engineer Portfolio'} />
      </Head>

      <div className="min-h-screen bg-[#0F0F10] text-slate-300 selection:bg-indigo-500/30">
        
        {/* 1. HEADER (Logo + Contact) */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F10]/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-3 group">
              {profile?.logo ? (
                <img 
                  src={profile.logo} 
                  alt={profile.brandName} 
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-500/20 group-hover:ring-indigo-500 transition-all"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                  OM
                </div>
              )}
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                {profile?.brandName || 'OpokuML'}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
              <Link href="/" className="text-white hover:text-cyan-400 transition">Overview</Link>
              <Link href="#services" className="hover:text-white transition">Services</Link>
              <Link href="#work" className="hover:text-white transition">Work</Link>
              <Link href="/blog" className="hover:text-white transition">Insights</Link>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Email Button */}
              {profile?.email && (
                <a 
                  href={`mailto:${profile.email}`} 
                  className="hidden sm:flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium transition text-white"
                >
                  Email Me
                </a>
              )}
              
              {/* Hire Me / WhatsApp Button */}
              <a 
                href={`https://wa.me/${profile?.whatsappNumber || ''}`} 
                target="_blank"
                className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-indigo-500/20"
              >
                <span>Hire Me</span>
                <MoveRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </header>

        <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
          
          {/* 2. HERO SECTION */}
          <section className="mb-24 md:mb-32">
            {profile?.status && (
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wider uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {profile.status}
              </div>
            )}
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
              {profile?.tagline || "Building Intelligent Systems."}
            </h1>
            
            {/* THE MOTTO */}
            {profile?.motto && (
              <p className="text-xl md:text-2xl font-light text-indigo-400 mb-8 italic">
                "{profile.motto}"
              </p>
            )}

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
              {profile?.bio}
            </p>

            {/* Metrics Grid */}
            {profile?.stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
                {profile.stats.map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 3. TECH MARQUEE (Social Proof) */}
          <div className="mb-32 -mx-6 md:-mx-0">
             <TechMarquee tags={profile?.techStack} />
          </div>

          {/* 4. SERVICES SECTION */}
          <section id="services" className="mb-32">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Services & Expertise</h2>
                <p className="text-slate-400">High-impact solutions for modern businesses.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services?.length > 0 ? (
                services.map((service, i) => (
                  <div key={i} className="group p-8 rounded-3xl bg-[#161618] border border-white/5 hover:border-indigo-500/30 transition-all hover:shadow-2xl hover:shadow-indigo-500/10">
                    <div className="mb-6 inline-flex p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                      {/* Dynamic Icon Fallback */}
                      {iconMap[service.icon] || <Terminal className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-12 border border-dashed border-slate-800 rounded-3xl text-slate-600">
                  Add your services in the Sanity Studio to see them here.
                </div>
              )}
            </div>
          </section>

          {/* 5. WORK / PROJECTS SECTION */}
          <section id="work" className="mb-32">
            <h2 className="text-3xl font-bold text-white mb-12">Selected Projects</h2>
            
            <div className="flex flex-col gap-12">
              {projects?.length > 0 && projects.map((project, i) => (
                <div key={i} className="group relative grid md:grid-cols-2 gap-8 items-center p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all">
                  
                  {/* Image Side */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group-hover:ring-2 group-hover:ring-indigo-500/50 transition-all">
                    {project.mainImage ? (
                      <img src={project.mainImage} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-700">
                        <Code2 className="w-12 h-12 opacity-20" />
                      </div>
                    )}
                  </div>

                  {/* Content Side */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-indigo-400 text-sm font-bold tracking-wider uppercase">{project.category}</span>
                      {project.status && (
                        <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px] font-bold uppercase border border-white/10">
                          {project.status}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Metrics Badge */}
                    {project.metrics && (
                      <div className="inline-block px-4 py-2 mb-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold">
                        🚀 {project.metrics}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-4">
                      {/* View Project Button (Links to Detail Page) */}
                      <Link 
                        href={`/projects/${project.slug}`}
                        className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-bold rounded-full hover:bg-indigo-50 hover:text-indigo-700 transition"
                      >
                        View Case Study <ChevronRight className="w-4 h-4" />
                      </Link>

                      {project.repoLink && (
                        <a href={project.repoLink} target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition border border-white/10">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. LATEST INSIGHTS (Blog) */}
          <section className="mb-24">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-white">Latest Insights</h2>
              <Link href="/blog" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-1">
                View all posts <MoveRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {posts?.slice(0, 3).map((post, i) => (
                <Link key={i} href={`/blog/${post.slug}`} className="group p-6 rounded-3xl bg-[#161618] border border-white/5 hover:border-indigo-500/30 transition-all">
                  <div className="text-xs text-indigo-400 mb-3 font-medium uppercase tracking-wider">
                    {post.readTime}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>

        </main>

        <footer className="border-t border-white/5 bg-[#0F0F10] py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">OM</div>
               <span className="text-slate-400 text-sm font-medium">© 2025 OpokuML.</span>
            </div>
            <p className="text-slate-600 text-sm text-center md:text-right">
              "Data is the source, intelligence is the system."
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const profile = await client.fetch(profileQuery);
  const projects = await client.fetch(projectsQuery);
  const posts = await client.fetch(postsQuery);
  const services = await client.fetch(servicesQuery);

  return {
    props: {
      profile: profile || null,
      projects: projects || [],
      posts: posts || [],
      services: services || [],
    }
  };
}