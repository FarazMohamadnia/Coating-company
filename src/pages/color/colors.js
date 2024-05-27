import { Col } from 'react-bootstrap';
import NavScrollExample from '../../components/Nav/Navbar'
import './colors.css'
import { IoIosColorPalette } from "react-icons/io";
import { useEffect, useState } from 'react';

import { getCardColor } from '../../config/api/apis';
import axios from 'axios';
import Loading from '../../components/Loading/loading';
import CardColor from '../../components/Pcolor2/Pcolor2.js';
import Footer from '../../components/Footer/footer.js';


export default function Colors(){
    const [colorsData , setcolorsData] = useState([])
    const [pagesLoading , setpagesLoading] = useState(true);
    const [words , setwords]= useState([]);
    const [checkWordsLoop , setcheckWordsLoop] = useState(true);
    const [filterColor , setfilterColor] = useState('')

    const getColors =async ()=>{
        const response =  await axios.get(getCardColor);
        setcolorsData(response.data.data);
        setpagesLoading(false)
    }

    const handleAddWord = () => {
        let halfLength;
        if(checkWordsLoop == true){
            for (const key in colorsData) {
              const type = colorsData[key].type;
              if (!words[type]) {
                let newWord = words[type] = colorsData[key];
                halfLength = Math.ceil(newWord.length / 2);
                words.push(newWord)
              }
            }
        }
        words.slice(halfLength)
        setcheckWordsLoop(false);
    };

    const filterHanddler = (e)=>{
        setfilterColor(e.target.firstChild.data)
    }

    if(pagesLoading == false && checkWordsLoop == true){
        handleAddWord();
    }

    useEffect(()=>{
        getColors();
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
                                words.map(data =>{return <p onClick={filterHanddler} className='color-type-section mt-4'>{data.type} <img src={data.Photo}/></p>})
                            }
                        </div>
                    </Col>
                    <Col className='color-card-view'>
                        {pagesLoading ? 
                            <Loading />
                            :
                            filterColor == ''?
                            colorsData.map((data) =>{
                                return <CardColor {...data}/>
                            })
                            :
                            colorsData.map((data) =>{
                                return <CardColor {...data}/>
                            }).filter(data => data.props.type == filterColor)

                        }
                    </Col>

                </div>
            <Footer />
            </div>
        </>
    )
}