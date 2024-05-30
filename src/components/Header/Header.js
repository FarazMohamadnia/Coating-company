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
import img from '../../asset/aboutUs/nucoatingblackLogo.png'
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
                              'Expect from us your wildest designs',
                              2000,
                              () => setTextColor('white'),
                              'Expect from us the best ',
                              2000,
                              () => setTextColor('white'),
                              'Expect from us what you desire ',
                              2000,
                              () => setTextColor('white'),
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                    <div className='d-md-flex d-md-block w-100 justify-content-between'>
                        <p className='description' data-aos="fade-right">
                        The nucoating team provides the best color services in the fastest time and at the best price in the state of Maryland, America. Our team with a brilliant history in the coating area in all branches (automotive - building materials, etc.) is ready to serve people who want the highest quality and we try to provide the best as soon as possible. Provide services.  
                        Expect the best from the best
                        To receive services from us, be sure to go to the get a quote section and enter your information so that we can contact you as soon as possible.
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
                    <h3 className='font-style fw-bold'>Ownership</h3>
                    <p>
                      Here at nucoating, which is managed by the partnership of Oveis and Shayan, they have  years of experience in this work and specialize in providing the best. Order and punctuality and customer satisfaction are our main demands. Our effort and goal as the manager of the powder coating team is to make every person who received services from us completely satisfied and to give them a full guarantee for providing all kinds of services. We established the Powdercoatin team in 2024 to provide services to people who want to receive the best services from the most specialized people. You can use email and contact number to contact our team.
                    </p>
                  </SwiperSlide>
                </Swiper>
                </Col>
            </div>
            </div>
        </>
    )
}