'use client'

import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { Suspense } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const variants: Variants = {
    initial: {
      rotateY: -90,
      opacity: 0,
      x: 30,
      filter: 'blur(2px)'
    },
    enter: {
      rotateY: 0,
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: 'easeInOut' }
    },
    exit: {
      rotateY: 90,
      opacity: 0,
      x: -30,
      filter: 'blur(2px)',
      transition: { duration: 0.5, ease: 'easeInOut' }
    }
  }

  return (
    <div className="[perspective:1200px]">
      <AnimatePresence mode="wait" initial={true}>
        <Suspense>
          <motion.div
            key={pathname}
            className="[transform-style:preserve-3d] will-change-transform"
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {children}
          </motion.div>
        </Suspense>
      </AnimatePresence>
    </div>
  )
} 