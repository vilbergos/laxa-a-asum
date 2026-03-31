import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CaretLeft, CaretRight } from '@phosphor-icons/react'
import { FadeUp } from '../ui/FadeUp'

const categories = ['The River', 'The Lodge', 'The Fishing']

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop', category: 'The River' },
  { id: 2, src: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?q=80&w=800&auto=format&fit=crop', category: 'The River' },
  { id: 3, src: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=800&auto=format&fit=crop', category: 'The Fishing' },
  { id: 4, src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop', category: 'The Fishing' },
  { id: 5, src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop', category: 'The Lodge' },
  { id: 6, src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop', category: 'The River' },
  { id: 7, src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop', category: 'The Lodge' },
  { id: 8, src: 'https://images.unsplash.com/photo-1548425588-c1c6bb7d1c53?q=80&w=800&auto=format&fit=crop', category: 'The Fishing' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('The River')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIdx, setCurrentImageIdx] = useState(0)

  const filteredImages = images.filter(img => img.category === activeFilter)

  const openLightbox = (index) => {
    setCurrentImageIdx(index)
    setLightboxOpen(true)
  }

  const nextSlide = () => {
    setCurrentImageIdx((prev) => (prev + 1) % filteredImages.length)
  }

  const prevSlide = () => {
    setCurrentImageIdx((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  return (
    <section id="gallery" className="py-24 md:py-32 bg-stone-deep text-parchment relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <div className="text-taupe font-display tracking-[0.2em] text-sm mb-6 uppercase">06 / Gallery</div>
              <h2 className="text-4xl md:text-5xl font-display text-bone leading-tight">
                Life on the <i>River</i>
              </h2>
            </div>
            
            {/* Filters */}
            <div className="flex gap-6 border-b border-stone-warm pb-2 overflow-x-auto scrollbar-none w-full md:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-xs font-semibold tracking-widest transition-colors whitespace-nowrap pb-2 outline-none uppercase ${
                    activeFilter === cat ? 'text-ember border-b border-ember' : 'text-taupe hover:text-bone'
                  }`}
                  style={{ marginBottom: '-3px' }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Masonry-style Grid */}
        <motion.div 
          className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden cursor-pointer group break-inside-avoid"
                onClick={() => openLightbox(idx)}
              >
                <img 
                  src={img.src} 
                  alt="Gallery" 
                  className="w-full h-auto editorial-filter shadow-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-deep/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-bone tracking-[0.2em] text-xs font-semibold uppercase">View</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-stone-deep/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
          >
            <button className="absolute top-6 right-6 text-bone text-3xl hover:text-ember transition-colors z-10" onClick={() => setLightboxOpen(false)}>
              <X />
            </button>
            
            <button className="absolute left-6 top-1/2 -translate-y-1/2 text-bone text-4xl hover:text-ember transition-colors z-10" onClick={prevSlide}>
              <CaretLeft />
            </button>
            <button className="absolute right-6 top-1/2 -translate-y-1/2 text-bone text-4xl hover:text-ember transition-colors z-10" onClick={nextSlide}>
              <CaretRight />
            </button>

            <motion.img
              key={currentImageIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              src={filteredImages[currentImageIdx].src}
              alt="Gallery overlay"
              className="max-h-full max-w-full object-contain"
            />
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-taupe tracking-widest text-xs uppercase font-semibold">
              {currentImageIdx + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
