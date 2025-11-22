import React from "react";
import Link from "next/link";
import { SITE_DATA } from "../lib/data";
import { Download, ChevronLeft, CheckCircle } from "lucide-react";

export default function ResumePage() {
  // ⚠️ CRITICAL FIX: We are NOT asking for 'contact' anymore
  const { brand, resume } = SITE_DATA;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <div className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition">
            <ChevronLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl font-bold">{brand.name}</h1>
              <p className="text-cyan-400 text-lg mt-2">{brand.role}</p>
              {/* ⚠️ CRITICAL FIX: Using brand.location */}
              <p className="text-slate-400 text-sm mt-1">{brand.location} • {brand.email}</p>
            </div>
            <a 
              href={brand.resume} 
              download 
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition flex items-center gap-2 shadow-lg"
            >
              <Download className="w-4 h-4" /> Download PDF
            </a>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="mb-12">
          <h2 className="text-xl font-bold border-b-2 border-slate-200 pb-2 mb-4 text-slate-800">Professional Summary</h2>
          <p className="text-slate-600 leading-relaxed">{resume.summary}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold border-b-2 border-slate-200 pb-2 mb-6 text-slate-800">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {resume.skills && Object.entries(resume.skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-bold text-cyan-700 mb-3">{category}</h3>
                <ul className="space-y-2">
                  {items.map(skill => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold border-b-2 border-slate-200 pb-2 mb-6 text-slate-800">Experience Highlights</h2>
          <div className="space-y-8">
            {resume.experience && resume.experience.map((job, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                  <span className="text-sm text-slate-500 font-medium">{job.year}</span>
                </div>
                <div className="text-cyan-700 font-medium mb-3">{job.company}</div>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
// Final fix for deployment