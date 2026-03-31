import { ChartBar, BookOpen, MapTrifold, Waves, House, MapPin } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { FadeUp } from '../ui/FadeUp'

const links = [
  { name: 'Fishing Statistics', href: 'https://veiditolur.angling.is/veidisvaedi/laxa-a-asum', icon: ChartBar, external: true },
  { name: 'Science Report', href: '#', icon: BookOpen, external: true },
  { name: 'Download Fishing Map', href: '#', icon: MapTrifold, external: true },
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
