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
import img from '../../asset/delete/pixlr-image-generator-66b1a575-c32a-4ab7-8257-06a0fa1899fd.png'

export default function Header(){
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
                        // fontSize: '5vw',
                        color: TextColor,
                        /* when working without ref and classNames, the manipulated style needs to be
                         applied to the parent element, because the TypeAnimation component is perma-memoized */
                      }}
                    >
                        <TypeAnimation
                            preRenderFirstString={true}
                            sequence={[
                              // Same substring at the start will only be typed once, initially
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
                        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>logo amerika</p>
                    </div>
                </div>
                </Col>
                <Col md={6}>
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
                    <img src={img}/>
                    <h3 className='font-style fw-bold'>hamid</h3>
                    <p> kefhrjkefjf akfkjrbf sefkjrf kdfhkshfkdf kjhdfkjdhfkdfkj dfdsjfhksdfhkdsf dfhdksfhskf</p>
                  </SwiperSlide>
                </Swiper>
                </Col>
            </div>
            </div>
        </>
    )
}