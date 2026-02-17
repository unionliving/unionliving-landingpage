"use client"
import React from 'react'
import { PiLinkedinLogo, PiInstagramLogo, PiYoutubeLogo } from "react-icons/pi";
import { Link } from "react-router-dom"
const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <div id='contact' className='container max-w-8xl mx-auto px-4 pt-12 lg:pt-16'>
      <div className='bg-[#ebe3d654] rounded-2xl p-6 md:p-10 shadow-lg'>
        <div className='grid md:grid-cols-4 gap-6 text-center md:text-left'>
          <div >
            <img className='w-[140px] md:w-[160px] justify-self-center md:justify-self-start' src="/assets/logoblack.webp" alt="Union Living" />
            <p className='font-[NeueRegular] text-sm md:text-base text-[#272727] mt-2'>Live Easy, Live United</p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-[#D64C27] hover:bg-[#c44422] text-white px-4 py-2 text-sm md:text-base"
            >
              Book Now
            </button>
          </div>

          <div>
            <h3 className='font-[NeueMedium] text-[#272727] text-lg md:text-xl mb-2'>Sitemap</h3>
            <div className='space-y-2 text-sm md:text-base font-[NeueRegular]'>
              <Link to="/" className='block text-[#272727] hover:text-black'>Home</Link>
              <a href="https://www.unionliving.in/properties" className='block text-[#272727] hover:text-black'>Properties</a>
              <a href="https://www.unionliving.in/community" className='block text-[#272727] hover:text-black'>Community</a>
              <a href="https://www.unionliving.in/ourstory" className='block text-[#272727] hover:text-black'>Our Story</a>
              <a href="https://www.unionliving.in/blogs" className='block text-[#272727] hover:text-black'>Our Blogs</a>
            </div>
          </div>

          <div>
            <h3 className='font-[NeueMedium] text-[#272727] text-lg md:text-xl mb-2'>Important Links</h3>
            <div className='space-y-2 text-sm md:text-base font-[NeueRegular]'>
              <a href="https://www.unionliving.in/onboardingpolicy" className='block text-[#272727] hover:text-black'>Rules and Regulations</a>
              <a href="https://www.unionliving.in/termsandcondition" className='block text-[#272727] hover:text-black'>Terms and Condition</a>
              <a href="https://www.unionliving.in/privacy-policy" className='block text-[#272727] hover:text-black'>Privacy Policy</a>
            </div>
          </div>

          <div>
            <h3 className='font-[NeueMedium] text-[#272727] text-lg md:text-xl mb-2'>Contact</h3>
            <div className='text-sm md:text-base font-[NeueRegular] text-[#272727] space-y-2'>
              <p><span className='font-[NeueMedium]'>General Enquiry</span><br /><a href='mailto:info@unionliving.in' className='hover:underline'>info@unionliving.in</a></p>
              <p><span className='font-[NeueMedium]'>Support</span><br /><a href='mailto:support@unionliving.in' className='hover:underline'>support@unionliving.in</a></p>
              <a href="tel:+919137915406" className='block mt-2'>+91 91379 15406</a>
            </div>
            <div className='flex items-center gap-4 mt-4 justify-start'>
              <a target='_blank' rel='noreferrer' href='https://www.instagram.com/union_living/?hl=en'> <PiInstagramLogo className='text-[22px]' /></a>
              <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/company/union-living/'> <PiLinkedinLogo className='text-[22px]' /></a>
              <a target='_blank' rel='noreferrer' href='https://www.youtube.com/@unioncoliving'>  <PiYoutubeLogo className='text-[22px]' /> </a>
            </div>
          </div>
        </div>

        <div className='border-t border-black/10 mt-8 pt-6 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0'>
          <p className='font-[NeueRegular] text-sm md:text-base text-[#272727]'>© {date} Union Living. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
