// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Header2.css'

// import required modules
import {Autoplay,Pagination, Navigation } from 'swiper/modules';

// img import
import img from '../../asset/delete/website1.png'
export default function Header2() {
  return (
    <div className='Header2'>
      <Swiper
        
        
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper-Header2"
      >
        <SwiperSlide><img src={img}/></SwiperSlide>
        <SwiperSlide><img src={img}/></SwiperSlide>
        <SwiperSlide><img src={img}/></SwiperSlide>
        <SwiperSlide><img src={img}/></SwiperSlide>
        <SwiperSlide><img src={img}/></SwiperSlide>

        </Swiper>
    

    </div>
  );
}
