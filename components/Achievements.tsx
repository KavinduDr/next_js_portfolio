"use client";

import { achievements, certifications } from "@/data/portfolioData";
import { Trophy, Medal, Star, Award, GraduationCap, CheckCircle } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
            Recognition & Honors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Hackathons & <span className="gradient-text-gold">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Competitions & Awards */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-amber-400" />
              <span>Competitions & Podiums</span>
            </h3>

            <div className="space-y-3">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    item.highlight
                      ? "bg-amber-950/20 border-amber-500/30 hover:border-amber-500/60"
                      : "glass-card border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-lg shrink-0 ${
                        item.badge === "trophy"
                          ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                          : item.badge === "medal"
                          ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/40"
                          : "bg-slate-800 text-cyan-400"
                      }`}
                    >
                      {item.badge === "trophy" ? (
                        <Trophy className="w-5 h-5" />
                      ) : item.badge === "medal" ? (
                        <Medal className="w-5 h-5" />
                      ) : (
                        <Star className="w-5 h-5" />
                      )}
                    </div>

                    <div className="flex-1">
                      <h4 className="font-bold text-sm sm:text-base text-slate-100">{item.title}</h4>
                      <div className="flex items-center justify-between text-xs text-slate-400 mt-0.5">
                        <span className="text-cyan-400">{item.organizer}</span>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Professional Education & Certifications */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-cyan-400" />
              <span>Professional Education & Certs</span>
            </h3>

            <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-200">{cert.title}</h4>
                      <p className="text-[11px] text-cyan-400">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono font-semibold bg-slate-800 text-slate-300">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
