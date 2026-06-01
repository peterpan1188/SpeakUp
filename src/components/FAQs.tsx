import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { FAQItem } from "../types";

export default function FAQs() {
  const [openId, setOpenId] = useState<string | null>("faq1");

  const faqs: FAQItem[] = [
    {
      id: "faq1",
      question: "Can reports be anonymous?",
      answer: "Absolutely. SpeakUp is built on privacy. We wipe all client-side device identifiers and encrypt network streams, ensuring your identity is completely invisible. Only the description of the event is transmitted, though students can optionally choose to share their identity with counselors.",
    },
    {
      id: "faq2",
      question: "Who receives the reports?",
      answer: "Reports go exclusively to your school's licensed counselor or qualified administrative wellness lead. Reports are never shared with student advisors, generic teachers, or peers. All responders must complete verified school credentials before logging onto the dashboard.",
    },
    {
      id: "faq3",
      question: "How does escalation work?",
      answer: "Our automated watchdog tracking prevents reports from sitting unread. When a report is lodged, an internal timer begins. If the designated counselor doesn't log a status change or mediation update within a specific threshold, SpeakUp escalates notifications directly to the School Principal.",
    },
    {
      id: "faq4",
      question: "Is the app only for schools?",
      answer: "No! SpeakUp is built for young communities everywhere. Summer academies, youth organizations, recreational sports leagues, and local districts can spin up their own customized SafeSpeak dashboard networks utilizing our customizable setups.",
    },
    {
      id: "faq5",
      question: "Can parents monitor reports?",
      answer: "Yes. SpeakUp features a peaceful 'Guardian Nest Log'. Instead of triggering panic-inducing text messages, parents can log in to view gentle, counselor-vetted wellness indicators, status logs, and helpful home-chat conversation guides.",
    },
    {
      id: "faq6",
      question: "What happens if no authority responds?",
      answer: "In the rare event that local school administrators lag or fail to resolve an escalation point, SpeakUp contains an opt-in emergency node that securely pathways reports to certified national child support hotlines and state-wide youth advocates.",
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section data-layer-name="faqs.section" id="faqs" className="py-20 md:py-28 bg-white border-t border-slate-50 relative overflow-hidden select-none">
      {/* Decorative Blur elements */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-teal-50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-rose-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-xs tracking-wider uppercase mb-3.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Support & Guidance</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-slate-500 mt-4 leading-relaxed">
            Need reassurance on privacy, routing protocols, or school setups? Find everything you need to know about the SpeakUp environment.
          </p>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="space-y-4 text-left">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                data-layer-name={`faq.${faq.id}`}
                className={`rounded-3xl border-2 transition-all p-5 ${
                  isOpen
                    ? "bg-slate-50 border-slate-900 shadow-md"
                    : "bg-white border-slate-100 hover:border-slate-200"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between gap-4 font-sans text-left cursor-pointer"
                >
                  <span className="font-extrabold text-base md:text-lg text-slate-800 tracking-tight select-none">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-xl border border-slate-200 transition-transform ${
                    isOpen ? "rotate-180 bg-slate-900 text-white border-slate-900" : "bg-white text-slate-400"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1, transition: { duration: 0.3 } }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 text-sm md:text-base leading-relaxed text-slate-500 font-semibold select-none border-t border-slate-100/50 mt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Contact/Support Invitation Card */}
        <div data-layer-name="faqs.contact-card" className="mt-16 p-6 md:p-8 rounded-[32px] bg-slate-50 border border-slate-150 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 flex items-center justify-center shadow-sm">
              <span className="text-xl">🌟</span>
            </div>
            <div>
              <h3 className="font-extrabold text-slate-800 text-lg">Still have some questions?</h3>
              <p className="text-xs text-slate-400 font-semibold max-w-md mt-0.5">We'd love to jump on a quick zoom, walk you through our admin screens, or detail our data structures anytime.</p>
            </div>
          </div>
          <a
            href="#talk-to-us-modal"
            onClick={(e) => {
              e.preventDefault();
              // Trigger modal opener
              const btn = document.getElementById("talk-to-us-trigger-footer") || document.getElementById("talk-to-us-trigger");
              if (btn) btn.click();
            }}
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl text-sm transition-all shadow-md cursor-pointer text-center flex-shrink-0"
          >
            Ask a Question
          </a>
        </div>

      </div>
    </section>
  );
}
