import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Data from './Data.json';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../Category/Category.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Category() {
  const navigate=useNavigate()
  return (
    <>
    <h1 className="heading">Categories</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >

        {Data.map((result,index)=>(
          <SwiperSlide key={index}>
            <img src={result.img} alt='category' onClick={()=>navigate(`/categoryproducts/${result.title}`)}/>
            <p className="text">{result.title}</p>
        </SwiperSlide>
        ))}
        
       
      </Swiper>
    </>
  );
}

