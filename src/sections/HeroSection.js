import { useState } from 'react'
import { Shield, Clock, MapPin, Star, Users, Check } from 'lucide-react'
import { activeProduct } from '../data/PropertyList.js'

function HeroSection() {
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
    <section
      id="hero"
      className="relative min-h-screen py-12 overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/bg-1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container max-w-8xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm text-black font-medium">Rated 4.9/5 by 10,000+ students</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl text-black font-bold leading-tight mb-6">
              Find Your Perfect{' '}
              <span className="bg-[#FC7451] bg-clip-text text-transparent">
                Student Home
              </span>{' '}
              Near Your College
            </h1>

            <p className="text-lg md:text-xl text-black mb-8 max-w-xl">
              Premium Co-living accommodations with modern amenities, prime locations, and a vibrant community. Start your journey today!
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {trustBullets.map((bullet, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <bullet.icon className="w-5 h-5 text-[#FC7451]" />
                  <span className="text-sm text-black font-medium">{bullet.text}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl md:text-4xl font-bold text-black">50+</div>
                <div className="text-sm text-[#FC7451]">Properties</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-bold text-black">10K+</div>
                <div className="text-sm text-[#FC7451]">Happy Students</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-bold text-black">15+</div>
                <div className="text-sm text-[#FC7451]">Cities</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8" id="enquiry-form">
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
                <select
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  {colleges.map((college, index) => (
                    <option key={index} value={index === 0 ? '' : college}>
                      {college}
                    </option>
                  ))}
                </select>
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
                className="w-full py-4 bg-[#D64C27] text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-violet-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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

export default HeroSection
