import { useState } from 'react'
import { Check } from 'lucide-react'
import { activeProduct } from '../data/PropertyList.js'

function VideoConsultation() {
  const srcWebm = 'https://cdn.shopify.com/videos/c/o/v/802613efe8ce4dba8feb51ce84d086b4.webm'

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    college: '',
    location: '',
    budget: ''
  })

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
    }, 700)
  }

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
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
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/30 to-black/10"></div>

      <div className="relative z-20 container mx-auto px-4 py-10 md:py-20 min-h-[420px] md:min-h-[560px]">
        <div className="flex justify-center md:justify-end">
          <div className="bg-white rounded-2xl shadow-2xl p-5 md:p-8 w-full md:w-[520px]">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
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
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
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
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all bg-white"
                  >
                    {colleges.map((college, index) => (
                      <option key={index} value={index === 0 ? '' : college}>
                        {college}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Location *</label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all bg-white"
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
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all bg-white"
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
                  className="w-full py-3 md:py-4 bg-[#D64C27] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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

                <div className="mt-3 flex items-center gap-4 text-gray-600 text-xs md:text-sm">
                  <span>10,000+ students helped</span>
                  <span>100% Secure</span>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
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

export default VideoConsultation
