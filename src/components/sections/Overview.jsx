import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp } from '../ui/FadeUp'

const TABS = ['The River', 'The Lodge', 'The Fishing', 'The Service', 'Location']

export default function Overview() {
  const [activeTab, setActiveTab] = useState('The River')

  return (
    <section id="overview" className="py-24 md:py-32 bg-parchment relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-8 lg:gap-12 relative z-10">
        
        {/* Left Indicator */}
        <div className="hidden md:flex flex-col items-start w-16 flex-shrink-0">
          <div className="transform -rotate-90 origin-left mt-24 text-taupe font-display tracking-widest whitespace-nowrap opacity-60">
            02 / OVERVIEW
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-visible">
          <FadeUp>
            {/* Tabs */}
            <div className="flex overflow-x-auto pb-4 mb-12 space-x-2 scrollbar-none border-b border-bone w-full">
              {TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 text-xs tracking-widest font-medium transition-all whitespace-nowrap ${
                    activeTab === tab 
                      ? 'bg-ember text-bone' 
                      : 'border border-bone text-stone-warm hover:bg-bone/30'
                  }`}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
          </FadeUp>

          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {activeTab === 'The River' && (
                <motion.div
                  key="river"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                  <div className="order-2 lg:order-1">
                    <h2 className="text-4xl md:text-5xl font-display text-stone-deep mb-8 leading-tight">
                      A River of <i>Singular</i> Reputation
                    </h2>
                    <p className="text-stone-warm/80 mb-6 leading-relaxed text-sm md:text-base">
                      Laxá in Ásum is one of the most remarkable Atlantic salmon rivers in the world, a true jewel among great salmon rivers. Anglers who choose to fish in Laxá in Ásum are drawn to its privacy, breathtaking scenery, luxurious 5-star accommodations, and, above all, the world-class Atlantic salmon fishing it offers. The river boasts an impressive 42-year seasonal average of 955 salmon (1974–2022), with a recent bonanza of 1,795 salmon caught in 2015 alone.
                    </p>
                    <p className="text-stone-warm/80 mb-6 leading-relaxed text-sm md:text-base">
                      In 1932, the majority of the river water was diverted through the Laxarvatn hydroelectric power plant and released back into the river 7 km downstream. However, the power plant was decommissioned in 2014 and the river restored to its natural riverbed for its entire length from Lake Laxárvatn. The river flows for 15 km to the 3 km estuary, bringing the total fishable water to 18 km, fished with 4 rods.
                    </p>
                    <p className="text-stone-warm/80 mb-10 leading-relaxed text-sm md:text-base">
                      Earliest documentation on fishing in Laxá in Ásum is from the early 13th century. Since 1940 netting has been banned and Laxá in Ásum has been fly fishing only since 2001.
                    </p>

                    {/* Micro-grid stats */}
                    <div className="editorial-hr mb-6"></div>
                    <div className="grid grid-cols-2 gap-6 pb-6 mt-6">
                      <div className="flex flex-col">
                        <span className="font-display text-3xl text-stone-deep">955 Salmon</span>
                        <span className="text-xs text-taupe tracking-wider uppercase mt-1">42-Year Average Seasonal Catch</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-display text-3xl text-stone-deep">1795</span>
                        <span className="text-xs text-taupe tracking-wider uppercase mt-1">Salmon in 2015 Record Season</span>
                      </div>
                      <div className="flex flex-col mt-4">
                        <span className="font-display text-3xl text-stone-deep">4 Rods</span>
                        <span className="text-xs text-taupe tracking-wider uppercase mt-1">Only Maximum Guests</span>
                      </div>
                      <div className="flex flex-col mt-4">
                        <span className="font-display text-3xl text-stone-deep">18 km</span>
                        <span className="text-xs text-taupe tracking-wider uppercase mt-1">Total Fishable Water</span>
                      </div>
                    </div>
                    <div className="editorial-hr"></div>
                  </div>

                  {/* Side Image */}
                  <div className="order-1 lg:order-2">
                    <motion.div
                      className="w-full h-[400px] lg:h-[500px] overflow-hidden"
                      style={{ borderRadius: '160px 4px 4px 4px' }}
                      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                      initial={{ clipPath: 'inset(0 0 100% 0)' }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true, margin: '-100px' }}
                    >
                      <img
                        src="https://res.cloudinary.com/dyarmf7v1/image/upload/q_auto,f_auto/v1774978944/The_River_2_lm3gnl.jpg"
                        alt="River View"
                        className="w-full h-full object-cover editorial-filter"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'The Lodge' && (
                <motion.div
                  key="lodge"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                  <div>
                    <h2 className="text-4xl md:text-5xl font-display text-stone-deep mb-8 leading-tight">
                      Ásgarður — A Five-Star <i>Refuge</i>
                    </h2>
                    <p className="text-stone-warm/80 mb-6 leading-relaxed text-sm md:text-base">
                      A luxurious accommodation nestled in magnificent natural scenery, Ásgarður Lodge offers a truly enchanting experience. Built in 2012 and extended in 2017, it is ideally located on one of the best pools in the river, Krókhylur. This lodge replaces the old one which had served anglers at the river for decades with its rustic simplicity.
                    </p>
                    <p className="text-stone-warm/80 mb-6 leading-relaxed text-sm md:text-base">
                      The upgraded lodge features six premier ensuite guest rooms, a spacious dining and living room, a well-equipped kitchen, and excellent facilities for waders and fishing gear. For ultimate relaxation after a day of fishing, a sauna awaits on the terrace.
                    </p>
                    <p className="text-stone-warm/80 mb-6 leading-relaxed text-sm md:text-base">
                      We pride ourselves on presenting the lodge as an exclusive 5-star boutique hotel, offering refined service and exquisite cuisine. This first-class lodging provides a warm and charming environment for anglers to unwind and indulge.
                    </p>
                    <div className="editorial-hr mt-8 mb-6"></div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <span className="font-display text-3xl text-stone-deep">6 Rooms</span>
                        <span className="text-xs text-taupe tracking-wider uppercase mt-1">Premier Ensuite Guest Rooms</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-display text-3xl text-stone-deep">5-Star</span>
                        <span className="text-xs text-taupe tracking-wider uppercase mt-1">Boutique Hotel Standard</span>
                      </div>
                    </div>
                    <div className="editorial-hr mt-6"></div>
                  </div>
                  <div className="hidden lg:block">
                    <motion.div
                      className="w-full h-[500px] overflow-hidden"
                      style={{ borderRadius: '160px 4px 4px 4px' }}
                      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                      initial={{ clipPath: 'inset(0 0 100% 0)' }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true, margin: '-100px' }}
                    >
                      <img
                        src="https://res.cloudinary.com/dyarmf7v1/image/upload/q_auto,f_auto/v1774984670/Laxa_a_Asum_Media_cxqods.jpg"
                        alt="Ásgarður Lodge"
                        className="w-full h-full object-cover editorial-filter"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'The Fishing' && (
                <motion.div
                  key="fishing"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                  <div>
                    <h2 className="text-4xl md:text-5xl font-display text-stone-deep mb-8 leading-tight">
                      Iceland's <i>Crown Jewel</i>
                    </h2>
                    <p className="text-stone-warm/80 mb-6 leading-relaxed text-sm md:text-base">
                      Laxá in Ásum is an exclusive private river, allowing only four rods at a time to enjoy abundant salmon fishing. The river boasts a diverse range of pools, pots, waterfalls, and runs, each offering unique characteristics.
                    </p>
                    <p className="text-stone-warm/80 mb-6 leading-relaxed text-sm md:text-base">
                      Nothing compares to the exhilaration of hitching small micro flies — it's nearly impossible to put into words the sensation of witnessing a salmon rise from the crystal-clear water and chase after the V-shaped wake. Employing fast-stripped micro flies in sizes 16–18 can result in breathtaking action, with a heart-pounding moment as the line tightens and gracefully arcs across the pool.
                    </p>
                    <p className="text-stone-warm/80 mb-6 leading-relaxed text-sm md:text-base">
                      If Iceland is considered the haven for light tackle salmon fishing, then Laxá á Ásum is undoubtedly the crown jewel.
                    </p>
                    <div className="editorial-hr mt-8 mb-6"></div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <span className="font-display text-3xl text-stone-deep">Sizes 16–18</span>
                        <span className="text-xs text-taupe tracking-wider uppercase mt-1">Micro Fly Light Tackle</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-display text-3xl text-stone-deep">1 / Rod / Day</span>
                        <span className="text-xs text-taupe tracking-wider uppercase mt-1">Max Salmon Kept for Sustainability</span>
                      </div>
                    </div>
                    <div className="editorial-hr mt-6 mb-4"></div>
                    <p className="text-taupe text-xs leading-relaxed">
                      To ensure the sustainability of the river system, only one salmon per rod per day is allowed to be kept, and all salmon measuring 70 cm or more must be released.
                    </p>
                  </div>
                  <div className="hidden lg:block">
                    <motion.div
                      className="w-full h-[500px] overflow-hidden"
                      style={{ borderRadius: '160px 4px 4px 4px' }}
                      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                      initial={{ clipPath: 'inset(0 0 100% 0)' }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true, margin: '-100px' }}
                    >
                      <img
                        src="https://res.cloudinary.com/dyarmf7v1/image/upload/q_auto,f_auto/v1774978875/Fishing_nqioji.jpg"
                        alt="Salmon Fishing"
                        className="w-full h-full object-cover editorial-filter"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'The Service' && (
                <motion.div
                  key="service"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                  <div>
                    <h2 className="text-4xl md:text-5xl font-display text-stone-deep mb-8 leading-tight">
                      Refined <i>Hospitality</i>
                    </h2>
                    <p className="text-stone-warm/80 mb-6 leading-relaxed text-sm md:text-base">
                      The lodge is expertly managed by Sturla Birgisson, a seasoned chef, and his wife Freyja Kjartansdóttir, an experienced host. Both possess extensive expertise in their respective fields and share a deep passion for angling. With their dedicated service, they strive to provide an unforgettable experience, ensuring guests receive top-notch hospitality.
                    </p>
                    <p className="text-stone-warm/80 mb-6 leading-relaxed text-sm md:text-base">
                      The catering and cuisine ingredients are sourced directly from local farmers and fish markets. The traditional meat of choice is lamb — sheep farming practices remaining true to their Viking-era origins, grazing on wild fauna throughout the summer. Our fish is sourced close to shore, from same-day catches at local fish markets surrounding Laxá in Ásum.
                    </p>
                    <p className="text-stone-warm/80 mb-6 leading-relaxed text-sm md:text-base">
                      In addition to exceptional cuisine, the lodge offers a fine selection of wines, spirits, and Icelandic beers. We gladly accommodate individual preferences and special requests made prior to your arrival.
                    </p>
                  </div>
                  <div className="hidden lg:block">
                    <motion.div
                      className="w-full h-[500px] overflow-hidden"
                      style={{ borderRadius: '160px 4px 4px 4px' }}
                      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                      initial={{ clipPath: 'inset(0 0 100% 0)' }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true, margin: '-100px' }}
                    >
                      <img
                        src="https://res.cloudinary.com/dyarmf7v1/image/upload/q_auto,f_auto/v1774978908/Desert_2.0_ojtfdy.jpg"
                        alt="Fine Dining"
                        className="w-full h-full object-cover editorial-filter"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'Location' && (
                <motion.div
                  key="location"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                  <div>
                    <h2 className="text-4xl md:text-5xl font-display text-stone-deep mb-8 leading-tight">
                      How to <i>Reach Us</i>
                    </h2>
                    <p className="text-stone-warm/80 mb-6 leading-relaxed text-sm md:text-base">
                      Iceland is easily accessible from both Europe and North America through its international airport at Keflavík, with regular daily flights on various airlines. From Keflavík, it takes approximately 40 minutes to drive to Reykjavík.
                    </p>
                    <p className="text-stone-warm/80 mb-6 leading-relaxed text-sm md:text-base">
                      Laxá in Ásum is situated 270 kilometres from Reykjavík and can be reached by road or private air transport. The lodge is conveniently located about 3 km from Blönduós village, where a small airstrip is available for smaller planes. For those arriving by private jet, Akureyri — located 140 km east of the lodge — serves as an alternative airport.
                    </p>
                    <p className="text-stone-warm/80 mb-6 leading-relaxed text-sm md:text-base">
                      Regardless of the chosen mode of transportation, the lodge manager will make arrangements based on the individual preferences of incoming anglers.
                    </p>
                    <div className="editorial-hr mt-8 mb-6"></div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <span className="font-display text-3xl text-stone-deep">270 km</span>
                        <span className="text-xs text-taupe tracking-wider uppercase mt-1">From Reykjavík</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-display text-3xl text-stone-deep">3 km</span>
                        <span className="text-xs text-taupe tracking-wider uppercase mt-1">From Blönduós Airstrip</span>
                      </div>
                    </div>
                    <div className="editorial-hr mt-6 mb-4"></div>
                    <p className="text-taupe text-xs tracking-wide">Svínvetningabraut, 541 Blönduós, Iceland</p>
                  </div>
                  <div className="hidden lg:block">
                    <motion.div
                      className="w-full h-[500px] overflow-hidden"
                      style={{ borderRadius: '160px 4px 4px 4px' }}
                      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                      initial={{ clipPath: 'inset(0 0 100% 0)' }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true, margin: '-100px' }}
                    >
                      <img
                        src="https://res.cloudinary.com/dyarmf7v1/image/upload/q_auto,f_auto/v1774978944/The_River_ixvn4t.jpg"
                        alt="Iceland Landscape"
                        className="w-full h-full object-cover editorial-filter"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
