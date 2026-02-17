import React, { Suspense } from 'react'
import PropertiesCardNew from '../Properties/PropertiesCardNew'
import { activeProduct } from '../data/PropertyList.js'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import PropertyLoadingCard from '../Properties/PropertyLoadingCard';
const PropertiesList = () => {
  return (
    <div className='lg:mx-6 mx-0 px-6 lg:pt-12 lg:pb-12  '>
         <h3 className='font-[NeueBold] text-[1.4rem] lg:text-[2.8rem]' >Our Properties</h3>
              <Swiper
          spaceBetween={30}
          className="mt-6"
          draggable={true}
          breakpoints={{
            350: {
          width: 450,
          slidesPerView: 1.5,
        },
            450: {
          width: 450,
          slidesPerView: 1.5,
        },
        576: {
          width: 576,
          slidesPerView: 2,
        },
        780: {
          width: 780,
          slidesPerView: 3,
        },
         1200: {
          width: 1200,
          slidesPerView: 3.5,
        },
       
         1440:{
          width:1440,
          slidesPerView:3
        }
      }}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >

    {activeProduct && activeProduct?.map((property,key)=>(
    <SwiperSlide>
    <Suspense fallback={<PropertyLoadingCard />} >
        <PropertiesCardNew property={property}  />
        </Suspense>
        </SwiperSlide>
    ))}
        </Swiper>
    </div>
  )
}

export default PropertiesList
