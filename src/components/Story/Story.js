import './Story.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useRef, useState } from 'react'
// animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function AdvertisingStory({image1 , image2}){
    const closebtn = useRef()
    const BorderAnimationStop = useRef()
    let time = 0
    let setTime
    const [storyTime, setstoryTime] = useState(time)
    const [activeStory , setactiveStory] = useState(true)
    
    const closeBtnHandler = ()=>{
        //Error handling => Prevent reruns
        if(!closebtn.current.className.includes('d-none')){
            closebtn.current.classList.add('d-none')
        } 
        setactiveStory(false)
        clearInterval(setTime)
        time=0 
        setstoryTime(0)
    }
    
    const openBtnHandler = ()=>{
        BorderAnimationStop.current.classList.remove('border-animation')
        closebtn.current.classList.remove('d-none')
        if(activeStory === true){
            setTime = setInterval(TimeStoryhandler, 10)
            setactiveStory(false)
            setTimeout(()=>{
                closeBtnHandler()
                setactiveStory(true)
            },15000)
        }
        
    }
    
    function TimeStoryhandler(){
        time += 0.06666667
        setstoryTime(time)  
    }
    
    
    return(
        <>
        
            <div data-aos="zoom-in">
                <img src={image1} ref={BorderAnimationStop} className='Advertising-storys-img border-animation' onClick={openBtnHandler}/>   
            </div>
            <div ref={closebtn} className='Show-Advertising-storys d-none'>
                <span className='Show-Time-Story' style={{width:`${storyTime}%`}}></span>
                <span onClick={closeBtnHandler} className='Show-Advertising-story-span'>
                    <AiFillCloseCircle size={'50px'} color={'white'}/>
                </span>
                <img src={image2}/>
            </div>
        </>
    )
}