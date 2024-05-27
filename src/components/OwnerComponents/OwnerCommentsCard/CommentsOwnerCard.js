import { Button } from 'react-bootstrap'
import './CommentsOwnerCard.css'
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from 'axios';
import { getComments } from '../../../config/api/apis';
import Cookies from 'js-cookie';
import { secretKey } from '../../../config/secData';
import CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';
import { useState } from 'react';

export default function CommentsOwnerCard({title , text , createdAt , replies , _id}){
    const [open , setopen]=useState(false)
    const [commentsData , setcommentsData] = useState([]);

    const DeHashFunction = ()=>{
        const Auth = Cookies.get('Authorization');
        const newsecretKey = secretKey;
        const bytes = CryptoJS.AES.decrypt(Auth , newsecretKey);
        const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedText
    }

    const openModalHanddler =()=>{
        if(open){
            setopen(false)
        }else{
            setopen(true)
        }
    }

    const deleteComments = ()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this comment?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                deleteItem()
                setTimeout(() => {
                    window.location.reload()
                }, 3000);
            }
          });
    }


    const deleteItem = async()=>{
        const Token = DeHashFunction();

        const response = await axios.delete(`${getComments}/${_id}`,{
        headers :{
            Authorization : Token
        }});
        if(response.status == 201){
            Swal.fire({
                title: "Deleted !! ",
                text: "deleted item ...",
                icon: "success"
              });
        }else{
            Swal.fire({
                title: "Error!!",
                text: "The user has not been deleted",
                icon: "error"
              });
        }
        
    }

    const nswerHandeller = (e)=>{
        const name = e.target.name
        const value = e.target.value

        setcommentsData({
            ...commentsData , 
            [name] : value
        })
    }

    const Sendanswering = async()=>{
        const Token = DeHashFunction();
        const response = await axios.put(`${getComments}/${_id}`,commentsData,{
            headers :{
                Authorization : Token
            }});
            
            if(response.status == 201){
                Swal.fire({
                    title: "Ok !!",
                    text: "Send answering to this comments",
                    icon: "success"
                  });
                  setTimeout(() => {
                    window.location.reload();
              }, 3500);
            }else{
                Swal.fire({
                    title: "Error!!",
                    text: "The comments has not send",
                    icon: "error"
                  });
            }
                    
    }

    const deleteReplies = async (e)=>{
        const Token = DeHashFunction();
        if(replies.length >= 0){
            const response = await axios.delete(`${getComments}/${_id}/replies/${replies[0]._id}`,{
                headers :{
                    Authorization : Token
                }
            });

            if(response.status == 201){
                Swal.fire({
                    title: "Deleted",
                    text: "deleted youre replies comments",
                    icon: "success"
                  });
                  setTimeout(() => {
                        window.location.reload();
                  }, 3500);
            }else{
                Swal.fire({
                    title: "Error!!",
                    text: "The comments has not Deleted",
                    icon: "error"
                  });
            }
        }

        
    }
    
    return(
        <>
            <div className="comments-data-container">
                <p onClick={deleteComments} className='text-center'><IoCloseCircleOutline color='red' size={'2.5rem'} /></p>
                <div className='overflow-for-commnets-replies'>
                    <div>
                        <p>{title}</p>
                        <p>{text}</p>
                        <p>{createdAt}</p>
                    </div>
                    <hr/>
                    <div>
                    {
                        replies.map(data => {
                            return<div>
                                <p className='font-style fw-bold'>Youre replies :</p>
                                <hr/>
                                <p>{data.rptitle}</p>
                                <p>{data.rptext}</p>
                                <p>{data.rpcreatedAt}</p>
                            </div>
                        })
                    }

                    </div>
                </div>
                {
                    replies[0] ? <Button className='bg-danger w-100' onClick={deleteReplies}>Delete replies</Button> : ''
                }
                <Button onClick={openModalHanddler} className='d-block w-100 mt-2'>answering</Button>
                <div className={`commnet-form-for-owner ${open ? 'd-block' : 'd-none'}`}>
                    <p className='m-2' onClick={openModalHanddler}><IoCloseCircleOutline color='red' size={'2.5rem'} /></p>
                    <div className='d-flex justify-content-center align-items-center w-100 h-100'>
                        <div className='comments-form-body-for-Owner'>
                            <p className='font-style fw-bold text-center mt-4'>Send a reply to this comment</p>

                            <div class="form-group w-75 m-auto">
                                <label className='mt-3' for="exampleInputEmail1">Title</label>
                                <input onChange={nswerHandeller} name='rptitle' type="text" class="form-control" id="exampleInputEmail1" placeholder="Title example" />
                                <label className='mt-3' for="exampleFormControlTextarea1">Text</label>
                                <textarea onChange={nswerHandeller} name='rptext' class="form-control" id="exampleFormControlTextarea1" rows="3" />
                                <Button onClick={Sendanswering} className='mt-5 w-100'>Send</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}