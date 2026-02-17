import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'

function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container mx-auto px-3 md:px-4 h-14 md:h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/logoblack.webp" alt="Union Living" className="h-7 md:h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollTo('hero')} className="text-gray-700 hover:text-gray-900">Home</button>
          <button onClick={() => scrollTo('properties')} className="text-gray-700 hover:text-gray-900">Properties</button>
          <button onClick={() => scrollTo('community')} className="text-gray-700 hover:text-gray-900">Community</button>
        </nav>
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
          className="ml-3 md:ml-4 inline-flex items-center gap-2 justify-center rounded-lg bg-[#D64C27] hover:bg-[#c44422] text-white px-3 md:px-4 py-2 text-sm md:text-base"
        >
          <MessageCircle className="w-4 h-4" />
          Enquire
        </button>
      </div>
    </header>
  )
}

export default Navbar
