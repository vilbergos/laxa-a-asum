import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import Overview from '../components/sections/Overview'
import LiveStats from '../components/sections/LiveStats'
import WeatherWidget from '../components/sections/WeatherWidget'
import OurTeam from '../components/sections/OurTeam'
import Gallery from '../components/sections/Gallery'
import UsefulLinks from '../components/sections/UsefulLinks'
import GetInTouch from '../components/sections/GetInTouch'

export default function Home() {
  return (
    <div className="min-h-[100svh] flex flex-col pt-0 relative selection:bg-ember selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Responsive Weather Widget Container */}
        <div className="w-full bg-parchment border-b border-bone">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex justify-end">
            <WeatherWidget />
          </div>
        </div>

        <Overview />
        <LiveStats />
        <OurTeam />
        <Gallery />
        <UsefulLinks />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  )
}
