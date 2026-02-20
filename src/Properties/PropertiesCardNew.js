import React from 'react'
import { Link } from 'react-router-dom'
const PropertiesCardNew = ({property}) => {
  return (
    <div className='h-[480px] md:h-[520px]'>
        <div className='h-full flex flex-col shadow-md bg-[#ebe3d67b] hover:shadow-xl rounded-lg my-3 lg:my-0'>

  <Link to={property.link || '#'} >
  
         <div className='px-3 py-3'>
            <img alt={property?.alt} className='w-full h-[200px] md:h-[260px] object-cover rounded-lg' src={property?.coverImage} />
        
       
             {/* <img className='w-full  rounded-lg ' alt='' src={property?.coverImage } loading='lazy' />  */}
         </div>
       
         </Link>

    <div className='flex-1 flex items-center px-3 lg:px-3 pb-3 pt-0 justify-between flex-col text-center'>
      <div className='w-full'>
        <Link to={property.link || '#'}><h4 className='font-[NeueMedium] text-[1.3rem] md:text-[1.6rem]' >{property?.name}</h4></Link>
        <h4 className='font-[NeueRegular] text-[0.95rem] md:text-[1.1rem]' >{property?.location}</h4>
        <p className="font-[NeueRegular] py-1 text-[1rem] md:text-[1.1rem] text-[#272727]">Starting From: <span className='text-[#FC7451] font-[NeueMedium]' > {property?.price} </span></p>
        <p className='font-[NeueRegular] mt-1 text-[0.95rem]' style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{property?.content}</p>
      </div>
      <div className='my-4'>
        <button onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))} className="uppercase flex items-center justify-center gap-3 rounded-lg shadow-md font-[NeueMedium] ease-in duration-300 text-[14px] md:text-[18px] hover:shadow-none hover:bg-[#272727] tracking-wider py-[6px] px-[24px] md:py-[8px] md:px-[24px] text-[#FFFEFC] bg-[#D64C27]">Book Now</button>
      </div>
        </div>
        </div>
    </div>
  )
}

export default PropertiesCardNew
