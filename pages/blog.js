import Head from 'next/head';
import Link from 'next/link';
import { client } from '../src/sanity/lib/client';
import { postsQuery } from '../src/sanity/queries';
import { MoveRight, Calendar, Clock, ArrowLeft } from 'lucide-react';
import NewsletterForm from '../components/NewsletterForm';

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Engineering Insights | OpokuML</title>
        <meta name="description" content="Technical deep-dives into MLOps, System Design, and AI Engineering." />
      </Head>

      <div className="min-h-screen bg-[#0F0F10] text-slate-300 selection:bg-indigo-500/30">
        
        {/* 1. NAV (Back Button) */}
        <nav className="sticky top-0 z-50 bg-[#0F0F10]/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <span className="text-sm font-bold text-white tracking-wider">OpokuML Blog</span>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-6 pt-20 pb-20">
          
          {/* 2. PAGE HEADER */}
          <div className="mb-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Engineering Logs
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Technical articles on applied Machine Learning. Focusing on end-to-end MLOps, model deployment, and building production-ready systems.
            </p>
          </div>

          {/* 3. POSTS GRID */}
          <div className="grid gap-8 mb-24">
            {posts?.length > 0 ? (
              posts.map((post, i) => (
                <Link key={i} href={`/blog/${post.slug}`} className="group relative block p-8 rounded-3xl bg-[#161618] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all">
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 text-xs font-medium text-indigo-400 mb-4 uppercase tracking-wider">
                       <span className="flex items-center gap-1">
                         <Calendar className="w-3 h-3" />
                         {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                       </span>
                       <span className="w-1 h-1 rounded-full bg-slate-600" />
                       <span className="flex items-center gap-1">
                         <Clock className="w-3 h-3" />
                         {post.readTime || '5 min read'}
                       </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-slate-400 mb-6 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-white font-bold text-sm group-hover:translate-x-2 transition-transform">
                      Read Article <MoveRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-20 border border-dashed border-slate-800 rounded-3xl">
                <p className="text-slate-500 text-lg">No articles found yet. Start writing in the Studio!</p>
              </div>
            )}
          </div>

          {/* 4. NEWSLETTER SUBSCRIPTION */}
          <NewsletterForm />

        </main>

        <footer className="border-t border-white/5 py-12 text-center text-slate-600 text-sm">
          &copy; 2025 OpokuML. Built for Engineers.
        </footer>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const posts = await client.fetch(postsQuery);
  return {
    props: {
      posts: posts || [],
    }
  };
}