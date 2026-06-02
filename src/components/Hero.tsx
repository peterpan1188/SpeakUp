import React from "react";
import { motion } from "motion/react";
import { ArrowRight, HelpCircle, Heart, Star, Sparkles, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  // Stagger wrapper
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-gradient-to-b from-[#f3f7fd] via-[#fafbfc] to-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Content Side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 select-none text-left"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-xs tracking-wider uppercase mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 animate-bounce" />
            <span>Fostering Classroom Well-Being</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
          >
            Creating Safer Schools Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600">Courage</span> and Connection
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-500 mt-6 leading-relaxed max-w-2xl"
          >
            SpeakUp helps students, parents, teachers, and communities report bullying safely and encourage faster action through a connected support system.
          </motion.p>

          {/* Notice Card */}
          <motion.div
            variants={itemVariants}
            className="mt-8 p-4 bg-amber-50/70 border border-amber-200/60 rounded-2xl max-w-2xl relative overflow-hidden"
          >
            <div className="absolute -top-6 -right-6 w-14 h-14 bg-amber-100/50 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-amber-500 fill-amber-300" />
            </div>
            <p className="text-xs sm:text-sm text-amber-800 leading-relaxed font-medium">
              <strong className="text-amber-900 font-bold block mb-0.5">🚀 Development Notice:</strong>
              SpeakUp is currently in development. We are actively open for collaborations, partnerships, and school proposals while building the platform.
            </p>
          </motion.div>

          {/* Buttons & Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={onOpenContact}
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl shadow-lg shadow-slate-100 hover:-translate-y-0.5 transition-all text-center cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Talk To Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#why-speakup"
              className="px-8 py-4 border border-slate-200 bg-white/60 hover:bg-white text-slate-700 hover:text-slate-900 font-bold rounded-2xl hover:border-slate-300 transition-all text-center flex items-center justify-center gap-2"
            >
              <HelpCircle className="w-4 h-4 text-slate-400" />
              <span>Learn More</span>
            </a>
          </motion.div>

          {/* Peer Trust Tags */}
          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-10 pt-8 border-t border-slate-100 flex flex-wrap gap-6 items-center"
          >
            <div className="flex -space-x-2">
              <span className="w-8 h-8 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-xs font-bold text-indigo-700">🎒</span>
              <span className="w-8 h-8 rounded-full bg-teal-100 border-2 border-white flex items-center justify-center text-xs font-bold text-teal-700">🍎</span>
              <span className="w-8 h-8 rounded-full bg-rose-100 border-2 border-white flex items-center justify-center text-xs font-bold text-rose-700">🏡</span>
              <span className="w-8 h-8 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center text-xs font-bold text-amber-700">🏫</span>
            </div>
            <div className="text-xs font-semibold text-slate-500">
              <span className="text-slate-800 font-bold block">1,200+ Educators & Counselors</span>
              Ready to pioneer SpeakUp in local districts
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Side: Bento grid imagery representing friendship, overcoming exclusion and bullying */}
        <motion.div
          data-layer-name="hero.visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 w-full h-[400px] sm:h-[520px] lg:h-[580px] select-none pointer-events-auto mt-8 lg:mt-0 mb-16 lg:mb-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              data-layer-name="hero.card-1"
              className="relative rounded-[24px] overflow-hidden shadow-2xl border-4 border-white bg-white min-h-[220px]"
            >
              <img
                src="/src/assets/images/combating_exclusion_1779994582862.png"
                alt="Peers reaching out with warmth to support isolated pupil"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              data-layer-name="hero.card-2"
              className="relative rounded-[28px] overflow-hidden shadow-2xl border-4 border-white bg-white min-h-[220px]"
            >
              <img
                src="/src/assets/images/active_counseling_peers_1779994835970.png"
                alt="Supportive high school peers talking happily with general safety counselor"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              data-layer-name="hero.card-3"
              className="relative rounded-[26px] overflow-hidden shadow-2xl border-4 border-white bg-white min-h-[220px] md:col-span-1"
            >
              <img
                src="/src/assets/images/group_inclusion_1779994605284.png"
                alt="Teenagers enjoying real high school friendship and inclusion"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow border border-slate-100/50 flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span className="text-[10px] font-bold text-slate-700">100% Secure Support</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
