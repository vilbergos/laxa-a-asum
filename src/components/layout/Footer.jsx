import WeatherWidget from '../sections/WeatherWidget'

export default function Footer() {
  return (
    <footer className="bg-stone-deep text-parchment-light border-t border-ember pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 mb-16">

          {/* Col 1: Logo */}
          <div>
            <img
              src="https://res.cloudinary.com/dyarmf7v1/image/upload/q_auto,f_auto/v1774978398/Laxa_White_Logo_qdysh9.png"
              alt="Laxá á Ásum"
              className="h-20 w-auto mb-4"
            />
            <p className="text-taupe text-sm max-w-xs leading-relaxed">
              World-class salmon fishing, pristine nature, and refined lodge accommodations await in North Iceland.
            </p>
          </div>

          {/* Cols 2–4: Explore / Contact / Weather */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Explore */}
            <div>
              <h4 className="font-display tracking-widest text-sm text-bone mb-6">EXPLORE</h4>
              <ul className="space-y-3 text-sm text-taupe">
                <li><a href="#overview" className="hover:text-ember transition-colors">The River</a></li>
                <li><a href="#team" className="hover:text-ember transition-colors">Our Team</a></li>
                <li><a href="#gallery" className="hover:text-ember transition-colors">Gallery</a></li>
                <li><a href="https://veiditolur.angling.is/veidisvaedi/laxa-a-asum" target="_blank" rel="noreferrer" className="hover:text-ember transition-colors">Live Statistics</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display tracking-widest text-sm text-bone mb-6">CONTACT</h4>
              <ul className="space-y-3 text-sm text-taupe">
                <li><a href="tel:+3546946311" className="hover:text-ember transition-colors">+354 694 6311</a></li>
                <li><a href="mailto:fishing@asum.is" className="hover:text-ember transition-colors">fishing@asum.is</a></li>
                <li><a href="https://maps.app.goo.gl/dBeDtiYX8kfL6mK5A" target="_blank" rel="noreferrer" className="hover:text-ember transition-colors">Svínvetningabraut, 541 Blönduós</a></li>
              </ul>
            </div>

            {/* Weather */}
            <div>
              <h4 className="font-display tracking-widest text-sm text-bone mb-6">RIVER CONDITIONS</h4>
              <WeatherWidget />
            </div>

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
