import { useState } from 'react'
import { Shield, Clock, MapPin, Star, Users, Check } from 'lucide-react'
import { activeProduct } from '../data/PropertyList.js'
function HeroVideoSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    college: '',
    location: '',
    budget: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      if (window.fbq) window.fbq('track', 'Form_Submit')
      window.dispatchEvent(new CustomEvent('open-thankyou-modal'))
      setSubmitted(false)
    }, 500)
  }
  const trustBullets = [
    { icon: Shield, text: 'Verified Properties' },
    { icon: Clock, text: '24/7 Support' },
    { icon: MapPin, text: 'Prime Locations' }
  ]
  const colleges = [
    'Select your college',
    'Delhi University',
    'IP University',
    'Amity University',
    'Sharda University',
    'Jaypee Institute',
    'Other'
  ]
  const locations = ['Select preferred location', ...Array.from(new Set(activeProduct.map(p => p.location).filter(Boolean)))]
  const budgets = [
    'Select your budget',
    'Under ₹10,000',
    '₹10,000 - ₹15,000',
    '₹15,000 - ₹20,000',
    '₹20,000 - ₹25,000',
    'Above ₹25,000'
  ]
  return (
    <section id="hero-video" className="relative min-h-screen py-12 overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="/assets/intro.webm"
          playsInline
          autoPlay
          muted
          loop
          preload="metadata"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-white/10" /> */}
      </div>
      <div className="relative z-10 container max-w-8xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left-side text content is temporarily disabled */}
          {/* <div className="text-black"> ... </div> */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:col-start-3">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Free Consultation</h2>
              <p className="text-gray-500">Fill the form and our expert will call you within 2 hours</p>
            </div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your College/University *</label>
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    placeholder="Enter your college or university"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Location *</label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all bg-white"
                    >
                      {locations.map((location, index) => (
                        <option key={index} value={index === 0 ? '' : location}>
                          {location}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Budget *</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all bg-white"
                    >
                      {budgets.map((budget, index) => (
                        <option key={index} value={index === 0 ? '' : budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#D64C27] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Check className="w-5 h-5" />
                      Get Free Consultation
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500 pt-2">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>10,000+ students helped</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>100% Secure</span>
                  </div>
                </div>
              </form>
            ) : (
              <div className="text-center py-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-lg font-semibold text-gray-900">Enquiry submitted</p>
                <p className="text-sm text-gray-500 mt-1">Our team will reach out shortly</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroVideoSection
