'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react';

export function Modal({ open, onClose, children, ariaLabel }: { open: boolean; onClose: () => void; children: React.ReactNode; ariaLabel?: string }) {
  const [mounted, setMounted] = useState(false)
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setMounted(true)
    setPortalEl(document.body)
  }, [])

  useEffect(() => {
    if (!open || !mounted) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose, mounted])

  if (!mounted || !portalEl) return null

  return createPortal(
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm pointer-events-auto"
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={ariaLabel}
                className="relative w-full max-w-4xl rounded-xl border border-[#0ff] bg-[#002121] shadow-2xl pointer-events-auto"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.98 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={onClose} className="absolute top-3 right-3 rounded-md px-2 py-1 text-xs text-[#0ff] bg-[#0ff]/5 hover:bg-[#0ff]/10 cursor-pointer"><X /></button>
                {children}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>,
    portalEl
  )
} 