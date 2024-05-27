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
import img1 from '../../asset/header/header1.jpg'
import img2 from '../../asset/header/header2.jpg'
import img3 from '../../asset/header/header3.jpg'
import img4 from '../../asset/header/header4.jpg'
import img5 from '../../asset/header/header5.jpg'
import img6 from '../../asset/header/header6.jpg'

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
        <SwiperSlide><img src={img1}/></SwiperSlide>
        <SwiperSlide><img src={img2}/></SwiperSlide>
        <SwiperSlide><img src={img3}/></SwiperSlide>
        <SwiperSlide><img src={img4}/></SwiperSlide>
        <SwiperSlide><img src={img5}/></SwiperSlide>
        <SwiperSlide><img src={img6}/></SwiperSlide>
        </Swiper>
    

    </div>
  );
}
