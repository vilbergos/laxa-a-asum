import { useFishingStats } from '../../hooks/useFishingStats'
import { motion } from 'framer-motion'
import { FadeUp } from '../ui/FadeUp'

export default function LiveStats() {
  const { stats, loading, error } = useFishingStats()

  if (loading) {
    return (
      <section className="py-24 bg-parchment-light min-h-[500px] flex items-center justify-center">
        <div className="text-taupe tracking-widest text-sm animate-pulse">LOADING RIVER STATISTICS...</div>
      </section>
    )
  }

  const { annual, weekly } = stats
  const currentTotal = weekly[weekly.length - 1]?.cumulative || 0
  const maxAnnual = Math.max(...annual.map(y => y.count))

  return (
    <section className="bg-parchment-light" id="stats">
      {/* Header Bar */}
      <div className="bg-stone-deep text-parchment py-12 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between z-10 relative">
          <div>
            <div className="text-taupe tracking-[0.2em] text-xs mb-2 uppercase">Current Season</div>
            <div className="font-display text-5xl md:text-7xl text-bone">2025</div>
          </div>
          <div className="mt-6 md:mt-0 md:text-right">
            <div className="text-taupe tracking-[0.2em] text-xs mb-2 uppercase">Total Catch So Far</div>
            <div className="font-display text-5xl md:text-7xl text-ember">{currentTotal}</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row gap-16">
        {/* Left Panel: Annual Chart */}
        <div className="flex-1 w-full overflow-hidden">
          <FadeUp>
            <h3 className="font-display text-3xl md:text-4xl text-stone-deep mb-8">Historical Return: Last 20 Years</h3>
            <div className="h-[300px] flex items-end gap-1 sm:gap-2 pb-8 border-b border-bone relative mt-16 max-w-full overflow-x-auto scrollbar-none">
              {annual.slice().reverse().map((yearData, idx) => (
                <div key={yearData.year} className="relative flex-1 group flex justify-center min-w-[12px]">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(yearData.count / maxAnnual) * 100}%` }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8, delay: idx * 0.02 }}
                    className="w-full bg-ember/80 group-hover:bg-ember transition-colors cursor-pointer rounded-t-sm min-w-[8px]"
                  ></motion.div>
                  {/* Tooltip */}
                  <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-deep text-bone text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap z-10 border border-stone-warm">
                    {yearData.year}: {yearData.count}
                  </div>
                  {/* Year Label */}
                  {idx % 2 === 0 && (
                    <div className="absolute -bottom-6 text-[10px] text-taupe transform -rotate-45 origin-top-left">
                      {yearData.year}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {error && <div className="text-xs text-taupe mt-8 italic text-right">{error} Using confirmed 2024 season data layout.</div>}
          </FadeUp>
        </div>

        {/* Right Panel: Weekly Table */}
        <div className="lg:w-1/3 w-full">
          <FadeUp delay={0.2}>
            <h3 className="font-display text-3xl md:text-4xl text-stone-deep mb-8 block pb-0">Weekly Progression</h3>
            <div className="w-full border-t border-bone">
              <div className="grid grid-cols-3 py-3 border-b border-bone text-xs tracking-widest text-taupe uppercase font-semibold mt-4">
                <div>Week</div>
                <div className="text-right">Catch</div>
                <div className="text-right">Total</div>
              </div>
              {weekly.map((week, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-3 py-4 border-b border-bone/50 text-sm transition-colors hover:bg-white/50 ${idx % 2 === 0 ? 'bg-transparent' : 'bg-parchment/50 px-2 -mx-2'}`}
                >
                  <div className="text-stone-deep font-medium">{week.date}</div>
                  <div className="text-right text-stone-warm">{week.weekly}</div>
                  <div className="text-right text-ember font-semibold">{week.cumulative}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
