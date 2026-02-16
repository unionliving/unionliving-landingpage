import HeroSection from '../sections/HeroSection.js'
import MediaSlider from '../sections/MediaSlider.js'
import Testimonials from '../sections/Testimonials.js'
import PropertiesGrid from '../sections/PropertiesGrid.js'
import Comparison from '../sections/Comparison.js'
import EventsGrid from '../sections/EventsGrid.js'
import StickyButton from '../sections/StickyButton.js'

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <MediaSlider />
      <Testimonials />
      <PropertiesGrid />
      <Comparison />
      <EventsGrid />
      <StickyButton />
    </div>
  )
}

export default LandingPage
