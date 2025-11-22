import Head from "next/head";
import Link from "next/link";
import { SITE_DATA } from "../lib/data";
import { ChevronLeft, Calendar, Clock, Youtube, ImageIcon, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Blog() {
  const [activePost, setActivePost] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-indigo-500/30">
      <Head>
        <title>Insights | {SITE_DATA.brand.name}</title>
      </Head>

      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
            <ChevronLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          <div className="font-bold text-white">Engineering Insights</div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        
        {!activePost ? (
          // --- LIST VIEW ---
          <>
            <h1 className="text-4xl font-bold text-white mb-4">Latest Content</h1>
            <p className="text-gray-400 mb-12 text-lg">Video breakdowns, system diagrams, and engineering logs.</p>
            
            <div className="space-y-6">
              {SITE_DATA.blog.map((post, i) => (
                <article key={i} onClick={() => setActivePost(post)} className="group cursor-pointer">
                  <div className="p-6 rounded-2xl bg-[#111] border border-white/10 hover:border-indigo-500/50 transition duration-300 relative overflow-hidden">
                    
                    {/* Background Gradient for Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4 text-xs text-indigo-400 font-mono">
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {post.date}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {post.readTime}</span>
                        </div>
                        
                        {/* Icon Badge based on content type */}
                        {post.videoId ? (
                          <span className="px-2 py-1 rounded bg-red-500/10 text-red-400 text-xs font-bold flex items-center gap-1 border border-red-500/20">
                            <Youtube className="w-3 h-3" /> Video
                          </span>
                        ) : post.image ? (
                          <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-bold flex items-center gap-1 border border-blue-500/20">
                            <ImageIcon className="w-3 h-3" /> Diagram
                          </span>
                        ) : null}
                      </div>

                      <h2 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition">{post.title}</h2>
                      <p className="text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          // --- READ/WATCH VIEW ---
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setActivePost(null)} className="text-sm text-indigo-400 mb-8 hover:text-white transition flex items-center gap-1">
              <ChevronLeft className="w-4 h-4" /> Back to list
            </button>
            
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">{activePost.tag}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{activePost.title}</h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 border-b border-white/10 pb-8">
              <span className="flex items-center gap-2">By {SITE_DATA.brand.name}</span>
              <span className="flex items-center gap-2">{activePost.date}</span>
            </div>

            {/* 🎥 VIDEO PLAYER RENDERER */}
            {activePost.videoId && (
              <div className="mb-10 relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/10">
                <iframe 
                  src={`https://www.youtube.com/embed/${activePost.videoId}`} 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            )}

            {/* 🖼️ DIAGRAM RENDERER */}
            {activePost.image && (
              <div className="mb-10">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                  <img src={activePost.image} alt={activePost.title} className="w-full h-auto object-contain" />
                </div>
                <p className="text-center text-xs text-gray-500 mt-2 italic">Figure 1: {activePost.title}</p>
              </div>
            )}

            {/* TEXT CONTENT */}
            <div className="prose prose-invert prose-lg max-w-none text-gray-300">
              <div className="whitespace-pre-line leading-relaxed">
                {activePost.content}
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}