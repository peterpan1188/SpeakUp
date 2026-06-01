import React, { useState, useEffect } from "react";
import { MessageSquarePlus, ShieldCheck, Heart, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
  onOpenAdminContact: () => void;
}

export default function Navbar({ onOpenContact, onOpenAdminContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Why SpeakUp", href: "#why-speakup" },
    { name: "SaaS Features", href: "#features" },
    { name: "App Mobile Mockups", href: "#mockups" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header data-layer-name="navbar.header" className="fixed top-0 left-0 right-0 z-40 flex flex-col w-full">
      {/* Stick-to-top custom announcement banner embedded inside the header bar */}
      <div data-layer-name="navbar.banner" className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 py-2.5 text-center text-[10.5px] sm:text-xs text-white font-extrabold tracking-wide uppercase flex items-center justify-center gap-2 select-none px-4 w-full">
        <Sparkles className="w-3.5 h-3.5 animate-pulse flex-shrink-0" />
        <span className="truncate max-w-[calc(100%-80px)] sm:max-w-none">SpeakUp is actively welcoming School Board pilots for the 2026 Academic Term!</span>
        <button
          onClick={onOpenAdminContact}
          className="underline decoration-white underline-offset-2 ml-1 cursor-pointer hover:text-sky-100 transition-colors flex-shrink-0"
          id="talk-to-us-trigger"
        >
          Request Proposal Package →
        </button>
      </div>

      {/* Main Navigation Row */}
      <div
        data-layer-name="navbar.row"
        className={`w-full transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3" : "bg-white/40 backdrop-blur-sm border-b border-transparent py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo and Tagline */}
          <a data-layer-name="navbar.logo" href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-200 group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-sans font-extrabold text-xl tracking-tight text-slate-800">SpeakUp</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block -mt-1">
                Every Voice Matters
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav data-layer-name="navbar.links" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 hover:-translate-y-0.5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button: App Stores Coming Soon row with popover/notice */}
          <div data-layer-name="navbar.cta-group" className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenContact}
              className="flex items-center gap-2.5 relative group/navstore text-left cursor-pointer pointer-events-auto"
            >
              {/* Apple Store Badge Look */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 opacity-95 transition-all transform hover:scale-[1.03] active:scale-[0.98]">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.13.67-2.85 1.49-.63.73-1.18 1.87-1.03 2.98 1.07.08 2.21-.55 2.89-1.41z"/>
                </svg>
                <div className="text-left select-none">
                  <div className="text-[6.5px] text-slate-400 font-bold uppercase tracking-wider leading-none">Soon on the</div>
                  <div className="text-[10px] font-extrabold font-sans leading-none mt-0.5">App Store</div>
                </div>
              </div>

              {/* Google Play Store Badge Look */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 opacity-95 transition-all transform hover:scale-[1.03] active:scale-[0.98]">
                <svg className="w-4 h-4 fill-white animate-pulse" viewBox="0 0 24 24">
                  <path d="M5 3.5v17l14-8.5L5 3.5z" />
                </svg>
                <div className="text-left select-none">
                  <div className="text-[6.5px] text-slate-400 font-bold uppercase tracking-wider leading-none">Soon on</div>
                  <div className="text-[10px] font-extrabold font-sans leading-none mt-0.5">Google Play</div>
                </div>
              </div>

              {/* Hovering Popover / Tooltip */}
              <div data-layer-name="navbar.cta-popover" className="absolute top-full right-0 mt-3 w-72 bg-slate-950 text-white p-3.5 rounded-xl shadow-xl border border-slate-800 opacity-0 group-hover/navstore:opacity-100 transition-all pointer-events-none transform translate-y-2 group-hover/navstore:translate-y-0 z-50">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-extrabold tracking-wide uppercase mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  <span>Development Stage</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-normal font-medium">
                  We are currently in active pilot testing stage with partner high schools. Full mobile apps are coming soon. Tap to request early board access!
                </p>
                <div className="mt-2 text-[9.5px] font-extrabold text-sky-400 uppercase tracking-widest text-right flex items-center justify-end gap-1 font-mono">
                  <span>Sign Up For Trial</span>
                  <span>→</span>
                </div>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div data-layer-name="navbar.mobile-drawer" className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xl p-6 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-slate-900 py-2 border-b border-slate-50"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full mt-3 p-3.5 bg-slate-950 text-white rounded-xl shadow-lg border border-slate-800 hover:bg-slate-900 transition-colors flex flex-col gap-2.5 items-start text-left"
          >
            <div className="flex items-center gap-1.5 text-amber-400 text-[10px] font-bold tracking-wider uppercase leading-none">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>Soon on iOS & Android</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-sm font-extrabold text-slate-100 leading-none w-full">
              <span>App Store & Google Play</span>
              <span className="text-xs text-sky-400 font-bold uppercase tracking-wider ml-auto">Request Access →</span>
            </div>
            
            <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">
              SpeakUp is currently in active development stage with school board pilots. Click here to request early district access!
            </p>
          </button>
        </div>
      )}
    </header>
  );
}
