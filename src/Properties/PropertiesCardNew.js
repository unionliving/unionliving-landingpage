import React from 'react'
import { Link } from 'react-router-dom'
const PropertiesCardNew = ({property}) => {
  return (
    <div className='min-h-[500px] '  >
        <div className='shadow-md bg-[#ebe3d67b]   hover:shadow-xl rounded-lg my-3 lg:my-0' >

  <Link to={property.link || '#'} >
  
         <div className='px-3   py-3' >
            <img  alt={property?.alt} className='w-full h-[220px] lg:h-[300px] object-cover rounded-lg' src={property?.coverImage} />
        
       
             {/* <img className='w-full  rounded-lg ' alt='' src={property?.coverImage } loading='lazy' />  */}
         </div>
       
         </Link>

    <div className='my-0 flex items-center px-3 lg:px-3 py-3 justify-center flex-col text-center' >
    <Link to={property.link || '#'} >   <h4 className='font-[NeueMedium] text-[1.8rem]' >{property?.name}</h4> </Link>
            <h4 className='font-[NeueRegular] text-[1rem]' >{property?.location}</h4>
            <p className="font-[NeueRegular]  py-1 text-[1.4rem] text-[#272727]" >Starting From: <span className='text-[#FC7451] font-[NeueMedium]' > {property?.price} </span></p>
            <p className='font-[NeueRegular] mt-1 ' >{property?.content.slice(0,95)}...</p>
            <div className='my-6' >
            <Link to={property.link || '#'} > <button className="uppercase flex items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueMedium] ease-in duration-300  text-[14px] md:text-[18px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[6px] px-[24px] md:py-[8px] md:px-[24px] text-[#FFFEFC] bg-[#D64C27]" >Book Now  </button> </Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PropertiesCardNew
