import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CaretLeft, CaretRight } from '@phosphor-icons/react'
import { FadeUp } from '../ui/FadeUp'

const categories = ['The River', 'The Lodge', 'The Fishing']

const CL = 'https://res.cloudinary.com/dyarmf7v1/image/upload'
const thumb = (id) => `${CL}/w_800,h_450,c_fill,q_auto,f_auto/${id}`
const full  = (id) => `${CL}/q_auto,f_auto/${id}`

const images = [
  // The Fishing
  { id: 1,  thumb: thumb('v1774978908/the-lodge_dvr2qg.jpg'),        src: full('v1774978908/the-lodge_dvr2qg.jpg'),        category: 'The Fishing' },
  { id: 2,  thumb: thumb('v1774978875/Caught_1_jzulb3.jpg'),         src: full('v1774978875/Caught_1_jzulb3.jpg'),         category: 'The Fishing' },
  { id: 3,  thumb: thumb('v1774978875/Fishing_nqioji.jpg'),           src: full('v1774978875/Fishing_nqioji.jpg'),           category: 'The Fishing' },
  { id: 4,  thumb: thumb('v1774978874/Dog_1_dvvs6e.jpg'),             src: full('v1774978874/Dog_1_dvvs6e.jpg'),             category: 'The Fishing' },
  { id: 5,  thumb: thumb('v1774978874/Dog_qm3nqp.jpg'),               src: full('v1774978874/Dog_qm3nqp.jpg'),               category: 'The Fishing' },
  { id: 6,  thumb: thumb('v1774978874/Lax_tyilvs.jpg'),               src: full('v1774978874/Lax_tyilvs.jpg'),               category: 'The Fishing' },
  { id: 7,  thumb: thumb('v1774978874/Fishing_1_ypf48s.jpg'),         src: full('v1774978874/Fishing_1_ypf48s.jpg'),         category: 'The Fishing' },
  { id: 8,  thumb: thumb('v1774978874/Fishing_2_oq1nvn.jpg'),         src: full('v1774978874/Fishing_2_oq1nvn.jpg'),         category: 'The Fishing' },
  // The Lodge
  { id: 9,  thumb: thumb('v1774978909/Facebook_Image_zwh9yn.jpg'),    src: full('v1774978909/Facebook_Image_zwh9yn.jpg'),    category: 'The Lodge' },
  { id: 10, thumb: thumb('v1774978908/Accessories_from_Asum_xpl0uu.jpg'), src: full('v1774978908/Accessories_from_Asum_xpl0uu.jpg'), category: 'The Lodge' },
  { id: 11, thumb: thumb('v1774978908/Desert_1_dylnjp.jpg'),           src: full('v1774978908/Desert_1_dylnjp.jpg'),           category: 'The Lodge' },
  { id: 12, thumb: thumb('v1774978908/Desert_2.0_ojtfdy.jpg'),         src: full('v1774978908/Desert_2.0_ojtfdy.jpg'),         category: 'The Lodge' },
  { id: 13, thumb: thumb('v1775738940/Asum_4_Forwarded_Image_uqrzy6.jpg'),                               src: full('v1775738940/Asum_4_Forwarded_Image_uqrzy6.jpg'),                               category: 'The Lodge' },
  { id: 14, thumb: thumb('v1775738940/A%CC%81sum_4_Forwarded_Image_hfrqfk.jpg'),                        src: full('v1775738940/A%CC%81sum_4_Forwarded_Image_hfrqfk.jpg'),                        category: 'The Lodge' },
  { id: 15, thumb: thumb('v1775738940/A%CC%81sum_4_Forwarded_Email_tekcl7.jpg'),                        src: full('v1775738940/A%CC%81sum_4_Forwarded_Email_tekcl7.jpg'),                        category: 'The Lodge' },
  { id: 16, thumb: thumb('v1775738940/A%CC%81sum_4_from_Vefsi%CC%81%C3%B0ulausnir_Mail_2_ha5uyh.jpg'), src: full('v1775738940/A%CC%81sum_4_from_Vefsi%CC%81%C3%B0ulausnir_Mail_2_ha5uyh.jpg'), category: 'The Lodge' },
  // The River
  { id: 17, thumb: thumb('v1774978944/In_a_Sunny_River_ku9kvq.jpg'),   src: full('v1774978944/In_a_Sunny_River_ku9kvq.jpg'),   category: 'The River' },
  { id: 18, thumb: thumb('v1774978944/The_River_2_lm3gnl.jpg'),        src: full('v1774978944/The_River_2_lm3gnl.jpg'),        category: 'The River' },
  { id: 19, thumb: thumb('v1774978944/Far_Away_xntpyi.jpg'),            src: full('v1774978944/Far_Away_xntpyi.jpg'),            category: 'The River' },
  { id: 20, thumb: thumb('v1774978944/Dawn_1_fdo07q.jpg'),              src: full('v1774978944/Dawn_1_fdo07q.jpg'),              category: 'The River' },
  { id: 21, thumb: thumb('v1774978944/Blue_Heaven_zkzop8.jpg'),         src: full('v1774978944/Blue_Heaven_zkzop8.jpg'),         category: 'The River' },
  { id: 22, thumb: thumb('v1774978944/The_River_ixvn4t.jpg'),           src: full('v1774978944/The_River_ixvn4t.jpg'),           category: 'The River' },
  { id: 23, thumb: thumb('v1774978944/Middle_Image_etmocn.jpg'),        src: full('v1774978944/Middle_Image_etmocn.jpg'),        category: 'The River' },
  { id: 24, thumb: thumb('v1774978944/File_0055_k9ikee.jpg'),           src: full('v1774978944/File_0055_k9ikee.jpg'),           category: 'The River' },
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
              <div className="text-taupe font-display tracking-[0.2em] text-sm mb-6 uppercase">05 / Gallery</div>
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

        {/* 16:9 Uniform Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
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
                className="relative aspect-video overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={img.thumb}
                  alt="Gallery"
                  className="w-full h-full object-cover editorial-filter"
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
              style={{ maxHeight: '90vh', maxWidth: '90vw' }}
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
