"use client";

import { experiences, personalData } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, Building2, ExternalLink, CheckCircle2, ChevronRight, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
            Career & Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Work Experience & <span className="gradient-text-accent">Milestones</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-4" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Industry Work Experience Card: WSO2 */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative glass-card rounded-2xl p-6 sm:p-8 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 shadow-xl"
            >
              {/* Top Row: Company & Role */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-500 p-0.5 shrink-0 shadow-md shadow-indigo-500/20">
                    <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-indigo-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-sm text-cyan-400 font-semibold mt-0.5">
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 font-normal text-xs">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description & Key Deliverables */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                  <span>Key Impact & Technical Contributions:</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {exp.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900 border border-slate-800 text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Academic Education Timeline Card */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5 shrink-0 shadow-md shadow-cyan-500/20">
                  <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100">{personalData.education.degree}</h3>
                  <p className="text-sm font-semibold text-cyan-400">{personalData.education.university}</p>
                  <p className="text-xs text-slate-400">{personalData.education.faculty} — {personalData.education.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold w-fit">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalData.education.period}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
