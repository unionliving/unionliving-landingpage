import { MessageCircle, X } from 'lucide-react'
import { useState, useEffect } from 'react'

function StickyButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const scrollToForm = () => {
    window.dispatchEvent(new CustomEvent('open-enquiry-modal'))
  }

  return (
    <>
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-3 bg-gray-900 text-white text-sm px-4 py-2 rounded-xl whitespace-nowrap animate-bounce">
            <div className="flex items-center gap-2">
              <span>Have questions? Enquire now!</span>
              <button onClick={() => setShowTooltip(false)} className="text-gray-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></div>
          </div>
        )}

        <button onClick={scrollToForm} className="flex items-center gap-2 bg-[#D64C27] text-white px-5 py-3 rounded-lg transition-colors hover:bg-[#c44422]">
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold">Enquire</span>
        </button>
      </div>

      

    </>
  )
}

export default StickyButton
