import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp } from '../ui/FadeUp'

export default function GetInTouch() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      // Formspree fallback placeholder action URL
      await fetch('https://formspree.io/f/placeholder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-parchment border-t border-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Form Area */}
          <div className="w-full lg:w-1/2">
            <FadeUp>
              <div className="text-taupe font-display tracking-[0.2em] text-sm mb-6 uppercase opacity-80">08 / Contact</div>
              <h2 className="text-4xl md:text-5xl font-display text-stone-deep mb-8 leading-tight">
                Reserve Your <i>Rods</i>
              </h2>
              <p className="text-stone-warm/80 mb-12 text-sm md:text-base leading-relaxed">
                For booking inquiries, lodge information, or specific requirements, please reach out to our team. We aim to respond within 24 hours.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6 relative min-h-[400px]">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute inset-0 bg-parchment flex flex-col items-center justify-center text-center p-8 border border-bone"
                    >
                      <div className="font-display text-3xl mb-4 text-stone-deep">Enquiry Received</div>
                      <div className="text-taupe text-sm">We will be in touch shortly to assist with your reservation.</div>
                      <button 
                        type="button" 
                        onClick={() => setStatus('idle')}
                        className="mt-8 border border-bone text-stone-deep px-6 py-2 text-xs tracking-widest font-semibold hover:bg-stone-deep hover:text-bone transition-colors uppercase"
                      >
                        Send Another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="sr-only">Name</label>
                          <input 
                            type="text" 
                            placeholder="Full Name" 
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-parchment-light border border-bone p-4 text-sm text-stone-deep placeholder:text-taupe focus:outline-none focus:border-ember transition-colors"
                          />
                        </div>
                        <div>
                          <label className="sr-only">Email</label>
                          <input 
                            type="email" 
                            placeholder="Email Address" 
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-parchment-light border border-bone p-4 text-sm text-stone-deep placeholder:text-taupe focus:outline-none focus:border-ember transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="sr-only">Phone</label>
                        <input 
                          type="tel" 
                          placeholder="Phone Number (Optional)" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-parchment-light border border-bone p-4 text-sm text-stone-deep placeholder:text-taupe focus:outline-none focus:border-ember transition-colors"
                        />
                      </div>
                      <div>
                        <label className="sr-only">Message</label>
                        <textarea 
                          placeholder="Your Enquiry..." 
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full bg-parchment-light border border-bone p-4 text-sm text-stone-deep placeholder:text-taupe focus:outline-none focus:border-ember transition-colors resize-none"
                        ></textarea>
                      </div>
                      
                      <button 
                        type="submit" 
                        disabled={status === 'loading'}
                        className="w-full bg-ember text-bone py-4 text-xs tracking-widest uppercase font-semibold hover:bg-stone-deep transition-colors flex justify-center items-center h-12"
                      >
                        {status === 'loading' ? (
                          <span className="w-4 h-4 border-2 border-bone/30 border-t-bone rounded-full animate-spin"></span>
                        ) : 'Send Enquiry →'}
                      </button>
                      
                      {status === 'error' && (
                        <div className="text-ember text-sm mt-4">Something went wrong. Please try again or email us directly.</div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="mt-16 block">
                <div className="editorial-hr mb-8 w-full"></div>
                <div className="flex flex-col gap-4 text-taupe text-sm font-medium">
                  <span className="flex items-center gap-4">
                    <span className="text-lg">📞</span> +354 694 6311
                  </span>
                  <span className="flex items-center gap-4">
                    <span className="text-lg">✉</span> fishing@asum.is
                  </span>
                  <span className="flex items-center gap-4">
                    <span className="text-lg">📍</span> Svínvetningabraut, 541 Blönduós
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right: Editorial Image */}
          <div className="hidden lg:block w-1/2">
            <motion.div 
              className="w-full h-full min-h-[700px] overflow-hidden rounded-t-[200px] rounded-br-sm rounded-bl-sm"
              whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
              initial={{ clipPath: 'inset(100% 0 0% 0)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1548425588-c1c6bb7d1c53?q=80&w=1200&auto=format&fit=crop" 
                alt="Lodge and Nature" 
                className="w-full h-full object-cover editorial-filter"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
