'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0)

  const paginate = (direction: number) => {
    setIndex((prev) => (prev + direction + images.length) % images.length)
  }

  return (
    <div className="relative">
      <div className="aspect-[16/10] w-full overflow-hidden rounded-lg ring-1 ring-inset ring-[color:var(--color-border)] bg-black/50">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="Project image"
            className="h-full w-full object-fill"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x > 50) paginate(-1)
              else if (info.offset.x < -50) paginate(1)
            }}
          />
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <>
          <button onClick={() => paginate(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-md bg-[#002121] px-2 py-2 text-xs text-[#0ff] cursor-pointer"><ChevronLeft className='w-8 h-8'/></button>
          <button onClick={() => paginate(1)} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-[#002121] px-2 py-2 text-xs text-[#0ff] cursor-pointer"><ChevronRight className='w-8 h-8'/></button>

          <div className="mt-3 flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`h-1.5 w-1.5 rounded-full cursor-pointer ${i === index ? 'bg-[#0ff]' : 'bg-white/30'}`} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>
        </>
      )}
    </div>
  )
} 