"use client";

import { personalData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { ArrowUp, Mail, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05070b] border-t border-slate-800/80 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="font-bold text-lg text-slate-100 tracking-tight mb-1">
              Kavindu Dhananjaya<span className="text-cyan-400">.</span>
            </a>
            <p className="text-xs text-slate-400 text-center md:text-left">
              BSc (Hons) Computer Engineering Fresh Graduate & Software Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-purple-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-slate-800 hover:text-white transition-all shadow-md"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} Kavindu Dhananjaya. Built with Next.js & Tailwind CSS.</p>
          <p className="flex items-center gap-1">
            Designed for High Performance & Microservices Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
