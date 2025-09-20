'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const links = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/skills', label: 'Skills' },
  { href: '/education', label: 'Education' },
  { href: '/contactus', label: 'Contact Us' },
]

export function Navbar() {
  const pathname = usePathname()
  const [activeHref, setActiveHref] = useState(pathname)

  useEffect(() => {
    setActiveHref(pathname)
  }, [pathname])

  return (
    <div className="relative flex gap-2 text-sm">
      {links.map((l) => {
        const isActive = activeHref === l.href
        return (
          <div key={l.href} className="relative">
            {isActive && (
              <motion.div
                layoutId="active-tab-bg"
                className="absolute -inset-y-1 -inset-x-2 rounded-md bg-[#0ff]/10 border border-[#0ff]/30 shadow-[0_0_12px_rgba(0,255,255,0.35)]"
                transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.6 }}
              />
            )}
            <Link
              href={l.href}
              onClick={() => setActiveHref(l.href)}
              className={`${isActive ? 'text-[#0ff] font-medium' : 'text-neutral-300 hover:text-[#0ff]'} relative z-10 inline-block px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50`}
              aria-current={isActive ? 'page' : undefined}
            >
              {l.label}
            </Link>
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