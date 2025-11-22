import Head from "next/head";
import Link from "next/link";
import { client } from "../src/sanity/client";
import { postsQuery } from "../src/sanity/queries";
import { ChevronLeft, Calendar, Clock, Youtube, ImageIcon } from "lucide-react";
import { useState } from "react";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from '@sanity/image-url';

// Helper to generate image URLs from Sanity data
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

// 🎨 RICH TEXT COMPONENTS CONFIGURATION
// This tells the blog how to render specific Sanity content
const RichTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="my-8 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          <img
            src={urlFor(value).url()}
            alt={value.alt || 'Blog Image'}
            className="w-full h-auto object-cover"
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => <h2 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold text-cyan-400 mt-6 mb-3">{children}</h3>,
    normal: ({ children }) => <p className="text-gray-300 leading-relaxed mb-4">{children}</p>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-indigo-500 pl-4 py-2 my-6 bg-white/5 italic text-gray-400">{children}</blockquote>,
  },
};

export default function Blog({ posts }) {
  const [activePost, setActivePost] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-indigo-500/30">
      <Head>
        <title>Insights | Engineering Log</title>
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
              {posts && posts.length > 0 ? posts.map((post, i) => (
                <article key={i} onClick={() => setActivePost(post)} className="group cursor-pointer">
                  <div className="p-6 rounded-2xl bg-[#111] border border-white/10 hover:border-indigo-500/50 transition duration-300 relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4 text-xs text-indigo-400 font-mono">
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Recent"}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {post.readTime || "5 min"}</span>
                        </div>
                        
                        {post.videoId && (
                          <span className="px-2 py-1 rounded bg-red-500/10 text-red-400 text-xs font-bold flex items-center gap-1 border border-red-500/20">
                            <Youtube className="w-3 h-3" /> Video
                          </span>
                        )}
                      </div>

                      <h2 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition">{post.title}</h2>
                      <p className="text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>
                    </div>
                  </div>
                </article>
              )) : (
                <div className="text-center py-10 text-gray-500 border border-white/5 rounded-xl">
                  No posts found. Go to <a href="/studio" className="text-indigo-400 underline">/studio</a> to publish one!
                </div>
              )}
            </div>
          </>
        ) : (
          // --- READ/WATCH VIEW ---
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setActivePost(null)} className="text-sm text-indigo-400 mb-8 hover:text-white transition flex items-center gap-1">
              <ChevronLeft className="w-4 h-4" /> Back to list
            </button>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{activePost.title}</h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 border-b border-white/10 pb-8">
              <span className="flex items-center gap-2">{activePost.publishedAt ? new Date(activePost.publishedAt).toLocaleDateString() : "Recent"}</span>
              <span className="flex items-center gap-2">{activePost.readTime}</span>
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

            {/* 📝 RICH TEXT CONTENT */}
            <div className="prose prose-invert prose-lg max-w-none">
              {activePost.content && <PortableText value={activePost.content} components={RichTextComponents} />}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

// Fetch data from Sanity before page loads
export async function getServerSideProps() {
  const posts = await client.fetch(postsQuery);
  return {
    props: {
      posts: posts || []
    }
  };
}