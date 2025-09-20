'use client'

import { useState } from 'react'
import { SiteFrame } from './SiteFrame'
import { AnimatePresence, motion } from 'framer-motion'
import { redirect } from 'next/navigation';

function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`
          fixed md:relative inset-y-0 left-0 z-50 md:z-auto
          border-b md:border-b-0 md:border-r border-[color:var(--color-border)] 
          bg-[color:var(--color-muted)]/70 backdrop-blur-sm p-6 md:p-8
          w-80 md:w-auto
        `}
        initial={false}
        animate={{
          x: isOpen ? 0 : -320,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{ x: isOpen ? 0 : -320 }}
      >
        <div className="flex flex-col items-center text-center gap-4">
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="md:hidden absolute top-4 right-4 p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative w-28 h-28">
            <div className="ring-pulse anim-delay-0"></div>
            <div className="ring-pulse anim-delay-300"></div>
            <div className="ring-pulse anim-delay-600"></div>
            <div className="ring-pulse anim-delay-900"></div>
            <div className="absolute inset-0 rounded-full overflow-hidden ring-2 ring-[#0ff]/60">
              <img src="/profile_img.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <h1 className="text-xl font-semibold tracking-tight">Daud Mir</h1>
            <p className="text-[#0ff] text-xs uppercase tracking-wider mt-1">Software Engineer</p>
          </div>

          <p className="text-xs text-neutral-400">
            MERN Stack | React Native | Next.js | Nest.js | Node.js & TypeScript
          </p>

          <p className="text-sm text-neutral-300/90 leading-relaxed">
            Problem-solving focused engineer with 2+ years of experience, delivering clean, maintainable solutions on time and with clear communication you can trust.
          </p>

          <div className="pt-2">
            <button
              className="px-6 py-2 rounded-md bg-[#0ff] text-black border border-[#0ff] hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0ff]/60 flex items-center gap-2"
              type="button"
              onClick={() => redirect('https://www.upwork.com/freelancers/~011c6281fefdb34981')}
            >
              <img src="/upwork.png" alt="Upwork" className="h-5 w-auto" />
              <span>works with me</span>
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  )
}

function MobileMenuButton({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
      aria-label="Toggle menu"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  )
}

export function ResponsiveLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[320px_1fr]">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="min-h-screen flex flex-col">
        {/* Mobile Header */}
        <div className="md:hidden sticky top-0 z-30 bg-[color:var(--color-muted)]/60 backdrop-blur-sm border-b border-[color:var(--color-border)] px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold text-[#0ff]">Daud Mir</h1>
            <MobileMenuButton 
              onClick={() => setSidebarOpen(true)} 
              isOpen={sidebarOpen}
            />
          </div>
        </div>
        
        <SiteFrame />
      </div>
    </div>
  )
}
