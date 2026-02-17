function VideoBanner() {
  const srcWebm = 'https://cdn.shopify.com/videos/c/o/v/802613efe8ce4dba8feb51ce84d086b4.webm'
  return (
    <section className="relative bg-black">
      <div className="relative w-full overflow-hidden">
        <div className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9]">
          <video
            className="w-full h-full object-cover"
            playsInline
            loop
            autoPlay
            muted
            preload="metadata"
            onLoadedData={(e) => {
              e.target.play().catch(() => {})
            }}
          >
            <source src={srcWebm} type="video/webm" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        
      </div>
    </section>
  )
}

export default VideoBanner
