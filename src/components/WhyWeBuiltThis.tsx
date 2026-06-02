import React, { useState } from "react";
import { motion } from "motion/react";
import { Quote, AlertCircle, Heart, Info, ShieldCheck, HelpCircle, Activity } from "lucide-react";

function AIImagePlaceholder({ label, variant, src }: { label: string; variant: number; src?: string }) {
  return (
    <div data-layer-name={`why.ai-image-${variant + 1}`} className="relative w-full h-full overflow-hidden rounded-3xl bg-slate-100 border border-slate-200 shadow-lg">
      {src ? (
        <>
          <img
            src={src}
            alt={label}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover select-none"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-3xl bg-white/90 backdrop-blur-sm px-3 py-2 text-center shadow-sm">
            <p className="text-sm font-bold text-slate-900">{label}</p>
          </div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-white/20" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3 px-4 text-center">
            <span className="text-5xl">🤖</span>
            <div>
              <p className="text-sm font-bold text-slate-900">{label}</p>
              <p className="text-[11px] text-slate-600">AI-generated placeholder</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function WhyWeBuiltThis() {
  const [studentCount, setStudentCount] = useState(500);

  const stats = [
    {
      id: "stat1",
      value: "22%",
      label: "Students Engaged",
      accentColor: "text-rose-500 bg-rose-50 border-rose-100",
      description: "Of secondary students report being actively bullied during the current academic term.",
    },
    {
      id: "stat2",
      value: "160K+",
      label: "Missed School Days",
      accentColor: "text-amber-500 bg-amber-50 border-amber-100",
      description: "Each day, students skip class worldwide due to fear or anxiety of peer aggression.",
    },
    {
      id: "stat3",
      value: "64%",
      label: "Silent Struggles",
      accentColor: "text-sky-500 bg-sky-50 border-sky-100",
      description: "Of victims never report the incidents to any teacher, counselor, or parent.",
    },
    {
      id: "stat4",
      value: "24 Hrs",
      label: "Average Response",
      accentColor: "text-emerald-500 bg-emerald-55/10 border-emerald-100",
      description: "Vetted resolution timeline targeting active pilot schools running SpeakUp portals.",
    },
  ];

  // Helper calculation formulas for the interactive wellness indicator
  const silentlyStruggling = Math.round(studentCount * 0.20);
  const potentialReportsLogged = Math.round(studentCount * 0.08); 
  const resolutionSpeedup = "92% Faster";

  return (
    <section id="why-speakup" className="py-20 md:py-28 bg-white overflow-hidden text-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-500 font-bold text-xs tracking-wider uppercase mb-3.5">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Understanding The Purpose</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why We Built SpeakUp
          </h2>
          <p className="text-base md:text-lg text-slate-500 mt-4 leading-relaxed">
            Emotional trauma, classroom fear, and silent struggles shouldn't define school memory. We designed SpeakUp to bridge the communication gap between students and support.
          </p>
        </div>

        {/* Story & Illustration Split Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Story Side */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="text-2xl md:text-3.5xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Quiet Incident Bullying Affects Confidence, Well-Being, and Success.
            </h3>
            
            <p className="text-sm md:text-base leading-relaxed text-slate-500">
              Bullying is not just a rite of passage—it impairs mental wellness, disrupts learning, and leads to chronic absenteeism. When students stop attending school because they feel unsafe, they carry secondary emotional burdens for a lifetime.
            </p>

            <blockquote className="border-l-4 border-sky-400 pl-4 py-1 italic text-slate-600 bg-sky-50/50 rounded-r-2xl pr-3.5 text-sm">
              "We noticed that many incidents were left completely unresolved because students feared social backlash or felt that reporting wouldn't result in helpful counseling action."
              <span className="block font-bold text-xs text-sky-600 not-italic uppercase mt-2 tracking-wide">— Clara Vance, High School Counselor & Partner</span>
            </blockquote>

            <p className="text-sm md:text-base leading-relaxed text-slate-500">
              SpeakUp introduces a modern, empathetic route. By removing intimidation and adding counselor-vetted workflows, we make it safer for students to seek assistance, and faster for administrators to provide resolution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {[
                { title: "Empathetic Focus", desc: "No punitive finger-pointing, focus is on mental recovery" },
                { title: "Connected Support", desc: "Coordinates parents, teachers, and school coaches" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">{item.title}</h4>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Graphic Side */}
          <div className="lg:col-span-6">
            <div className="relative p-2.5 rounded-[36px] bg-sky-50/60 border border-slate-100 shadow-xl overflow-hidden aspect-4/3">
              <div className="w-full h-full grid grid-cols-4 grid-rows-3 gap-2 rounded-[28px] overflow-hidden">
                <div className="col-span-2 row-span-3">
                  <AIImagePlaceholder
                    label="Student Working at Laptop"
                    variant={0}
                    src="/src/assets/images/student_laptop_1779994240612.png"
                  />
                </div>

                <div className="col-span-2 row-span-1">
                  <AIImagePlaceholder
                    label="Counseling Conversation"
                    variant={1}
                    src="/src/assets/images/active_counseling_peers_1779994835970.png"
                  />
                </div>

                <div className="col-span-2 row-span-1">
                  <AIImagePlaceholder
                    label="Campus Peer Support"
                    variant={2}
                    src="/src/assets/images/campus_peers_1779994199375.png"
                  />
                </div>

                <div className="col-span-2 row-span-1">
                  <AIImagePlaceholder
                    label="School Counseling Team"
                    variant={3}
                    src="/src/assets/images/educators_team_1779994220966.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistic Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-slate-50/50 border border-slate-100 hover:border-slate-200 hover:bg-white transition-all text-left"
            >
              <div className={`inline-flex px-3.5 py-1.5 rounded-full font-extrabold text-2xl tracking-tight mb-4 border ${stat.accentColor}`}>
                {stat.value}
              </div>
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
                {stat.label}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Well-being Impact Estimator */}
        <div className="p-6 md:p-8 rounded-3xl bg-linear-to-br from-slate-900 to-indigo-950 text-white text-left relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Estimator Form */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 font-semibold text-xs tracking-wider uppercase">
                <Activity className="w-3.5 h-3.5" />
                <span>Impact Estimator</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Simulate School Wellness Returns
              </h3>
              <p className="text-xs md:text-sm text-slate-300 max-w-lg leading-relaxed">
                Drag the slider to input the size of your class, academy, or school district. We'll automatically estimate potential safe outreach connections unlocked through SpeakUp.
              </p>

              <div className="pt-4 pb-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">School Size:</span>
                  <span className="text-lg font-extrabold text-sky-400">{studentCount} Students</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="50"
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  id="student-count-slider"
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400 focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1.5 font-semibold">
                  <span>50 (Preschool/Small Prep)</span>
                  <span>1000 (Secondary School)</span>
                  <span>2000 (Large District Academy)</span>
                </div>
              </div>
            </div>

            {/* Simulated Return Metrics */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <span className="text-[10px] font-bold text-rose-300 uppercase tracking-wider block mb-2">Silent Victims Helped</span>
                <span className="text-3xl font-black text-rose-400 md:text-4xl">{silentlyStruggling}</span>
                <span className="text-[10px] text-slate-400 mt-3 leading-tight block font-medium">Potential students who stop suffering silently.</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider block mb-2">Vetted Reports Handled</span>
                <span className="text-3xl font-black text-sky-400 md:text-4xl">~{potentialReportsLogged}</span>
                <span className="text-[10px] text-slate-400 mt-3 leading-tight block font-medium">Safe Counselor alerts resolved before escalation.</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider block mb-2">Counseling Speedup</span>
                <span className="text-3xl font-black text-emerald-400 md:text-4xl">{resolutionSpeedup}</span>
                <span className="text-[10px] text-slate-400 mt-3 leading-tight block font-medium">Estimated drop in standard manual report lag.</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
