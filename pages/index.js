import Head from "next/head";
import Link from "next/link";
import { client } from "../src/sanity/client"; // The Connector
import { profileQuery, projectsQuery, postsQuery } from "../src/sanity/queries"; // The Questions
import { ArrowUpRight, Download, Terminal, ChevronRight } from "lucide-react";

export default function Home({ profile, projects, posts }) {
  // If no profile exists yet, show a loading state or fallback
  if (!profile) return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Profile Not Found</h1>
        <p>Go to <a href="/studio" className="text-indigo-400 underline">/studio</a> and publish your 'Profile & Settings' document.</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-indigo-500/30">
      <Head>
        <title>{`${profile.name} | ${profile.role}`}</title>
      </Head>

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-white tracking-tight">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-xs font-mono text-white">
              KO
            </div>
            {profile.name}
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <Link href="/" className="text-white">Overview</Link>
            <Link href="/blog" className="hover:text-white transition">Insights</Link>
            <a href="#projects" className="hover:text-white transition">Work</a>
          </nav>

          {profile.resumeUrl && (
            <a href={profile.resumeUrl} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm transition text-white">
              <Download className="w-4 h-4" /> Resume
            </a>
          )}
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        
        {/* HERO SECTION */}
        <section className="mb-24">
          {profile.status && (
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-green-900/20 border border-green-800 text-green-400 text-xs font-bold tracking-wider uppercase">
              ● {profile.status}
            </div>
          )}
          <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            {profile.tagline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
            {profile.bio}
          </p>

          {/* METRICS GRID */}
          {profile.stats && (
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl">
              {profile.stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* PROJECTS SECTION (DYNAMIC) */}
        <section id="projects" className="mb-24">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl font-bold text-white">Featured Shipments</h2>
            {profile.github && (
              <a href={profile.github} className="text-indigo-400 text-sm hover:underline flex items-center gap-1">
                View GitHub <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.length > 0 ? (
              projects.map((project, i) => (
                <div key={i} className="group relative p-8 rounded-3xl bg-[#111] border border-white/10 hover:border-indigo-500/50 transition duration-500 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                      <Terminal className="w-6 h-6" />
                    </div>
                    {project.status && (
                      <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">{project.status}</span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{project.summary}</p>
                  
                  <div className="pt-6 border-t border-white/5">
                    {project.metrics && <div className="text-xs text-green-400 font-mono mb-4">▲ {project.metrics}</div>}
                    <div className="flex flex-wrap gap-2">
                      {project.tech && project.tech.map((tag, t) => (
                        <span key={t} className="text-[10px] uppercase tracking-wider text-gray-500 border border-gray-800 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-500 italic col-span-3 py-10 text-center border border-white/5 rounded-2xl">
                No projects published yet. Go to /studio to add one!
              </div>
            )}
          </div>
        </section>

        {/* LATEST INSIGHTS (BLOG) SECTION */}
        <section className="mb-24">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl font-bold text-white">Engineering Log</h2>
            <Link href="/blog" className="text-white text-sm hover:text-indigo-400 flex items-center gap-1 transition">
              Read all posts <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid gap-4">
            {/* Show only the first 2 posts */}
            {posts && posts.slice(0, 2).map((post, i) => (
              <Link href="/blog" key={i} className="block group">
                <div className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition">{post.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{post.excerpt}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0 min-w-[120px]">
                    <span className="text-xs text-gray-500 block">
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Recent"}
                    </span>
                    <span className="text-xs text-indigo-400">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
            {(!posts || posts.length === 0) && (
               <div className="text-gray-500 italic py-6 text-center border border-white/5 rounded-2xl">
                 No blog posts yet. Publish one in the Studio!
               </div>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div>© {new Date().getFullYear()} {profile.name}.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            {profile.linkedin && <a href={profile.linkedin} className="hover:text-white transition">LinkedIn</a>}
            {profile.github && <a href={profile.github} className="hover:text-white transition">GitHub</a>}
            {profile.email && <a href={`mailto:${profile.email}`} className="hover:text-white transition">Email</a>}
          </div>
        </footer>

      </main>
    </div>
  );
}

// 🌟 SERVER SIDE FETCHING
// This function runs *before* the page loads to grab fresh data from Sanity.
export async function getServerSideProps() {
  const profile = await client.fetch(profileQuery);
  const projects = await client.fetch(projectsQuery);
  const posts = await client.fetch(postsQuery);

  return {
    props: {
      profile: profile || null,
      projects: projects || [],
      posts: posts || []
    }
  };
}