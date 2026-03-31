import { ChartBar, BookOpen, MapTrifold, Waves, House, MapPin } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { FadeUp } from '../ui/FadeUp'

const links = [
  { name: 'Fishing Statistics', href: 'https://res.cloudinary.com/dyarmf7v1/image/upload/v1774979189/Statistics_2023_1_elnup8.pdf', icon: ChartBar, external: true },
  { name: 'Science Report', href: 'https://res.cloudinary.com/dyarmf7v1/image/upload/v1774979184/Laxa_Asum_2022_English_fb1wc9.pdf', icon: BookOpen, external: true },
  { name: 'Download Fishing Map', href: 'https://res.cloudinary.com/dyarmf7v1/image/upload/v1774979191/Laxa_A4_Map_2020_1_midxhi.ai', icon: MapTrifold, external: true },
  { name: 'The River', href: '#overview', icon: Waves, external: false },
  { name: 'The Lodge', href: '#overview', icon: House, external: false },
  { name: 'Location', href: 'https://maps.google.com/?q=Svínvetningabraut,541 Blönduós', icon: MapPin, external: true },
]

export default function UsefulLinks() {
  return (
    <section className="py-24 bg-parchment-light border-t border-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp>
          <div className="text-taupe font-display tracking-[0.2em] text-sm mb-10 opacity-80 uppercase">07 / Useful Links</div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 scrollbar-none snap-x h-full">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.external ? '_blank' : '_self'}
                  rel={link.external ? 'noreferrer' : ''}
                  className="bg-parchment-light border border-bone p-6 flex flex-col items-start min-w-[240px] snap-center transition-colors hover:border-ember group"
                  whileHover={{ y: -2 }}
                >
                  <Icon size={32} weight="light" className="text-ember mb-6 group-hover:scale-110 transition-transform" />
                  <span className="font-display text-xl text-stone-deep group-hover:text-ember transition-colors">{link.name}</span>
                </motion.a>
              )
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
