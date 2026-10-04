"use client";

import { personalData } from "@/data/portfolioData";
import { GraduationCap, ShieldCheck, Server, Layers, Award, CheckCircle2 } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Microservices & Security Frameworks",
      description: "Building context-aware security scanners with Rust and Go. Experienced in SAST, DAST, SCA tools, and Zero Trust security patterns.",
      color: "text-cyan-400",
      bgColor: "bg-cyan-950/40 border-cyan-500/20"
    },
    {
      icon: Server,
      title: "Cloud-Native Developer Platforms",
      description: "Contributed to OpenChoreo during internship at WSO2 Lanka. Focus on infrastructure abstraction, API management, and observability telemetry.",
      color: "text-indigo-400",
      bgColor: "bg-indigo-950/40 border-indigo-500/20"
    },
    {
      icon: Layers,
      title: "Full-Stack Web Engineering",
      description: "Creating responsive, scalable web applications with Next.js, React, TypeScript, Python, Node.js, and modern state management tools.",
      color: "text-purple-400",
      bgColor: "bg-purple-950/40 border-purple-500/20"
    },
    {
      icon: Award,
      title: "Competitive & Project Leadership",
      description: "First runner-up in national hackathons (Tech-triathlon by Rootcode, AI-Sprint by Sysco Labs) with strong team project execution skills.",
      color: "text-amber-400",
      bgColor: "bg-amber-950/40 border-amber-500/20"
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Engineering Software with <span className="gradient-text-primary">Precision & Purpose</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Main Bio Card */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              <span>Computer Engineering Background</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
              I am a <strong className="text-white">Computer Engineering fresh graduate</strong> from the <span className="text-cyan-400">Faculty of Engineering, University of Ruhuna</span>. My education has equipped me with a deep understanding of computer architecture, networking, software design, and modern systems programming.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
              During my Software Engineering Internship at <strong className="text-indigo-400">WSO2 Lanka</strong>, I worked on cloud-native internal developer platforms. I enjoy tackling complex architectural problems — from Rust-based application security scanners to intuitive Next.js web applications.
            </p>

            {/* Academic Summary Badge */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 uppercase font-semibold">Degree Program</p>
                <p className="text-sm font-bold text-slate-100">{personalData.education.degree}</p>
                <p className="text-xs text-cyan-400">{personalData.education.university} ({personalData.education.period})</p>
              </div>
              <span className="px-3 py-1 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 rounded-full">
                Graduated
              </span>
            </div>
          </div>

          {/* Core Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border ${pillar.bgColor} backdrop-blur-md hover:scale-[1.02] transition-all duration-300`}
                >
                  <div className={`p-2.5 rounded-xl bg-slate-900/80 w-fit mb-3 ${pillar.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-100 mb-1.5">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Check Highlights Bar */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm text-slate-200">Strong Engineering Core</h5>
                <p className="text-xs text-slate-400">Deep understanding of OS, computer networks, systems architecture & algorithms.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm text-slate-200">Industry Work Experience</h5>
                <p className="text-xs text-slate-400">6-month internship at WSO2 developing cloud-native developer platforms.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm text-slate-200">Problem Solver & Agile Cert</h5>
                <p className="text-xs text-slate-400">Certified in Agile & Scrum, with awards in competitive hackathons.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
