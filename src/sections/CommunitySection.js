import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function CommunitySection() {
  return (
    <section id="community" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="order-2 lg:order-none">
            <h2 className="text-xl md:text-4xl font-bold leading-tight text-gray-900">
              Join & vibe with a vibrant and{' '}
              <span className="text-[#FC7451]">colourful community.</span>
            </h2>
            <p className="mt-2 md:mt-4 text-gray-600 max-w-xl text-sm md:text-base">
              Experience co-living like never before in our uniquely designed spaces. Create your community, engage in social activities, connect with others, and gain valuable mentorship on your terms.
            </p>
            <Link to="/community" className="mt-6 inline-flex items-center gap-2 justify-center rounded-lg bg-[#D64C27] hover:bg-[#c44422] text-white px-4 py-2 text-sm md:text-base">
              Know More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="order-1 lg:order-none grid grid-cols-2 gap-2 md:gap-4">
            <div className="col-span-1">
              <img
                src="/assets/communityimages/image1.webp"
                alt="Community vibe 1"
                className="w-full h-[320px] md:h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/assets/communityimages/image2.webp"
                alt="Community vibe 2"
                className="w-full h-[180px] md:h-[280px] object-cover rounded-2xl shadow-lg"
              />
              <img
                src="/assets/communityimages/image3.webp"
                alt="Community vibe 3"
                className="w-full mt-3 md:mt-4 h-[120px] md:h-[200px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunitySection
