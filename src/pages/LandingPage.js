import HeroVideoSection from '../sections/HeroVideoSection.js'
import MediaSlider from '../sections/MediaSlider.js'
import Testimonials from '../sections/Testimonials.js'
import PropertiesGrid from '../sections/PropertiesGrid.js'
import Comparison from '../sections/Comparison.js'
import EventsGrid from '../sections/EventsGrid.js'
import StickyButton from '../sections/StickyButton.js'
import ReviewsReel from '../sections/ReviewsReel.js'
import PropertiesList from '../sections/PropertiesList.js'
import CommunitySection from '../sections/CommunitySection.js'
import Navbar from '../sections/Navbar.js'
import Footer from '../sections/Footer.js'
import EnquiryModal from '../components/EnquiryModal.js'
import HeroSection from '../sections/HeroSection.js'
import VideoBanner from '../sections/VideoBanner.js'

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* <HeroSection /> */}
      <HeroVideoSection />
      {/* <VideoBanner /> */}
      <PropertiesList />
      {/* <PropertiesGrid /> */}
      {/* <Testimonials /> */}
      <Comparison />
      <CommunitySection />
      {/* <EventsGrid /> */}
      <ReviewsReel />
      <EnquiryModal />
      <StickyButton />
      <Footer />
    </div>
  )
}

export default LandingPage
