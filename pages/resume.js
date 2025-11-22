import React from "react";
import Link from "next/link";
import { client } from "../src/sanity/client";
import { profileQuery } from "../src/sanity/queries";
import { Download, ChevronLeft, CheckCircle } from "lucide-react";

export default function ResumePage({ profile }) {
  if (!profile) return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      Loading Resume Data...
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <div className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition">
            <ChevronLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl font-bold">{profile.name}</h1>
              <p className="text-cyan-400 text-lg mt-2">{profile.role}</p>
              <p className="text-slate-400 text-sm mt-1">{profile.location} • {profile.email}</p>
            </div>
            {profile.resumeUrl && (
              <a 
                href={profile.resumeUrl} 
                download 
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition flex items-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4" /> Download PDF
              </a>
            )}
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* PROFESSIONAL SUMMARY */}
        <section className="mb-12">
          <h2 className="text-xl font-bold border-b-2 border-slate-200 pb-2 mb-4 text-slate-800">Professional Summary</h2>
          <p className="text-slate-600 leading-relaxed whitespace-pre-line">{profile.bio}</p>
        </section>

        {/* KEY METRICS */}
        <section className="mb-12">
          <h2 className="text-xl font-bold border-b-2 border-slate-200 pb-2 mb-6 text-slate-800">Performance Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {profile.stats && profile.stats.map((stat, i) => (
              <div key={i} className="p-4 bg-white border border-slate-200 rounded-lg">
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-12">
          <h2 className="text-xl font-bold border-b-2 border-slate-200 pb-2 mb-6 text-slate-800">Technical Skills</h2>
          <div className="flex flex-wrap gap-2">
            {profile.skills && profile.skills.map((skill, i) => (
              <span key={i} className="px-3 py-1.5 bg-slate-200 text-slate-700 text-sm font-medium rounded-md">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const profile = await client.fetch(profileQuery);
  return {
    props: {
      profile: profile || null
    }
  };
}