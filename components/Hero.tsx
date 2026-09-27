"use client";

import { personalData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import {
  Mail,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Code2,
  MapPin,
  Sparkles,
  Download,
  Building2,
  GraduationCap,
  Trophy
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Ambient Orbs */}
      <div className="glow-orb-cyan -top-20 -left-20" />
      <div className="glow-orb-indigo top-40 -right-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Availability / Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Software Engineering Roles</span>
            </div>

            {/* Main Greeting & Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15] mb-4">
              Building Secure, <br className="hidden sm:inline" />
              <span className="gradient-text-primary">Cloud-Native Systems</span> & Full-Stack Apps
            </h1>

            {/* Sub-Headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
              Hi, I&apos;m <span className="text-white font-semibold">{personalData.name}</span> — a BSc (Hons) Computer Engineering Graduate from <span className="text-cyan-400 font-medium">University of Ruhuna</span> and former Software Engineering Intern at <span className="text-indigo-400 font-medium">WSO2 Lanka</span>. Specializing in microservices, application security, and high-performance web platforms.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-xl hover:from-cyan-400 hover:to-purple-500 shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl hover:text-white transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links & Location */}
            <div className="flex items-center gap-6 pt-4 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-3">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-slate-800 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalData.email}`}
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-purple-400 hover:border-purple-500/40 hover:bg-slate-800 transition-all"
                  aria-label="Email Me"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="h-4 w-[1px] bg-slate-800" />

              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{personalData.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Experience Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Accent Glow Behind Card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>

              {/* Main Card Container */}
              <div className="relative glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/60 shadow-2xl">
                {/* Top Profile Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-lg shadow-indigo-500/30">
                    <div className="w-full h-full bg-[#0d1322] rounded-[14px] flex items-center justify-center">
                      <Code2 className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-100">{personalData.name}</h3>
                    <p className="text-xs text-cyan-400 font-medium">Software Engineer & Systems Dev</p>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                      <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Univ. of Ruhuna Graduate</span>
                    </div>
                  </div>
                </div>

                {/* Quick Highlights Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="flex items-center gap-2 text-indigo-400 mb-1">
                      <Building2 className="w-4 h-4" />
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Ex-Intern</span>
                    </div>
                    <p className="text-sm font-bold text-slate-200">WSO2 Lanka</p>
                    <p className="text-[10px] text-slate-400">OpenChoreo IDP Project</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="flex items-center gap-2 text-cyan-400 mb-1">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Final Project</span>
                    </div>
                    <p className="text-sm font-bold text-slate-200">CAS Security</p>
                    <p className="text-[10px] text-slate-400">Rust & Microservices</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="flex items-center gap-2 text-amber-400 mb-1">
                      <Trophy className="w-4 h-4" />
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Hackathons</span>
                    </div>
                    <p className="text-sm font-bold text-slate-200">2x 1st Runner Up</p>
                    <p className="text-[10px] text-slate-400">Rootcode & Sysco Labs</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="flex items-center gap-2 text-purple-400 mb-1">
                      <Cpu className="w-4 h-4" />
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Core Tech</span>
                    </div>
                    <p className="text-sm font-bold text-slate-200">Rust, Go, TS, Py</p>
                    <p className="text-[10px] text-slate-400">Next.js, React, Node</p>
                  </div>
                </div>

                {/* Micro Terminal Widget */}
                <div className="rounded-xl bg-[#06080e] p-3.5 border border-slate-800/90 font-mono text-[11px]">
                  <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-800/60">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    </div>
                    <span className="text-[10px] text-slate-500">kavindu@laptop:~</span>
                  </div>
                  <div className="space-y-1 text-slate-300">
                    <p className="text-slate-500">$ cargo run --release --bin cas_scanner</p>
                    <p className="text-emerald-400">✓ SAST Engine initialized (Rust 1.78)</p>
                    <p className="text-cyan-400">✓ Context-aware vulnerability scanner active</p>
                    <p className="text-indigo-400 animate-pulse">&gt; Ready for deployment_</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
