import { Check, X } from 'lucide-react'

function Comparison() {
  const comparisons = [
    { feature: 'Fully Furnished Rooms', unionLiving: true, traditionalPG: false, description: 'Ready to move in with bed, wardrobe, study table' },
    { feature: 'High-Speed WiFi', unionLiving: true, traditionalPG: false, description: 'Unlimited 100 Mbps internet for seamless studying' },
    { feature: 'Daily Housekeeping', unionLiving: true, traditionalPG: false, description: 'Professional cleaning staff for common areas' },
    { feature: '24/7 Security', unionLiving: true, traditionalPG: true, description: 'CCTV surveillance and security guards' },
    { feature: 'Community Events', unionLiving: true, traditionalPG: false, description: 'Regular networking and fun activities' },
    { feature: 'App-Based Services', unionLiving: true, traditionalPG: false, description: 'Raise complaints, pay rent, book amenities' }
  ]

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-violet-100 px-3 py-2 rounded-full mb-4">
            <Check className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-700">Why Choose Us</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">Union Living vs Traditional PG</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">See why thousands of students prefer Union Living over conventional paying guest accommodations.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="text-left md:text-left"><span className="text-gray-500 font-medium">Features</span></div>
            <div className="text-center bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl py-3 md:py-4 px-4 md:px-6"><span className="text-white font-bold text-base md:text-lg">Union Living</span></div>
            <div className="text-center bg-gray-100 rounded-xl py-3 md:py-4 px-4 md:px-6"><span className="text-gray-700 font-bold text-base md:text-lg">Traditional PG</span></div>
          </div>

          <div className="space-y-3 md:space-y-4">
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-center bg-gray-50 rounded-xl p-3 md:p-4 hover:bg-violet-50 transition-colors">
                <div className="text-center md:text-left">
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">{item.feature}</h4>
                  <p className="text-xs md:text-sm text-gray-500 hidden md:block">{item.description}</p>
                </div>
                <div className="flex justify-center">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${item.unionLiving ? 'bg-green-100' : 'bg-red-100'}`}>
                    {item.unionLiving ? <Check className="w-4 h-4 md:w-5 md:h-5 text-green-600" /> : <X className="w-4 h-4 md:w-5 md:h-5 text-red-500" />}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${item.traditionalPG ? 'bg-green-100' : 'bg-red-100'}`}>
                    {item.traditionalPG ? <Check className="w-4 h-4 md:w-5 md:h-5 text-green-600" /> : <X className="w-4 h-4 md:w-5 md:h-5 text-red-500" />}
                  </div>
                </div>
              </div>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  )
}

export default Comparison
