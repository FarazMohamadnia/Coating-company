import { Col } from 'react-bootstrap';
import NavScrollExample from '../../components/Nav/Navbar'
import './colors.css'
import { IoIosColorPalette } from "react-icons/io";
import { useEffect, useState } from 'react';

import { getCardColor } from '../../config/test/apiTest';
import axios from 'axios';
import Loading from '../../components/Loading/loading';
import CardColor from '../../components/Pcolor2/Pcolor2.js';
import img from '../../asset/delete/pixlr-image-generator-66b1a575-c32a-4ab7-8257-06a0fa1899fd.png'
import Footer from '../../components/Footer/footer.js';


export default function Colors(){
    const [colorsData , setcolorsData] = useState([])
    const [pagesLoading , setpagesLoading] = useState(true)
    const getColors =async ()=>{
        const response =  await axios.get(getCardColor);
        setcolorsData(response.data.data);
        setpagesLoading(false)
    }

    console.log(colorsData)
    useEffect(()=>{
        getColors()
    },[])
    return(
        <>
            <div>
                <NavScrollExample />
                <h1 className='w-100 text-center mt-4 text-light font-style fw-bold'>Coating Colors<IoIosColorPalette /></h1>
                <div className='d-flex color-card-container'>
                    <Col className='color-card-list d-none d-md-block' md={3}>
                        <h3 className='text-center mt-2 text-light'>Colors</h3>
                        <div>
                            
                                {
                                    colorsData.map(data => {
                                        return <p className='color-type-section my-4'>{data.title}<img src={data.photo} /></p>
                                    })
                                }
                            
                        </div>
                    </Col>
                    <Col className='color-card-view'>
                        {pagesLoading ? 
                            <Loading />
                            :
                            colorsData.map((data) =>{
                                return <CardColor {...data}/>
                            }) 

                        }
                    </Col>

                </div>
            <Footer />
            </div>
        </>
    )
}