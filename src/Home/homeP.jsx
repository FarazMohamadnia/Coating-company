import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header/Header';
import Header2 from '../components/Header2/Header2';
import Navbar from '../components/Nav/Navbar';
import AdvertisingStory from '../components/Story/Story';
import './Home.css';
// icons
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
// component
import Des from '../components/des1/des';
import Pcolor from '../components/Pcolor/Pcolor';
//
import Marquee from "react-fast-marquee";
import { DataColor1 ,DataColor2, DataColor3} from '../components/Pcolor/colorData';
import ControlledTabs from '../components/Tabs/Tabs';
import Socialmedia from '../components/SocialMedia/SocialMedia';
import Pcolor2 from '../components/Pcolor2/Pcolor2';
import Loading from '../components/Loading/loading.js';
import Footer from '../components/Footer/footer.js';
import { getColorData, getStory } from '../config/api/apis.js';
import axios from 'axios';
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

//animation
import AOS from 'aos';
import 'aos/dist/aos.css';



function Homepage(){
    // animation config
    AOS.init();
    // State 
    const [scrollX, setscrollX] = useState(0)
    const [loading , setloading]=useState(true)
    const [StoryData , setStoryData]=useState([]);
    const [storyLoading , setstoryLoading] = useState(true);
    const [ColorsData , setColorsData]=useState([])

    let scrl = useRef();
    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setscrollX(scrollX + shift);
    }
    
    
    //colorData
    const ColorData1 = DataColor1;
    const ColorData2 = DataColor2;
    const ColorData3 = DataColor3;

    // getStorys
    const getStorys = async ()=>{
        const response = await axios.get(getStory);
        setStoryData(response.data.data)
        setstoryLoading(false)
    }

    // get colors data
    const getColorsData = async()=>{
        const response =await axios.get(getColorData);
        setColorsData(response.data.data);
    }
    
    useEffect(()=>{
        setTimeout(() => {
            setloading(false)
        }, 5 * 1000);

        // data fetching
        getStorys();
        getColorsData();
    },[])
    return(
        <>
        {loading ? <Loading /> :
        <div>  
            <div>
                <Navbar/>
            </div>
            <div>
                <Header2 />
            </div>
            <div className='Advertising-story-container pb-4' ref={scrl}>
                <span  onClick={()=>slide(-120)} className='icon-left'><BsArrowLeftCircleFill size={'30px'}/></span>
                {storyLoading ? 
                <p className='w-100 text-center fs-3'>loading...</p>
                    :
                    StoryData.map(data =>{
                        return <AdvertisingStory {...data}/>
                    })
                }
                <span onClick={() => slide(+120)} className='icon-right'><BsArrowRightCircleFill size={'30px'} /></span>
            </div>
            <div>
                <Header />
            </div>
            <div>
                <Des/>
            </div>
            <div className='Pcolor2-style'>
                <h1 data-aos="zoom-in" className='font-style fw-bold text-center text-light'>Color Palette</h1>
                <div className=''>
                    <div  className='pcolor2-body-styles'>
                        <span className='pcolor2-body-styles-span'><Link to={'/Color'}><FaArrowCircleLeft color='black' size={'2rem'}/></Link>
                        <p className='font-style'>More</p>
                        </span>
                        <div className='d-flex'>
                            {
                                ColorsData.filter(data=>  data.type =='white').map(data => <Pcolor2 {...data}/>)
                            }
                        </div> 
                    </div>
                    <div className='pcolor2-body-styles'>
                        <span className='pcolor2-body-styles-span'><Link to={'/Color'}><FaArrowCircleLeft color='black' size={'2rem'}/></Link>
                        <p className='font-style'>More</p>
                        </span>
                        <div className='d-flex'>
                            {
                                ColorsData.filter(data=>  data.type =='black').map(data => <Pcolor2 {...data}/>)
                            } 
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-4'>
                <Marquee>
                    <div className='d-flex'>
                        {
                            ColorData1.map((data)=><Pcolor key={data.color} {...data} />) 
                        }
                    </div>
                </Marquee>
                <Marquee direction="right">
                    <div className='d-flex'>
                    {
                        ColorData2.map((data)=><Pcolor key={data.color} {...data} />
                        ) 
                    }
                    </div>
                </Marquee>
                <Marquee direction="left">
                    <div className='d-flex'>
                    {
                        ColorData3.map((data)=><Pcolor key={data.color} {...data} />
                        ) 
                    }
                    </div>
                </Marquee>
            </div>
            <div>
                <ControlledTabs />
            </div>
            <div>
                <Socialmedia/>
            </div>
            <Footer />
        </div>
        }
        </>
    )
}
export default Homepage;