"use client";

import { skillCategories } from "@/data/portfolioData";
import { Code2, Server, Shield, Database, Cpu, CheckCircle2 } from "lucide-react";

export default function Skills() {
  const categoryIcons = [Code2, Server, Shield, Database];

  return (
    <section id="skills" className="py-20 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
            Technical Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Skills & <span className="gradient-text-accent">Technology Stack</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-800/90 shadow-lg hover:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-indigo-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-100">{cat.category}</h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-300 group"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
