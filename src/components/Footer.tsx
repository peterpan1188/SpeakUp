import React from "react";
import { Heart, Send, Sparkles, MessageSquare, ShieldCheck } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-layer-name="footer.root" className="bg-slate-900 text-white pt-20 pb-12 font-sans relative overflow-hidden select-none border-t border-slate-800">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand Directory & Mission Statement */}
          <div className="lg:col-span-4 text-left space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-md">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight block text-white">SpeakUp</span>
                <span className="text-[9px] font-bold text-slate-400 tracking-widest uppercase block -mt-1.5">
                  Every Voice Matters
                </span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-semibold max-w-sm mt-3">
              We are on a critical mission to build supportive secondary school systems, bringing empathetic counselor guidance, anonymous reporting, and fast coordinate action to students everywhere.
            </p>

            <div className="pt-2 text-xs text-slate-500 font-bold tracking-wide uppercase">
              🚀 CATCHPHRASE:<br />
              <span className="text-sky-400 font-extrabold">“A safer school starts with one voice.”</span>
            </div>
          </div>

          {/* Column 2: Structural Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Core Sections</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#why-speakup" className="text-xs md:text-sm text-slate-400 hover:text-white font-semibold transition-colors">
                    Why We Built This
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-xs md:text-sm text-slate-400 hover:text-white font-semibold transition-colors">
                    SaaS Features
                  </a>
                </li>
                <li>
                  <a href="#mockups" className="text-xs md:text-sm text-slate-400 hover:text-white font-semibold transition-colors">
                    App Phone Simulator
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="text-xs md:text-sm text-slate-400 hover:text-white font-semibold transition-colors">
                    Frequently FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Collaboration Nodes</h4>
              <ul className="space-y-2.5">
                <li>
                  <button onClick={onOpenContact} className="text-xs md:text-sm text-slate-400 hover:text-white font-semibold transition-colors cursor-pointer text-left">
                    Sponsor Pilot Program
                  </button>
                </li>
                <li>
                  <button onClick={onOpenContact} className="text-xs md:text-sm text-slate-400 hover:text-white font-semibold transition-colors cursor-pointer text-left">
                    District Administrator
                  </button>
                </li>
                <li>
                  <button onClick={onOpenContact} className="text-xs md:text-sm text-slate-400 hover:text-white font-semibold transition-colors cursor-pointer text-left">
                    Counselor Advisory Board
                  </button>
                </li>
                <li>
                  <a href="#" className="text-xs md:text-sm text-slate-400 hover:text-white font-semibold transition-colors">
                    Read Safety Blueprint
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact & Collaboration Call to Action */}
          <div className="lg:col-span-4 text-left space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Join Next Term's Pilot</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-semibold max-w-sm">
              We are actively scheduling demo presentations and safe pilot proposals. Tap below to log your school under our active evaluation queues.
            </p>
            
            <button
              data-layer-name="footer.cta"
              onClick={onOpenContact}
              id="talk-to-us-trigger-footer"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-md hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Talk To Us Today</span>
            </button>
          </div>

        </div>

        {/* Footer Bottom Credentials and Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Mission Note */}
          <div className="text-left select-none text-xs text-slate-500 font-semibold flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-[10px]">🏡</div>
            <span>Building safer communities for every student.</span>
          </div>

          {/* Copyrights and Credentials */}
          <div className="text-center sm:text-right text-[11px] text-slate-500 font-semibold select-none">
            &copy; {currentYear} SpeakUp Network. All rights (privacy and data local guard hashes) fully secured. Made with care for safer academic class learning.
          </div>

        </div>

      </div>
    </footer>
  );
}
