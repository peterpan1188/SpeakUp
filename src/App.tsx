/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyWeBuiltThis from "./components/WhyWeBuiltThis";
import AppMockups from "./components/AppMockups";
import FAQs from "./components/FAQs";
import ContactFormModal from "./components/ContactFormModal";
import Footer from "./components/Footer";
import { Sparkles, MessageSquare, ShieldCheck, Heart, User, School, Lightbulb, Star } from "lucide-react";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [modalRole, setModalRole] = useState("student");

  // Read logged submissions from localStorage to visualize active sign-up listings
  const getSavedProposals = () => {
    try {
      const saved = localStorage.getItem("speakup_proposals");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  };

  const savedProposals = getSavedProposals();

  const handleOpenContact = (role: string = "student") => {
    setModalRole(role);
    setIsContactOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#fafbfe] text-slate-800 font-sans antialiased overflow-x-hidden">
      {/* Global Navigation Header with integrated announcement banner to prevent visual overlays */}
      <Navbar
        onOpenContact={() => handleOpenContact("student")}
        onOpenAdminContact={() => handleOpenContact("admin")}
      />

      {/* Main Sections */}
      <main>
        {/* HERO SECTION */}
        <Hero onOpenContact={() => handleOpenContact("student")} />

        {/* SECTION 2 — CASE STUDIES & WHY WE BUILT THIS */}
        <WhyWeBuiltThis />

        {/* SECTION 3 — INTERACTIVE APP PHONE SMARTPHONE SIMULATOR & FEATURES */}
        <AppMockups />

        {/* Dynamic District Board Logs Section */}
        {savedProposals.length > 0 && (
          <section className="py-12 bg-white border-t border-slate-100 text-left select-none">
            <div className="max-w-4xl mx-auto px-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 text-base">Active Community Proposals</h3>
                  <p className="text-xs text-slate-400">Schools representing interest in this demo session</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {savedProposals.map((proposal: any) => (
                  <div key={proposal.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-150 relative">
                    <span className="absolute top-4 right-4 text-xs font-bold bg-white px-2.5 py-1 border border-slate-100 rounded-full text-slate-400">
                      {proposal.timestamp}
                    </span>
                    <div className="flex items-center gap-2 mb-2.5 text-xs font-extrabold text-blue-600 uppercase tracking-widest">
                      <User className="w-3.5 h-3.5" />
                      <span>{proposal.role} sign-up</span>
                    </div>
                    <h4 className="font-extrabold text-[#111827] text-sm tracking-tight mb-0.5">{proposal.name}</h4>
                    <p className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <School className="w-3.5 h-3.5" />
                      <span>{proposal.school}</span>
                    </p>
                    {proposal.message && (
                      <p className="text-xs text-slate-400 italic mt-3 bg-white p-2.5 rounded-xl border border-slate-100/50">
                        "{proposal.message}"
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 4 — COGENT & EMOTIONAL FAQS ACCORDION */}
        <FAQs />
      </main>

      {/* SECTION 5 — FOOTER */}
      <Footer onOpenContact={() => handleOpenContact("admin")} />

      {/* MODAL POPUP FORM (Talk To Us Overlay) */}
      <ContactFormModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialRole={modalRole}
      />
    </div>
  );
}
