import { Envelope, Phone } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { FadeUp, StaggerParent, StaggerChild } from '../ui/FadeUp'

const team = [
  {
    name: 'Páll Á. Jónsson',
    title: 'Chairman VLÁ',
    email: 'laxa@asum.is',
    phone: '+354 858 6101',
    image: 'https://res.cloudinary.com/dyarmf7v1/image/upload/q_auto,f_auto/v1774978397/Pall_A_Jonsson_1_joztg2.jpg'
  },
  {
    name: 'Sturla Birgisson',
    title: 'Managing Director Laxás ehf.',
    email: 'fishing@asum.is',
    phone: '+354 694 6311',
    image: 'https://res.cloudinary.com/dyarmf7v1/image/upload/q_auto,f_auto/v1774978397/Sturla_lqwxvf.jpg'
  },
  {
    name: 'Freyja Kjartansdóttir',
    title: 'Lodge Manager',
    email: 'fishing@asum.is',
    phone: '+354 862 0713',
    image: 'https://res.cloudinary.com/dyarmf7v1/image/upload/q_auto,f_auto/v1774978397/Freyja_e2cysc.jpg'
  }
]

export default function OurTeam() {
  return (
    <section id="team" className="py-24 md:py-32 bg-parchment border-t border-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp>
          <div className="text-taupe font-display tracking-[0.2em] text-sm opacity-80 mb-6 uppercase">05 / The Guardians</div>
          <h2 className="text-4xl md:text-5xl font-display text-stone-deep mb-16 leading-tight">
            The Guardians of the <i>River</i>
          </h2>
        </FadeUp>

        <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((person) => (
            <StaggerChild key={person.name}>
              <motion.div 
                className="bg-parchment-light border border-bone p-8 flex flex-col items-center text-center transition-colors duration-300 hover:border-ember h-full"
                whileHover={{ y: -4 }}
              >
                <div className="w-32 h-32 rounded-full border-[3px] border-bone overflow-hidden mb-8 shadow-sm">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover editorial-filter" />
                </div>
                <h3 className="font-display text-2xl text-stone-deep mb-2">{person.name}</h3>
                <div className="text-[10px] font-bold text-taupe uppercase tracking-widest mb-6">{person.title}</div>
                
                <div className="w-full editorial-hr border-bone/50 mb-6 block"></div>
                
                <div className="flex flex-col gap-4 w-full text-sm text-stone-warm mt-auto">
                  <a href={`mailto:${person.email}`} className="flex items-center justify-center gap-3 hover:text-ember transition-colors">
                    <Envelope size={18} weight="light" className="text-taupe" /> 
                    <span className="tracking-wide">{person.email}</span>
                  </a>
                  <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-3 hover:text-ember transition-colors">
                    <Phone size={18} weight="light" className="text-taupe" /> 
                    <span className="tracking-wide">{person.phone}</span>
                  </a>
                </div>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  )
}
