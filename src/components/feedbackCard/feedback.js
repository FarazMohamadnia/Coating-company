import './feedback.css'
//import icon
import { FaCircleQuestion } from "react-icons/fa6";
// date-fns Lib
import { differenceInDays, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import { ConstructionOutlined } from '@mui/icons-material';


export default function FeedbackCard({title , text , createdAt , replies }){
    const [daysPassed, setDaysPassed] = useState(0);
    const [rpDate , setrpDate] = useState([]);
    const [Existence , setExistence] =useState(true)

    const setNewReplies =()=>{
        setExistence(false)  
        if(replies.length > 0){     
        replies.forEach(element =>{
                let currentDate = new Date();
                const setTime = element.rpcreatedAt
                rpDate.push({rpcreatedAt : setTime , rptext : element.rptext, rptitle : element.rptitle , _id : element._id});
                let parsedCommentDate =parseISO(element.rpcreatedAt);
                let days = differenceInDays(currentDate , parsedCommentDate);
                element.rpcreatedAt = `${days}`   
            });
        }
        console.log(rpDate)   
    } 

    if(Existence){
        setNewReplies()
    }
    


    function checkTime(commentDate){
        const currentDate = new Date();
        const parsedCommentDate = parseISO(commentDate);
        let days = differenceInDays(currentDate, parsedCommentDate);
        if(days == 0){
            days = 'Today'
        }else if(days == 1){
            days = 'yesterday'
        }else{
            days = days+'days ago'
        }   
        setDaysPassed(days);
    }

    useEffect(()=>{
        checkTime(createdAt)
    },[createdAt])



    return(
        <div className="card">
          <div className="content">
            <div>
                <span className='feedback-icon'><FaCircleQuestion size={'2rem'} /></span>
                <span className='Date-card-section font-style'>{daysPassed}</span>
                <h2 className='font-style fw-bold'>{title}</h2>
                <p className="para">
                    {text}
                </p>
            </div>
            {rpDate &&
                rpDate.map(data => 
                    <div className='answer-owner'>
                        <h2 className='font-style fw-bold'>{data.rptitle}</h2>
                        <p className="para">
                            {data.rptext}
                        </p>
                        <span className='owner-date-card-section font-style'>
                        {data.rpcreatedAt}days ago
                        </span>
                    </div>
                )
                
            }
          </div>
        </div>

    )
}