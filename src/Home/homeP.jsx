import { useRef, useState } from 'react';
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
import Container from 'react-bootstrap/esm/Container';



function Homepage(){
    const [scrollX, setscrollX] = useState(0)
    let scrl = useRef();
    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setscrollX(scrollX + shift);
    }
    
    
    //colorData
    const ColorData1 = DataColor1;
    const ColorData2 = DataColor2;
    const ColorData3 = DataColor3;



    return(
        <>
            <div>
                <Navbar/>
            </div>
            <div>
                <Header2 />
            </div>
            <div className='Advertising-story-container' ref={scrl}>
                <span  onClick={()=>slide(-120)} className='icon-left'><BsArrowLeftCircleFill size={'30px'}/></span>
                <AdvertisingStory /> <AdvertisingStory /> <AdvertisingStory /> <AdvertisingStory /> <AdvertisingStory /> <AdvertisingStory /> <AdvertisingStory /> <AdvertisingStory /> <AdvertisingStory /> <AdvertisingStory /> <AdvertisingStory />
                <span onClick={() => slide(+120)} className='icon-right'><BsArrowRightCircleFill size={'30px'} /></span>
            </div>
            <div>
                <Header />
            </div>
            <div>
                <Des/>
            </div>
            <div>
                <Marquee>
                    <div className='d-flex'>
                        {
                            ColorData1.map((data)=><Pcolor key={data.color} {...data} />
                            ) 
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
        </>
    )
}
export default Homepage;