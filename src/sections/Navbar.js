import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-bold text-gray-900">Union Living</Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link to="/properties" className="text-gray-700 hover:text-gray-900">Properties</Link>
          <Link to="/community" className="text-gray-700 hover:text-gray-900">Community</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </nav>
        <Link to="/thank-you" className="ml-4 inline-flex items-center justify-center rounded-lg bg-violet-600 text-white px-4 py-2 text-sm md:text-base">Enquire</Link>
      </div>
    </header>
  )
}

export default Navbar
