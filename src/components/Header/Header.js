import { useState } from 'react';
import './Header.css'
// react bootstrap
import Col from 'react-bootstrap/Col';
//animatio text import
import { TypeAnimation } from 'react-type-animation';

//swiper packeage
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

// import images
import img from '../../asset/aboutUs/IMAGE 2024-05-20 23:25:01.jpg'
import img2 from '../../asset/aboutUs/IMAGE 2024-05-20 23:25:07.jpg'
// aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Header(){
    AOS.init({
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 700, 
    });
    const[TextColor , setTextColor]=useState('black')
    return(
        <>
            <div className='header-section d-md-flex justify-center align-center'>
            <div className='d-md-flex w-100 h-100 justify-content-center align-items-center'>
                <Col md={6}>
                <div className='header-title  d-flex flex-column align-items-start'>
                    <div
                        className='title-fontSize font-style fw-bold'
                        style={{
                          fontSize: '18px',
                          color: TextColor,
                        }}
                    >
                        <TypeAnimation
                            preRenderFirstString={true}
                            sequence={[
                              'We produce food for Mice',
                              2000,
                              () => setTextColor('white'),
                              'We produce food for Hamsters',
                              2000,
                              () => setTextColor('white'),
                              'We produce food for Chinchil',
                              2000,
                              () => setTextColor('white'),
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                    <div className='d-md-flex d-md-block w-100 justify-content-between'>
                        <p className='description' data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          <Link to={'/getQuote'}><Button className='mt-3 d-block w-100'>Request a Quote</Button></Link>
                        </p>
                        
                    </div>
                </div>
                </Col>
                <Col md={6} data-aos="zoom-in">
                <Swiper
                  effect={'flip'}
                  grabCursor={true}
                  pagination={true}
                  navigation={true}
                  modules={[EffectFlip, Pagination, Navigation]}
                  className="swiper-personaliti-sectiopn"
                >
                  <SwiperSlide>
                    <img src={img}/>
                    <h3 className='font-style fw-bold'>shayan</h3>
                    <p> kefhrjkefjf akfkjrbf sefkjrf</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={img2}/>
                    <h3 className='font-style fw-bold'>Oveis</h3>
                    <p> kefhrjkefjf akfkjrbf sefkjrf kdfhkshfkdf kjhdfkjdhfkdfkj dfdsjfhksdfhkdsf dfhdksfhskf</p>
                  </SwiperSlide>
                </Swiper>
                </Col>
            </div>
            </div>
        </>
    )
}