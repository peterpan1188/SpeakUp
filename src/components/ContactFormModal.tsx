import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Heart, Sparkles, School, CheckCircle2, User, Mail, MessageSquare } from "lucide-react";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: string;
}

export default function ContactFormModal({ isOpen, onClose, initialRole = "student" }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    school: "",
    role: initialRole,
    interest: "pilot",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [savedProposals, setSavedProposals] = useState<any[]>(() => {
    const existing = localStorage.getItem("speakup_proposals");
    return existing ? JSON.parse(existing) : [];
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.school) {
      return;
    }
    setLoading(true);

    // Simulate sending proposal
    setTimeout(() => {
      const newProposal = {
        ...formData,
        id: Date.now().toString(),
        timestamp: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      };
      const updated = [newProposal, ...savedProposals];
      setSavedProposals(updated);
      localStorage.setItem("speakup_proposals", JSON.stringify(updated));
      setSubmitted(true);
      setLoading(false);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      school: "",
      role: "student",
      interest: "pilot",
      message: "",
    });
    setSubmitted(false);
  };

  const roleGradients: Record<string, string> = {
    student: "from-sky-400 to-blue-500",
    parent: "from-rose-400 to-amber-500",
    teacher: "from-purple-400 to-indigo-500",
    admin: "from-emerald-400 to-teal-500",
  };

  const roleReassurance: Record<string, string> = {
    student: "Thank you for peaking up, brave friend. Together, we are creating a cyber-safe and physically supportive school where every voice matter. You are not alone!",
    parent: "We completely appreciate your active care. We will connect with schools to introduce a quiet, empowering system where parents feel fully informed and confident.",
    teacher: "Educators are the bedrock of student safety. SpeakUp will provide teachers with intuitive, easy-to-manage portals to address concerns before they escalate.",
    admin: "School administrators deserve clear, actionable real-time tools. We are setting up customized school dashboards to streamline counselor-vetted reports instantly.",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div data-layer-name="contact.modal-root" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            data-layer-name="contact.backdrop"
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            id="talk-to-us-modal"
            data-layer-name="contact.modal"
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl z-10 font-sans border border-slate-100"
          >
            {/* Top custom accent banner based on role */}
            <div data-layer-name="contact.role-banner" className={`h-3 bg-gradient-to-r ${roleGradients[formData.role] || "from-sky-400 to-blue-500"} transition-all duration-300`} />

            {/* Close Button */}
            <button
              data-layer-name="contact.close-btn"
              onClick={onClose}
              className="absolute right-5 top-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors z-20"
              aria-label="Close modal"
              id="modal-close-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div data-layer-name="contact.form" className="p-6 md:p-8">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold text-xs tracking-wider uppercase mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Join the Movement</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight" id="modal-heading">
                    Let's Build Cooler, Safer Schools Together
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 mt-2">
                    Whether you would like to run a prototype, become an official counselor advisor, or invite SpeakUp to your school, we want to hear your voice!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Persona Selector Row */}
                  <div>
                    <label className="block text-xs font-bold text-slate-400 tracking-wide uppercase mb-2">
                      I am signing up as a:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: "student", label: "Student", emoji: "🎒" },
                        { id: "parent", label: "Parent", emoji: "🏡" },
                        { id: "teacher", label: "Teacher / Advisor", emoji: "🍎" },
                        { id: "admin", label: "Administrator", emoji: "🏫" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, role: item.id }))}
                          className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all cursor-pointer ${
                            formData.role === item.id
                              ? "bg-slate-50 border-slate-800 shadow-sm"
                              : "border-slate-100 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                          }`}
                        >
                          <span className="text-xl mb-1">{item.emoji}</span>
                          <span className="text-xs font-semibold text-slate-700">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name input */}
                    <div className="relative">
                      <label className="block text-xs font-bold text-slate-400 tracking-wide uppercase mb-1.5">
                        Your Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Alex Mercer"
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all text-slate-700"
                        />
                      </div>
                    </div>

                    {/* Email input */}
                    <div>
                      <label className="block text-xs font-bold text-slate-400 tracking-wide uppercase mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="alex@school.edu"
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all text-slate-700"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* School Organization */}
                    <div>
                      <label className="block text-xs font-bold text-slate-400 tracking-wide uppercase mb-1.5">
                        School / Academy Name
                      </label>
                      <div className="relative">
                        <School className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          name="school"
                          required
                          value={formData.school}
                          onChange={handleInputChange}
                          placeholder="Oakwood Academy"
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all text-slate-700"
                        />
                      </div>
                    </div>

                    {/* Proposal Type */}
                    <div>
                      <label className="block text-xs font-bold text-slate-400 tracking-wide uppercase mb-1.5">
                        Proposal Interest
                      </label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all text-slate-700"
                      >
                        <option value="pilot">Launch safe pilot program</option>
                        <option value="partnership">Sponsorship or partnership</option>
                        <option value="counselor">Join Counseling advisory panel</option>
                        <option value="newsletter">Keep me updated on launch</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-400 tracking-wide uppercase mb-1.5">
                      How can we connect? (Add notes/suggestions)
                    </label>
                    <div className="relative font-sans">
                      <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about yourself! E.g., 'We want to make reporting anonymous and easy for over 500 secondary school students next term...'"
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all text-slate-700 resize-none"
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-4 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-1/3 py-3 border border-slate-200 rounded-2xl font-semibold text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-all text-sm cursor-pointer text-center"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-2/3 py-3 rounded-2xl font-bold text-white shadow-md text-sm transition-all focus:outline-none relative overflow-hidden flex items-center justify-center gap-2 cursor-pointer bg-slate-900 hover:bg-slate-800`}
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>Routing voice...</span>
                        </div>
                      ) : (
                        <>
                          <span>Submit Proposal</span>
                          <Send className="w-4 h-4 ml-0.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success Panel */
              <div data-layer-name="contact.success" className="p-8 text-center flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0.5, rotate: -20 }}
                  animate={{ scale: [1.2, 1], rotate: 0 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white mb-6 shadow-md"
                >
                  <CheckCircle2 className="w-8 h-8" />
                </motion.div>

                <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight" id="success-heading">
                  Awesome representation, {formData.name}!
                </h3>
                
                {/* Simulated Adaptive Response Card */}
                <div className="my-6 max-w-md bg-gradient-to-br from-slate-50 to-blue-50/20 p-5 rounded-2xl border border-blue-50 relative">
                  <Heart className="absolute -top-3.5 -right-3.5 w-8 h-8 text-rose-400 fill-rose-100 animate-pulse" />
                  <p className="text-sm font-medium text-blue-600 text-left uppercase tracking-wider mb-2">
                    Custom Advisor Memo ({formData.role})
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600 text-left">
                    "{roleReassurance[formData.role] || roleReassurance.student}"
                  </p>
                </div>

                <p className="text-sm text-slate-500 max-w-sm mb-6">
                  We've successfully logged your request for <strong className="text-slate-800">{formData.school}</strong> under our community priority board. A student well-being strategist will reach out to <strong className="text-slate-800">{formData.email}</strong> dynamically within 1 business day.
                </p>

                <button
                  onClick={() => {
                    resetForm();
                    onClose();
                  }}
                  className="px-8 py-3 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-md text-sm cursor-pointer"
                >
                  Return to Home
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
