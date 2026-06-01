import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, EyeOff, Radio, Users, AlertOctagon, FileLock2, Lock,
  Camera, MapPin, Clock, Calendar, CheckSquare, Send, Heart, BellRing, Sparkles, AlertCircle, Star
} from "lucide-react";

export default function AppMockups() {
  const [activeScreen, setActiveScreen] = useState("report");
  
  // Simulated Reports logged in the phone's state
  const [reports, setReports] = useState<any[]>([]);
  const [newReport, setNewReport] = useState({
    category: "Cyberbullying",
    description: "",
    isAnonymous: true,
  });
  const [showConfetti, setShowConfetti] = useState(false);

  // Evidence uploading simulation
  const [mockFiles, setMockFiles] = useState<{name: string, size: string, locked: boolean}[]>([]);

  // Breathing simulation state
  const [breathState, setBreathState] = useState("Breathe In");
  const [breathScale, setBreathScale] = useState(1);

  useEffect(() => {
    if (activeScreen === "safespace") {
      const interval = setInterval(() => {
        setBreathState((prev) => {
          if (prev === "Breathe In") {
            setBreathScale(1.35);
            return "Hold";
          } else if (prev === "Hold") {
            setBreathScale(0.85);
            return "Breathe Out";
          } else {
            setBreathScale(1);
            return "Breathe In";
          }
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [activeScreen]);

  const features = [
    {
      id: "report",
      title: "Anonymous Reporting",
      description: "Allow students to securely express their situation encumbered with fully counselor-vetted privacy protocols.",
      badge: "Student-Led",
      icon: EyeOff,
      color: "from-sky-100 to-sky-50 text-sky-600 border-sky-200",
    },
    {
      id: "evidence",
      title: "Upload Secure Evidence",
      description: "Quick-upload screenshot logs, text scripts, or audio. Formats are encrypted client-side immediately.",
      badge: "Encrypted",
      icon: FileLock2,
      color: "from-purple-100 to-purple-50 text-purple-600 border-purple-200",
    },
    {
      id: "tracking",
      title: "Incident Tracking",
      description: "Follow active report lifecycles with real-time comments from counselors. Always know what action is in play.",
      badge: "Real-Time Updates",
      icon: Radio,
      color: "from-blue-100 to-blue-50 text-blue-600 border-blue-200",
    },
    {
      id: "alerts",
      title: "Parent alertsCoordination",
      description: "Empower parents with soft status tips and well-being conversation guidelines to use safely at home.",
      badge: "Family Node",
      icon: Users,
      color: "from-rose-100 to-rose-50 text-rose-600 border-rose-200",
    },
    {
      id: "escalation",
      title: "Escalation Monitor",
      description: "Automated timers trigger warnings to school principals if reports go neglected or unattended for too long.",
      badge: "Principal Priority",
      icon: AlertOctagon,
      color: "from-amber-100 to-amber-50 text-amber-600 border-amber-200",
    },
    {
      id: "safespace",
      title: "Therapeutic Safe Space",
      description: "A calming student UI providing relaxation breathers, supportive resources, and trusted counseling numbers.",
      badge: "Mental Wellness",
      icon: Heart,
      color: "from-emerald-100 to-emerald-50 text-emerald-600 border-emerald-200",
    },
  ];

  const handleCreateReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReport.description) return;
    
    setShowConfetti(true);
    setReports([
      {
        id: Date.now(),
        category: newReport.category,
        description: newReport.description,
        isAnonymous: newReport.isAnonymous,
        timestamp: "Just Now",
        status: "Logged & Private",
      },
      ...reports
    ]);
    setTimeout(() => {
      setShowConfetti(false);
      setActiveScreen("tracking");
    }, 1200);
    setNewReport({ category: "Cyberbullying", description: "", isAnonymous: true });
  };

  const handleAddMockFile = (type: string) => {
    let name = "screenshot_vibecheck.png";
    let size = "1.4 MB";
    if (type === "chat") {
      name = "telegram_bullying_history.txt";
      size = "24 KB";
    } else if (type === "audio") {
      name = "vocal_harassment_hallway.m4a";
      size = "4.2 MB";
    }

    setMockFiles((prev) => [
      ...prev,
      { name, size, locked: true }
    ]);
  };

  return (
    <section data-layer-name="appmockups.section" id="mockups" className="py-20 md:py-28 bg-[#f8fafc] text-slate-800 relative z-10 select-none">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-xs tracking-wider uppercase mb-3.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Showcase</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Designed for Student Comfort
          </h2>
          <p className="text-base md:text-lg text-slate-500 mt-4 leading-relaxed">
            Click on any feature below to watch our live simulated smartphone app navigate screens in real time. Experience SpeakUp exactly as students do.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Features Column (Left side) */}
          <div data-layer-name="appmockups.features" className="lg:col-span-7 space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat) => {
                const FeatIcon = feat.icon;
                const isActive = activeScreen === feat.id;
                return (
                  <button
                    key={feat.id}
                    onClick={() => setActiveScreen(feat.id)}
                    className={`p-5 rounded-3xl border-2 text-left transition-all hover:scale-[1.01] cursor-pointer ${
                      isActive
                        ? "bg-white border-slate-900 shadow-lg text-slate-950"
                        : "bg-white/60 border-slate-100 hover:border-slate-200 hover:bg-white text-slate-600"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className={`p-2.5 rounded-2xl border bg-gradient-to-br ${feat.color}`}>
                        <FeatIcon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        isActive ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500"
                      }`}>
                        {feat.badge}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-sm text-slate-800 tracking-tight mb-1.5">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                      {feat.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Smartphone Simulator Column (Right side) */}
          <div className="lg:col-span-5 flex justify-center">
            <div data-layer-name="appmockups.phone-container" className="relative w-full max-w-[340px]">
              
              {/* Outer Phone Bezel Frame */}
              <div data-layer-name="appmockups.phone-frame" className="relative mx-auto w-[310px] h-[610px] bg-slate-900 rounded-[50px] p-3.5 shadow-2xl border-4 border-slate-800 font-sans">
                
                {/* Dynamic Camera Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-full z-30 flex items-center justify-between px-4">
                  <span className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
                  <span className="w-[50px] h-1.5 bg-slate-800 rounded-full" />
                  <div className="flex items-center gap-1">
                    <span className="text-[8px] text-slate-500 font-bold">4G</span>
                    <span className="w-2 h-1.5 bg-slate-500 rounded-sm" />
                  </div>
                </div>

                {/* Inner Screen Canvas */}
                <div data-layer-name="appmockups.screen-canvas" className="relative w-full h-full bg-[#f8fafc] rounded-[38px] overflow-hidden flex flex-col pt-8">
                  
                  {/* Phone Header Banner */}
                  <div className="px-4 py-2 flex justify-between items-center bg-white border-b border-slate-100 shadow-sm z-10 flex-shrink-0">
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                      <span className="font-extrabold text-xs text-slate-800">SpeakUp SafeApp</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[9px] font-bold text-slate-400 tracking-wider">SECURE NODE</span>
                    </div>
                  </div>

                  {/* Virtual Screen Content Stream with AnimatePresence */}
                  <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-between text-left">
                    <AnimatePresence mode="wait">
                      
                      {/* Active Screen Case: Report Incident Form */}
                      {activeScreen === "report" && (
                        <motion.div
                          key="form"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: -10 }}
                          className="space-y-3.5 flex flex-col justify-between h-full"
                        >
                          <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">New Anonymous Report</h4>
                            <p className="text-[10px] text-slate-400 leading-snug">Rest assured, your counselor won't share your name with classmates.</p>
                            
                            <form onSubmit={handleCreateReport} className="mt-3 space-y-2.5">
                              <div>
                                <label className="block text-[8px] font-bold text-slate-400 uppercase mb-1">What and where happened?</label>
                                <select 
                                  value={newReport.category}
                                  onChange={(e) => setNewReport({...newReport, category: e.target.value})}
                                  className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none"
                                >
                                  <option value="Cyberbullying">Cyberbullying (chats/posts)</option>
                                  <option value="Hallway Bullying">Hallway emotional aggression</option>
                                  <option value="School Bus">Incident on school transport</option>
                                  <option value="Exclusion">Social systemic exclusion</option>
                                </select>
                              </div>

                              <div>
                                <label className="block text-[8px] font-bold text-slate-400 uppercase mb-1">Incident Notes</label>
                                <textarea
                                  value={newReport.description}
                                  onChange={(e) => setNewReport({...newReport, description: e.target.value})}
                                  placeholder="E.g., someone keeps posting mock photos under the classroom group tag..."
                                  rows={3}
                                  required
                                  className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 resize-none focus:outline-none"
                                />
                              </div>

                              <div className="flex items-center justify-between bg-slate-100/50 p-2 rounded-xl">
                                <div className="flex flex-col">
                                  <span className="text-[9px] font-bold text-slate-600">Keep Me Anonymous</span>
                                  <span className="text-[7px] text-slate-400">Guarantees your ID stays invisible</span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => setNewReport({...newReport, isAnonymous: !newReport.isAnonymous})}
                                  className={`w-7 h-4 rounded-full p-0.5 transition-colors cursor-pointer ${
                                    newReport.isAnonymous ? "bg-green-500" : "bg-slate-300"
                                  }`}
                                >
                                  <div className={`w-3 h-3 rounded-full bg-white transition-all ${
                                    newReport.isAnonymous ? "translate-x-3" : "translate-x-0"
                                  }`} />
                                </button>
                              </div>

                              <button
                                type="submit"
                                className="w-full py-2 bg-slate-900 text-white font-bold text-xs rounded-xl shadow-sm hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-center gap-1"
                              >
                                <span>Submit Report</span>
                                <Send className="w-3 h-3" />
                              </button>
                            </form>
                          </div>

                          {showConfetti && (
                            <div className="absolute inset-0 bg-white/95 rounded-2xl flex flex-col items-center justify-center p-4 text-center z-10 shadow-lg">
                              <Star className="w-8 h-8 text-amber-500 fill-amber-300 animate-spin mb-2" />
                              <span className="text-xs font-extrabold text-slate-800">Report Transmitted Safely</span>
                              <p className="text-[9px] text-slate-400 mt-1">Routing details silently on protected channels...</p>
                            </div>
                          )}
                        </motion.div>
                      )}

                      {/* Active Screen Case: Upload Evidence */}
                      {activeScreen === "evidence" && (
                        <motion.div
                          key="evidence-screen"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: -10 }}
                          className="space-y-3.5 h-full flex flex-col justify-between"
                        >
                          <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Evidence Locker</h4>
                            <p className="text-[10px] text-slate-400 leading-snug">Encrypt chats or audio snippets locally before counselors inspect them.</p>

                            <div className="grid grid-cols-3 gap-1.5 mt-3">
                              <button
                                onClick={() => handleAddMockFile("screenshot")}
                                className="p-2 border border-slate-100 bg-white hover:border-slate-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors"
                              >
                                <Camera className="w-4 h-4 text-sky-500 mb-1" />
                                <span className="text-[8px] font-bold text-slate-500">Screenshot</span>
                              </button>
                              <button
                                onClick={() => handleAddMockFile("chat")}
                                className="p-2 border border-slate-100 bg-white hover:border-slate-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors"
                              >
                                <svg className="w-4 h-4 text-purple-500 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <span className="text-[8px] font-bold text-slate-500">Chat History</span>
                              </button>
                              <button
                                onClick={() => handleAddMockFile("audio")}
                                className="p-2 border border-slate-100 bg-white hover:border-slate-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors"
                              >
                                <svg className="w-4 h-4 text-rose-500 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                                <span className="text-[8px] font-bold text-slate-500">Audio Clip</span>
                              </button>
                            </div>

                            <div className="mt-4 space-y-1.5 max-h-[140px] overflow-y-auto">
                              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Encrypted Files ({mockFiles.length})</span>
                              {mockFiles.length === 0 ? (
                                <div className="border border-dashed border-slate-200 rounded-xl p-4 text-center bg-white">
                                  <p className="text-[9px] text-slate-400">No evidence loaded. Tap an icon above to upload encrypted mock templates.</p>
                                </div>
                              ) : (
                                mockFiles.map((file, idx) => (
                                  <div key={idx} className="p-2 bg-white rounded-xl border border-slate-100 flex items-center justify-between">
                                    <div className="flex items-center gap-1.5 overflow-hidden">
                                      <Lock className="w-3 h-3 text-purple-400 flex-shrink-0" />
                                      <span className="text-[8px] text-slate-600 truncate font-semibold">{file.name}</span>
                                    </div>
                                    <span className="text-[7px] text-slate-400 font-bold">{file.size}</span>
                                  </div>
                                ))
                              )}
                            </div>
                          </div>

                          <div className="bg-purple-50 p-2.5 rounded-xl border border-purple-100 flex gap-2">
                            <Clock className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                            <div className="text-left">
                              <span className="text-[9px] font-extrabold text-purple-900 block uppercase leading-none">Security Hash Added</span>
                              <p className="text-[7px] text-purple-700 leading-snug">Incidents automatic date-stamp securely to prevent alterations.</p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Active Screen Case: Incident Tracking */}
                      {activeScreen === "tracking" && (
                        <motion.div
                          key="tracking-screen"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: -10 }}
                          className="space-y-3 h-full flex flex-col justify-between"
                        >
                          <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Incident Tracker</h4>
                            <p className="text-[10px] text-slate-400 leading-snug">Track counselor progress anonymously.</p>

                            <div className="space-y-2 mt-3.5">
                              {[
                                { title: "Report Broadcasted", time: "10:30 AM", active: true, done: true },
                                { title: "Reviewed by Lead Counselor", time: "11:15 AM", active: true, done: true },
                                { title: "Collaborating with Parents", time: "Pending", active: true, done: false },
                                { title: "Safe Resolution Vetted", time: "Upcoming", active: false, done: false },
                              ].map((step, idx) => (
                                <div key={idx} className="flex gap-2.5 items-start">
                                  <div className="flex flex-col items-center">
                                    <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[7px] font-bold ${
                                      step.done ? "bg-green-500 text-white" : step.active ? "bg-blue-100 text-blue-600 animate-pulse border border-blue-300" : "bg-slate-100 text-slate-400"
                                    }`}>
                                      {step.done ? "✓" : idx+1}
                                    </div>
                                    {idx !== 3 && <div className={`w-0.5 h-4 my-0.5 ${step.done ? "bg-green-300" : "bg-slate-200"}`} />}
                                  </div>
                                  <div className="text-left select-none">
                                    <span className={`text-[9px] font-bold block ${step.active ? "text-slate-800" : "text-slate-400"}`}>{step.title}</span>
                                    <span className="text-[6.5px] text-slate-400 block -mt-0.5">{step.time}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="p-2.5 bg-blue-50/50 rounded-xl border border-blue-50">
                            <p className="text-[8px] text-blue-600 font-extrabold uppercase mb-1 flex items-center gap-1">
                              <BellRing className="w-2.5 h-2.5" />
                              Latest Advisor Comment
                            </p>
                            <p className="text-[8.5px] text-slate-500 italic leading-snug">
                              "We've contacted the administrative lead for period three math class to quietly oversee cafeteria seating. Sleep well, you are safe."
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {/* Active Screen Case: Parent Notifications */}
                      {activeScreen === "alerts" && (
                        <motion.div
                          key="parent-alerts"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: -10 }}
                          className="space-y-3.5 h-full flex flex-col justify-between"
                        >
                          <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Parent Nest System</h4>
                            <p className="text-[10px] text-slate-400 leading-snug">How parents receive quiet wellness status reports.</p>

                            <div className="p-3 bg-white border border-slate-150 rounded-2xl shadow-sm mt-3.5 space-y-2">
                              <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-rose-500" />
                                <span className="text-[9px] font-extrabold text-slate-800 uppercase tracking-wider">Guardian Alert Log</span>
                              </div>
                              <p className="text-[9px] text-slate-600 leading-snug">
                                "Your student's peer group safety index logged a neutral transition. Counselors handled a minor cafeteria concern successfully. No immediate emergency action requested."
                              </p>
                              <div className="bg-rose-50 p-2 rounded-xl text-[8px] text-rose-700 font-semibold leading-relaxed">
                                💡 <strong>Home tip:</strong> Ask your teenager about their favorites in Period 3 today instead of asking immediately about peer arguments. Focus on comfort.
                              </div>
                            </div>
                          </div>

                          <div className="p-3 bg-slate-900 text-white rounded-xl text-center">
                            <span className="text-[9px] font-extrabold text-rose-300 block uppercase tracking-widest mb-1">0% Alarm Intimidation</span>
                            <p className="text-[7.5px] text-slate-300 leading-relaxed">We focus on peaceful communication, avoiding stress-inducing notifications while keeping parents fully aligned with counselor actions.</p>
                          </div>
                        </motion.div>
                      )}

                      {/* Active Screen Case: Escalation Monitoring */}
                      {activeScreen === "escalation" && (
                        <motion.div
                          key="escalation-screen"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: -10 }}
                          className="space-y-3 h-full flex flex-col justify-between"
                        >
                          <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-[#d97706]">Escalation Watchdog</h4>
                            <p className="text-[10px] text-slate-400 leading-snug">Reports can never sit forgotten in folders. Safeguard locks guarantee eyes-on resolutions.</p>

                            <div className="p-3 bg-[#fffbeb] border border-[#fef3c7] rounded-xl text-left mt-3.5 space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-[9px] font-extrabold text-[#b45309] uppercase tracking-wider block">Unresolved Alarm Countdown</span>
                                <span className="text-[8px] font-bold bg-amber-500 text-white px-1.5 py-0.5 rounded-md">2.5Hrs Lag</span>
                              </div>
                              <div className="w-full bg-[#fcd34d]/30 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-amber-500 h-full w-[75%]" />
                              </div>
                              <p className="text-[8.5px] text-amber-900 leading-relaxed font-medium">
                                If the counselor does not input an action note within 2.5 hours, SpeakUp automatically escalates this report details directly to the School Principal and District Director.
                              </p>
                            </div>
                          </div>

                          <div className="p-2 bg-[#fef2f2] border border-[#fee2e2] rounded-xl flex gap-1.5">
                            <AlertCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                            <div className="text-left">
                              <span className="text-[8px] font-extrabold text-rose-800 block uppercase leading-none">Guaranteed Eyes-on Policy</span>
                              <p className="text-[7px] text-rose-600 leading-snug">We ensure no student represents safety concerns and walks away unheard.</p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Active Screen Case: Student-Friendly Interface / SafeSpace */}
                      {activeScreen === "safespace" && (
                        <motion.div
                          key="safespace-screen"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: -10 }}
                          className="space-y-4 h-full flex flex-col justify-between"
                        >
                          <div className="text-center flex flex-col items-center">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-emerald-600">Empathetic Safe Space</h4>
                            <p className="text-[10px] text-slate-400 leading-snug mb-4">Let's slow things down and breathe together.</p>

                            {/* Animated Breathing Bubble */}
                            <motion.div
                              animate={{ scale: breathScale }}
                              transition={{ duration: 2.8, ease: "easeInOut" }}
                              className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-teal-200 flex flex-col items-center justify-center text-center shadow-md relative"
                            >
                              <Heart className="w-5 h-5 text-emerald-600 fill-emerald-55" />
                              <span className="text-[8px] font-black text-emerald-800 uppercase tracking-wider block mt-1">{breathState}</span>
                            </motion.div>

                            <p className="text-[8.5px] text-slate-500 max-w-[200px] mt-4 leading-relaxed font-semibold">
                              Aligning your breathing loops lowers adrenaline and keeps you cool, making it easier to process situations with courage.
                            </p>
                          </div>

                          <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-100 text-center">
                            <span className="text-[8px] font-extrabold text-emerald-800 block uppercase tracking-widest mb-0.5">Need immediate comfort?</span>
                            <span className="text-[10px] font-bold text-emerald-600">Tap Hotlines: 1-800-422-4453</span>
                          </div>
                        </motion.div>
                      )}

                    </AnimatePresence>
                  </div>

                  {/* Virtual Bottom Navigation */}
                  <div className="p-3 bg-white border-t border-slate-100 flex justify-around items-center flex-shrink-0">
                    {[
                      { id: "report", label: "Report", emoji: "🎒" },
                      { id: "evidence", label: "Media", emoji: "📂" },
                      { id: "tracking", label: "Track", emoji: "🛰️" },
                      { id: "safespace", label: "Breathe", emoji: "🌱" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveScreen(tab.id)}
                        className="flex flex-col items-center justify-center cursor-pointer transition-all"
                      >
                        <span className="text-sm">{tab.emoji}</span>
                        <span className={`text-[7px] font-extrabold mt-0.5 uppercase tracking-wider ${
                          activeScreen === tab.id ? "text-slate-900 font-black" : "text-slate-400"
                        }`}>{tab.label}</span>
                      </button>
                    ))}
                  </div>

                </div>
              </div>
              
              {/* External Floating Note Indicator */}
              <div data-layer-name="appmockups.floating-note" className="absolute -top-12 -right-16 bg-gradient-to-r from-emerald-400 to-teal-500 text-white p-2.5 rounded-2xl text-left hidden sm:block shadow-md max-w-[130px]">
                <span className="text-[8px] font-extrabold uppercase tracking-widest block opacity-75">Demo feature</span>
                <span className="text-[10px] font-bold leading-tight block mt-0.5">Tap virtual bottom tabs below!</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
