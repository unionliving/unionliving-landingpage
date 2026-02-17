import HeroSection from '../sections/HeroSection.js'
import MediaSlider from '../sections/MediaSlider.js'
import Testimonials from '../sections/Testimonials.js'
import PropertiesGrid from '../sections/PropertiesGrid.js'
import Comparison from '../sections/Comparison.js'
import EventsGrid from '../sections/EventsGrid.js'
import StickyButton from '../sections/StickyButton.js'
import VideoBanner from '../sections/VideoBanner.js'
import ReviewsReel from '../sections/ReviewsReel.js'
import PropertiesList from '../sections/PropertiesList.js'
import CommunitySection from '../sections/CommunitySection.js'

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <VideoBanner />
      <PropertiesList />
      {/* <PropertiesGrid /> */}
      {/* <Testimonials /> */}
      <Comparison />
      <CommunitySection />
      {/* <EventsGrid /> */}
      <ReviewsReel />
      <StickyButton />
    </div>
  )
}

export default LandingPage
