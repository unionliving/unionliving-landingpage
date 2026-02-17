import { ArrowRight, Plus } from 'lucide-react'

function CommunitySection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="order-2 lg:order-none">
            <h2 className="text-2xl md:text-5xl font-bold leading-tight text-gray-900">
              Join & vibe with a vibrant and{' '}
              <span className="text-sky-500">colourful community</span>.
            </h2>
            <p className="mt-3 md:mt-4 text-gray-600 max-w-xl text-sm md:text-base">
              Experience co-living like never before in our uniquely designed spaces. Create your community, engage in social activities, connect with others, and gain valuable mentorship on your terms.
            </p>
            <a href="/community" className="mt-6 inline-flex items-center gap-2 text-sky-600 font-semibold">
              Know More
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sky-500 text-white">
                <Plus className="w-4 h-4" />
              </span>
            </a>
          </div>
          <div className="order-1 lg:order-none grid grid-cols-2 gap-2 md:gap-4">
            <div className="col-span-1">
              <img
                src="/assets/propertyCover/nova.webp"
                alt="Community vibe 1"
                className="w-full h-[320px] md:h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/assets/propertyCover/terraCover.webp"
                alt="Community vibe 2"
                className="w-full h-[180px] md:h-[280px] object-cover rounded-2xl shadow-lg"
              />
              <img
                src="/assets/propertyCover/southsideCover.webp"
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
