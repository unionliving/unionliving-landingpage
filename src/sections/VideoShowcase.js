import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

function VideoShowcase() {
  const scrollRef = useRef(null)
  const videoRefs = useRef([])

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 360
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const togglePlay = (index) => {
    const el = videoRefs.current[index]
    if (!el) return
    if (el.paused) {
      el.play()
    } else {
      el.pause()
    }
  }

  const items = [
    {
      type: 'video',
      title: 'Stay Fit. Everything You Need.',
      src: 'https://cdn.coverr.co/videos/coverr-gym-1782/1080p.mp4',
      poster: 'https://images.unsplash.com/photo-1517963628607-38f2f99b5930?w=800&h=600&fit=crop'
    },
    {
      type: 'image',
      title: 'Premium Lounge',
      src: 'https://images.unsplash.com/photo-1554995207-20e3c2f8d3f2?w=800&h=600&fit=crop'
    },
    {
      type: 'video',
      title: 'Community Events',
      src: 'https://cdn.coverr.co/videos/coverr-dancing-crowd-2518/1080p.mp4',
      poster: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop'
    },
    {
      type: 'image',
      title: 'Modern Bedrooms',
      src: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8f?w=800&h=600&fit=crop'
    },
    {
      type: 'video',
      title: 'Study Spaces',
      src: 'https://cdn.coverr.co/videos/coverr-studying-at-the-library-1113/1080p.mp4',
      poster: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Experience the Lifestyle</h2>
            <p className="text-gray-600 max-w-xl">A visual slider showcasing event highlights, property photos, and lifestyle videos.</p>
          </div>
          <div className="hidden md:flex gap-3 mt-6 md:mt-0">
            <button onClick={() => scroll('left')} className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-violet-50 hover:border-violet-300 transition-all duration-300 shadow-sm">
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-violet-200">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[22rem] md:w-[26rem] snap-start group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/10] bg-black">
                {item.type === 'image' ? (
                  <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <>
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={item.src}
                      poster={item.poster}
                      className="w-full h-full object-cover"
                      playsInline
                      muted
                      preload="metadata"
                      controls={false}
                    />
                    <button
                      onClick={() => togglePlay(index)}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-violet-600 ml-1" />
                      </span>
                    </button>
                  </>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase
