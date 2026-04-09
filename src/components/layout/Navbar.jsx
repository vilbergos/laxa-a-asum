import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'OVERVIEW', href: '#overview' },
    { name: 'OUR TEAM', href: '#team' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONTACT', href: '#contact' },
  ]

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-[2px] bg-ember z-[100] origin-left"
        style={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }} 
        transition={{ duration: 0.3 }}
      />

      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-parchment/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <a href="#home">
              <img
                src={scrolled
                  ? 'https://res.cloudinary.com/dyarmf7v1/image/upload/w_300,q_auto,f_auto/v1774978398/Laxa_Logo_1_u8nzxt.png'
                  : 'https://res.cloudinary.com/dyarmf7v1/image/upload/w_300,q_auto,f_auto/v1774978398/Laxa_White_Logo_qdysh9.png'
                }
                alt="Laxá á Ásum"
                className="h-16 w-auto transition-opacity duration-300"
              />
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-xs font-semibold tracking-[0.2em] transition-colors ${scrolled ? 'text-stone-deep hover:text-ember' : 'text-bone hover:text-white'}`}>
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            {scrolled ? (
              <a href="#contact" className="bg-ember text-bone text-xs font-semibold tracking-widest px-6 py-3 hover:bg-stone-deep transition-colors duration-300">
                ENQUIRIES
              </a>
            ) : (
              <a href="#contact" className="border border-bone text-bone text-xs font-semibold tracking-widest px-6 py-3 hover:bg-bone/10 transition-colors duration-300">
                ENQUIRIES
              </a>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-2xl z-50 relative" onClick={() => setMobileMenuOpen(true)}>
            <List className={scrolled && !mobileMenuOpen ? 'text-stone-deep' : 'text-bone'} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-stone-deep text-bone flex flex-col items-center justify-center p-6"
          >
            <button className="absolute top-6 right-6 text-3xl" onClick={() => setMobileMenuOpen(false)}>
              <X />
            </button>
            <div className="flex flex-col items-center justify-center space-y-8 mt-12 w-full">
              <img
                src="https://res.cloudinary.com/dyarmf7v1/image/upload/w_300,q_auto,f_auto/v1774978398/Laxa_White_Logo_qdysh9.png"
                alt="Laxá á Ásum"
                className="h-20 w-auto mb-4"
              />
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-3xl tracking-widest hover:text-ember transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 border border-ember text-ember w-full text-center px-8 py-4 tracking-widest text-sm hover:bg-ember hover:text-bone transition-colors"
              >
                ENQUIRIES
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
