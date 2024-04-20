import './Story.css'
import img from '../../asset/delete/pixlr-image-generator-66b1a575-c32a-4ab7-8257-06a0fa1899fd.png'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useRef, useState } from 'react'


export default function AdvertisingStory({img1 , img2}){
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
            console.log('ssss')
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
        
            <div>
                <img src={img} ref={BorderAnimationStop} className='Advertising-storys-img border-animation' onClick={openBtnHandler}/>   
            </div>
            <div ref={closebtn} className='Show-Advertising-storys d-none'>
                <span className='Show-Time-Story' style={{width:`${storyTime}%`}}></span>
                <span onClick={closeBtnHandler} className='Show-Advertising-story-span'>
                    <AiFillCloseCircle size={'50px'} color={'white'}/>
                </span>
                <img src={img}/>
            </div>
        </>
    )
}