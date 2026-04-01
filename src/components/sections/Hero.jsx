import { motion } from 'framer-motion'
import { CaretDown } from '@phosphor-icons/react'
import { StaggerParent, StaggerChild } from '../ui/FadeUp'

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[100svh] overflow-hidden bg-stone-deep flex items-end pb-32">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          src="https://res.cloudinary.com/dyarmf7v1/video/upload/q_auto,f_auto/v1774978321/Laxa_a_Asum_kniyis.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover editorial-filter"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-deep via-stone-deep/60 to-transparent"></div>
        <div className="absolute inset-0 bg-stone-deep/25"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <StaggerParent delay={0.2} className="max-w-3xl">
          <StaggerChild>
            <h2 className="font-body text-taupe tracking-[0.2em] text-sm md:text-base uppercase mb-4">Iceland's Premier Salmon River</h2>
          </StaggerChild>
          <StaggerChild>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] italic text-bone mb-6 leading-[0.9]">
              Laxá á<br />Ásum
            </h1>
          </StaggerChild>
          <StaggerChild>
            <p className="text-bone/80 text-lg md:text-xl max-w-md font-body font-light mb-10 leading-relaxed">
              World-class salmon fishing, pristine nature, and refined lodge accommodations await.
            </p>
          </StaggerChild>
          <StaggerChild className="flex flex-col sm:flex-row gap-4">
            <a href="#overview" className="border border-bone text-bone px-8 py-4 text-xs tracking-widest font-semibold hover:bg-bone hover:text-stone-deep transition-colors text-center">
              EXPLORE THE RIVER
            </a>
            <a href="#contact" className="bg-ember text-bone px-8 py-4 text-xs tracking-widest font-semibold hover:bg-stone-deep transition-colors text-center">
              ENQUIRIES
            </a>
          </StaggerChild>
        </StaggerParent>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-bone z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <CaretDown size={28} weight="light" />
      </motion.div>
    </section>
  )
}
