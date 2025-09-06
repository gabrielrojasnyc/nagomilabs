import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    // focus the close button for accessibility when opened
    const t = setTimeout(() => closeBtnRef.current?.focus(), 0)
    return () => {
      document.removeEventListener('keydown', handleKey)
      clearTimeout(t)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="about-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.currentTarget === e.target) onClose()
          }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative z-10 w-full max-w-xl rounded-2xl p-6 sm:p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)'
            }}
            initial={{ y: 20, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 10, scale: 0.98, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id="about-title" className="font-['Gill_Sans'] text-2xl sm:text-3xl font-bold text-[#e47168]">
                About Nagomi Labs
              </h2>
              <button
                ref={closeBtnRef}
                onClick={onClose}
                aria-label="Close"
                className="rounded-full px-3 py-1 text-[#0a253a] bg-[#f8d0c9] hover:bg-[#f3c0b8] transition-colors"
              >
                ×
              </button>
            </div>

            <div className="mt-4 space-y-4 text-[#e9ddc3] font-['Gill_Sans'] leading-relaxed">
              <p>
                Ever watched a whole afternoon vanish into <span className="font-semibold">certifying a release</span>? Screenshots,
                evidence, regression runs, version diffs… and then someone says, “one more pass.” We’ve been there.
              </p>
              <p>
                That’s why we built <span className="font-semibold">AI Agents</span> that love the mundane hours you don’t.
                They run checks, verify settings, flag payroll issues, guard privacy, gather evidence, and package it all into
                a clear <span className="font-semibold">HCM Release Certification</span> you can trust.
              </p>
              <p>
                Think of them as calm coordinators behind the scenes: they keep work moving, catch issues before they reach
                employees, and hand you a ready‑to‑sign certification report. You focus on people and decisions; they handle
                the steps and the proof.
              </p>
              <p>
                Our take is simple: when agents handle the busywork, HR teams get back to meaningful work—partnering with the
                business, supporting people, and yes, enjoying life outside of go‑live week.
              </p>
              <p>
                We call it <span className="font-semibold text-[#f8d0c9]">HCM Harmony</span>. Fewer late nights. Faster sign‑offs.
                Happier teams. If that sounds like your vibe, pull up a chair—let’s make release week feel like a good playlist. 🎼
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="font-['Gill_Sans'] rounded-lg border border-[#e9ddc3] px-4 py-2 text-[#e9ddc3] hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
