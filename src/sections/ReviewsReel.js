import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function ReviewsReel() {
  const videoRefs = useRef([])

  const items = [
    { src: 'https://cdn.shopify.com/videos/c/o/v/896d6e23d0654030b822c22dfeb0a54d.mp4',  },
    { src: 'https://cdn.shopify.com/videos/c/o/v/d12e886e95b04cc8999fe4f491ff7809.mp4',  },
    { src: 'https://cdn.shopify.com/videos/c/o/v/398ce32ec67e4bc5aea1b5e76c5d2fc3.mp4', },
    { src: 'https://cdn.shopify.com/videos/c/o/v/929df69c48e34408b372f67c28207a56.mov', },
    { src: 'https://cdn.shopify.com/videos/c/o/v/a7d6068c8d0e4095a1dc783e56f5344c.mp4', },
  ]

  const handleEnter = (i) => {
    const el = videoRefs.current[i]
    if (!el) return
    el.play().catch(() => {})
  }

  const handleLeave = (i) => {
    const el = videoRefs.current[i]
    if (!el) return
    el.pause()
    el.currentTime = 0
  }

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Reviews</h2>
        <Swiper
          spaceBetween={12}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 14 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 18 },
            1280: { slidesPerView: 5, spaceBetween: 20 },
          }}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="rounded-2xl overflow-hidden shadow-lg bg-black"
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={() => handleLeave(i)}
              >
                <div className="w-full aspect-[9/16]">
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    src={item.src}
                    poster={item.poster}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    preload="metadata"
                    controls
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ReviewsReel
