import { ChartBar, BookOpen, MapTrifold, Waves, House, MapPin } from '@phosphor-icons/react'
import { FadeUp } from '../ui/FadeUp'

const externalLinks = [
  { name: 'Fishing Statistics', href: 'https://res.cloudinary.com/dyarmf7v1/image/upload/v1774979189/Statistics_2023_1_elnup8.pdf', icon: ChartBar },
  { name: 'Science Report', href: 'https://res.cloudinary.com/dyarmf7v1/image/upload/v1774979184/Laxa_Asum_2022_English_fb1wc9.pdf', icon: BookOpen },
  { name: 'Download Fishing Map', href: 'https://res.cloudinary.com/dyarmf7v1/image/upload/v1775081424/Laxa_A4_Map_2020_2_jxgf8f.pdf', icon: MapTrifold },
  { name: 'Location', href: 'https://maps.google.com/?q=Svínvetningabraut,541 Blönduós', icon: MapPin },
]

export default function UsefulLinks({ onSelectTab }) {
  return (
    <section className="py-24 bg-parchment-light border-t border-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp>
          <div className="text-taupe font-display tracking-[0.2em] text-sm mb-10 opacity-80 uppercase">06 / Useful Links</div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 scrollbar-none snap-x h-full">
            {externalLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-parchment-light border border-bone p-6 flex flex-col items-start min-w-[240px] snap-center transition-all hover:border-ember hover:shadow-md group"
                >
                  <Icon size={32} weight="light" className="text-ember mb-6 group-hover:scale-110 transition-transform" />
                  <span className="font-display text-xl text-stone-deep group-hover:text-ember transition-colors">{link.name}</span>
                </a>
              )
            })}

            {/* Internal tab links */}
            {[
              { name: 'The River', tab: 'The River', icon: Waves },
              { name: 'The Lodge', tab: 'The Lodge', icon: House },
            ].map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href="#overview"
                  onClick={() => onSelectTab && onSelectTab(link.tab)}
                  className="bg-parchment-light border border-bone p-6 flex flex-col items-start min-w-[240px] snap-center transition-all hover:border-ember hover:shadow-md group"
                >
                  <Icon size={32} weight="light" className="text-ember mb-6 group-hover:scale-110 transition-transform" />
                  <span className="font-display text-xl text-stone-deep group-hover:text-ember transition-colors">{link.name}</span>
                </a>
              )
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
