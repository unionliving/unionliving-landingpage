import { useEffect, useState } from 'react'
import { Check, X } from 'lucide-react'
function ThankYouModal() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-thankyou-modal', handler)
    return () => window.removeEventListener('open-thankyou-modal', handler)
  }, [])
  useEffect(() => {
    if (open && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-11425120901/6RJQCPGuuvsbEIWF9scq',
        value: 1.0,
        currency: 'INR',
      })
    }
  }, [open])
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [])
  if (!open) return null
  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true">
      <div onClick={() => setOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 relative">
          <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Get Free Consultation</h2>
            <p className="text-gray-500">Fill the form and our expert will call you within 2 hours</p>
            <div className="mx-auto w-14 h-14 rounded-full bg-green-100 flex items-center justify-center my-5">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-lg font-semibold text-gray-900">Enquiry submitted</p>
            <p className="text-sm text-gray-500 mt-1">Our team will reach out shortly</p>
            <button onClick={() => setOpen(false)} className="mt-6 w-full py-3 bg-[#D64C27] text-white rounded-xl">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ThankYouModal
