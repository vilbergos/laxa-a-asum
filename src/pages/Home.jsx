import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import Overview from '../components/sections/Overview'
import LiveStats from '../components/sections/LiveStats'
import OurTeam from '../components/sections/OurTeam'
import Gallery from '../components/sections/Gallery'
import UsefulLinks from '../components/sections/UsefulLinks'
import GetInTouch from '../components/sections/GetInTouch'

export default function Home() {
  const [overviewTab, setOverviewTab] = useState('The River')

  return (
    <div className="min-h-[100svh] flex flex-col pt-0 relative selection:bg-ember selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        <Overview activeTab={overviewTab} onTabChange={setOverviewTab} />
        <LiveStats />
        <OurTeam />
        <Gallery />
        <UsefulLinks onSelectTab={setOverviewTab} />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  )
}
