import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold text-gray-900">Union Living</div>
            <p className="mt-3 text-gray-600 text-sm">Premium student housing and co-living across prime locations.</p>
          </div>
          <div>
            <div className="font-semibold text-gray-900 mb-3">Quick Links</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
              <Link to="/properties" className="text-gray-700 hover:text-gray-900">Properties</Link>
              <Link to="/community" className="text-gray-700 hover:text-gray-900">Community</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-900 mb-3">Contact</div>
            <div className="text-sm text-gray-700">info@unionliving.in</div>
            <div className="text-sm text-gray-700">+91 98765 43210</div>
            <div className="text-sm text-gray-700">Mumbai, India</div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-xs text-gray-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Union Living. All rights reserved.</span>
          <span className="hidden md:block">Made with care for students and young professionals.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
