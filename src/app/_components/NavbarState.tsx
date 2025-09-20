'use client'

import { motion } from 'framer-motion'

export type TabKey = 'portfolio' | 'skills' | 'education' | 'contactus'

const tabs: Array<{ key: TabKey; label: string }> = [
  { key: 'portfolio', label: 'Portfolio' },
  { key: 'skills', label: 'Skills' },
  { key: 'contactus', label: 'Contact Us' },
]

export function NavbarState({ active, onChange }: { active: TabKey; onChange: (k: TabKey) => void }) {
  return (
    <div className="relative flex gap-10 text-sm">
      {tabs.map((t) => {
        const isActive = active === t.key
        return (
          <div key={t.key} className="relative">
            {isActive && (
              <motion.div
                layoutId="active-tab-bg"
                className="absolute -inset-y-1 -inset-x-2 rounded-md"
                transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.6 }}
              />
            )}
            <button
              type="button"
              onClick={() => onChange(t.key)}
              className={`${isActive ? 'text-[#0ff] font-medium' : 'text-neutral-300 hover:text-[#0ff]'} relative z-10 inline-block px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50`}
              aria-current={isActive ? 'page' : undefined}
            >
              {t.label}
            </button>
            {isActive && (
              <motion.div
                layoutId="active-simple-underline"
                className="absolute left-1 right-1 -bottom-1 h-[2px] bg-[#0ff] rounded-full shadow-[0_0_8px_1px_rgba(0,255,255,0.6)]"
                transition={{ type: 'spring', stiffness: 600, damping: 40, mass: 0.6 }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
} 