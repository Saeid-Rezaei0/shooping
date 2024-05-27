import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
const sponsorList = [
    {
    imgUrl: "/src/assets/images/sponsor/01.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/02.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/03.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/04.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/05.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/06.png",
    },
    ];
export default function Sponsor() {
    return (
        <>
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay={
                {
                    delay: 2000,
                    disableOnInteraction: false
                }
            }
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              400: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {sponsorList.map((val, i)=> (
         <SwiperSlide key={i}>
            <div className="sponsor-iten container ps-5" style={{paddingLeft: "4rem", paddingRight: "4rem"}}>
           <div className="sponsor-thumb">
            <img src={val.imgUrl} alt={val.imgUrl} />
           </div>
            </div>
         </SwiperSlide>
            ))}
          </Swiper>
        </>
      );
}
