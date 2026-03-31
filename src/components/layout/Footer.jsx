export default function Footer() {
  return (
    <footer className="bg-stone-deep text-parchment-light border-t border-ember pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Col 1 */}
          <div>
            <h3 className="font-display text-2xl tracking-widest mb-4">LAXÁ Á ÁSUM</h3>
            <p className="text-taupe text-sm max-w-xs leading-relaxed">
              World-class salmon fishing, pristine nature, and refined lodge accommodations await in North Iceland.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-display tracking-widest text-sm text-bone mb-6">EXPLORE</h4>
            <ul className="space-y-3 text-sm text-taupe">
              <li><a href="#overview" className="hover:text-ember transition-colors">The River</a></li>
              <li><a href="#team" className="hover:text-ember transition-colors">Our Team</a></li>
              <li><a href="#gallery" className="hover:text-ember transition-colors">Gallery</a></li>
              <li><a href="https://veiditolur.angling.is/veidisvaedi/laxa-a-asum" target="_blank" rel="noreferrer" className="hover:text-ember transition-colors">Live Statistics</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-display tracking-widest text-sm text-bone mb-6">CONTACT</h4>
            <ul className="space-y-3 text-sm text-taupe">
              <li>+354 694 6311</li>
              <li>fishing@asum.is</li>
              <li>Svínvetningabraut, 541 Blönduós</li>
            </ul>
          </div>
        </div>
        
        <div className="editorial-hr border-taupe/30 mb-8 w-full block"></div>
        
        <div className="text-center text-xs tracking-widest text-taupe">
          © {new Date().getFullYear()} LAXÁ Á ÁSUM. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  )
}
