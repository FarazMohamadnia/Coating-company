import { useEffect, useState } from "react";
import NavScrollExample from "../../components/Nav/Navbar";
import FeedbackCard from "../../components/feedbackCard/feedback";
import './feedback.css'
// mui lib
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import LoadingButton from '@mui/lab/LoadingButton';


//react bootstrap 
import Form from 'react-bootstrap/Form';


import { BsFillXCircleFill } from "react-icons/bs";
import axios from "axios";
import { getComments } from "../../config/api/apis";
import Swal from "sweetalert2";

import { VscCommentDiscussion } from "react-icons/vsc";
import { MdError } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";
import Loading from "../../components/Loading/loading";
import Footer from "../../components/Footer/footer";


export default function Feedback(){
    const [modal , setmodal]=useState(false);
    const [receiveData , setreceiveData]= useState([]);
    const [Data , setData]=useState([]);
    const [senDataTimeStamp , setsenDataTimeStamp] = useState(true);
    const [loading , setloading] = useState(true);
    const [activeBTN , setactiveBTN] = useState(false)

    const openModal = ()=>{
        if(modal){
            setmodal(false);
        }else{
            setmodal(true);
        }
    }

    const getCommnetData = async()=>{
        const response = await axios.get(getComments);
        setreceiveData(response.data.data)
        setloading(false);
    }

    const saveData = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setData({
            ...Data ,
            [name]:value
        })
    }

    const sendData =async ()=>{ 
        if(senDataTimeStamp){
            setactiveBTN(true)
            let response = await axios.post(getComments , Data);
            setactiveBTN(false)
            if(response.data.message === 'ok'){
                setactiveBTN(true)
                Swal.fire({
                    title: "Send",
                    text: "Comment sent successfully.",
                    icon: "success"
                });
                setsenDataTimeStamp(false);
                setTimeout(() => {
                    setsenDataTimeStamp(true);
                }, 5 * 60 * 1000);
            }else if(response.data.message === 'error'){
                setactiveBTN(false)
                Swal.fire({
                    title: "Error",
                    text: "Please try again !",
                    icon: "error"
                });
            }
        }else{
            Swal.fire({
                title: "Please pay attention.",
                text: "refrain from posting excessive comments.",
                icon: "error"
            });
        }
    }

    useEffect(()=>{
        getCommnetData()
    },[])

    return(
        <div className="feedback-container">
            <NavScrollExample />
            <div className="feedback-header">
               <h1 className="text-light m-auto my-3 font-style fw-bold text-center">
                Comments & Feedback <VscCommentDiscussion size={'3rem'}/>
               </h1>
               <p className="text-light m-auto my-3 font-style fw-bold text-center">
                In this section, you are free to express your comments and questions freely.
               </p>
            </div>
            <div className="feedback-body">
            {loading ? <Loading />:
                receiveData.map((data) => 
                <div> <FeedbackCard {...data}/></div>
                )
            }  
            
            </div>
            <span onClick={openModal} className="open-modal-button">
                <Fab color="error" aria-label="edit">
                  <EditIcon />
                </Fab>
            </span>
            {modal &&
                <div className="form-modal-body">
                    <div className="position-relative">
                        <span onClick={openModal} className="exit-form-button"><BsFillXCircleFill color="white" size={'2.5rem'}/></span>
                        <div className="wh-100 vh-100 d-flex justify-content-center align-items-center">
                            <div className="form-section-modal-body">
                                <h1 className="font-style fw-bold text-center">Leave a Review</h1>
                                <p className="form-description">
                                    <br/>
                                    <IoIosWarning size={'18px'} color="yellow"/>-Please ensure the following points before submitting a comment:
                                    <br/>
                                    <br/>
                                    <MdError color="red" size={'15px'}/>-Both the title and text inputs must contain more than five characters.
                                    <br/> 
                                    <MdError color="red" size={'15px'}/>-The title input can accept a maximum of 250 characters, and the text input can accept up to 4000 characters.
                                    <br/> 
                                    <MdError color="red" size={'15px'}/>-Note that you cannot submit comments consecutively.
                                </p>
                                <div className="mt-2">
                                    <Form>
                                      <Form.Group name="title" className="mb-3 text-start font-style fw-bold" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control onChange={saveData} type="text" name="title" placeholder="Title" />
                                      </Form.Group>
                                      <Form.Group className="mb-3 text-start font-style fw-bold" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control onChange={saveData} name="text" as="textarea" rows={3} />
                                      </Form.Group>
                                    </Form>
                                </div>
                        
                                <LoadingButton onClick={sendData} disabled={activeBTN} className="w-75 mt-5" loadingIndicator="Loading…" variant="contained" color="error">
                                  Submit
                                </LoadingButton>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <Footer />
        </div>
    )
}