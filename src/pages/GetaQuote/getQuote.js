import './getQuote.css'
import NavScrollExample from '../../components/Nav/Navbar';
// mui lib
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Switch from '@mui/material/Switch';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {styled} from '@mui/material/styles';

import { useState } from 'react';
// post Api
import { PostQuote } from '../../config/test/apiTest';
//axios Lib
import axios from 'axios';
// sweet alert Lib
import Swal from 'sweetalert2'
function GetQuote() {
    // upload file config
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

    // 
    const [loading, setLoading] = useState(false);
    const [dropDownList , setdropDownList]= useState(true);
    const [Image , setImage] = useState('');
    const [Data , setData] = useState({
        firstName : '' ,
        lastName : '' ,
        email : '' ,
        phoneNumber : '' ,
        jobDescription : '' ,
        details:[{
            quantity : 0 ,
            color : '' ,
            dimensions : '' ,
            weight : 0 ,
            photo : '' 
        }]
    });
    const dropDownListFunction = (e)=>{
        const value = !e.target.checked;
        setdropDownList(value);
    }

    const imageHandller = (e)=>{
        const value = e.target.files[0];
        const objectUrl = URL.createObjectURL(value);
        setImage(objectUrl)
        setData({
            ...Data , details:[{
                ...Data.details[0] ,
                photo : objectUrl
            }]
        })
        console.log(Data);
    }

    const DataHandller = (e)=>{
        const value = e.target.value
        const names = e.target.name
        console.log(value +'++++++', names);
            setData({
                ...Data  , [names] : value 
            })
        console.log(Data)
    }

    const DetailsHandller = (e)=>{
        const names = e.target.name 
        const value = e.target.value
            setData({
                ...Data , details:[{
                    ...Data.details[0] ,
                    [names]:value
                }]
            })
        console.log(Data)
    }

    const SendData =async()=>{
        setLoading(true)
        const response = await axios.post(PostQuote ,Data);
        setLoading(false)
        if(response.data.message == 'Error'){
            console.log(response.data.error);
            Swal.fire({
                title: "Error",
                text: "Please pay attention to the following points: Name, surname, email, and phone number are mandatory, and the structure of the email and phone number must be correct. Also, make sure that the entered information has not been previously saved.",
                icon: "error"
              });
        }else if(response.data.message == 'ok'){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Information sent successfully",
                showConfirmButton: false,
                timer: 2500
              });
        }else{
            Swal.fire({
                title: "Error",
                text: "Please try again!",
                icon: "error"
              });
        }
    }
  return (
    <>
        <NavScrollExample />
        <div className='form-controller'>
            <div className='formbody'>
                <h2 className='text-center font-style fw-bold'>Get a Quote</h2>
                <div className='input-name'>
                    <TextField 
                        required onChange={DataHandller} color="error" name='firstName' className='input-value-name mt-3' id="filled-basic" label="First Name" variant="filled" />
                    <TextField 
                        required onChange={DataHandller} color="error" name='lastName' className='input-value-name mt-3' id="filled-basic" label="Last Name" variant="filled" />
                    <TextField 
                        required onChange={DataHandller} color="error" name='email' className='input-value-name mt-3' id="filled-basic" label="Email" variant="filled" />
                    <TextField
                      required
                      onChange={DataHandller}
                      color="error"
                      name='phoneNumber'
                      className='input-value-name mt-3'
                      id="outlined-number"
                      label="Phone Number"
                      type="number"
                    />
                </div>
                <div className='text-center mt-2'>
                    <p>  
                       <label className='font-style' for="jobdescription">Job Description</label>
                    </p> 
                    <textarea onChange={DataHandller} name='jobDescription' className='textarea-for-jobDes' id="jobdescription"  placeholder='example ....'>
                        
                    </textarea>
                </div>
                <div>
                    <div className='send-Production'>
                        <span className='send-Production-sapn ms-1'>Do you have a product to send ?</span>
                        <Switch color='error' onClick={dropDownListFunction}/>
                    </div>
                    <div className={`send-Production-list ${dropDownList && 'd-none'}`}>
                        <TextField
                          onChange={DetailsHandller}
                          name='quantity'
                          color="error"
                          className='mt-2'
                          id="outlined-number"
                          label="quantity"
                          type="number"
                        />
                        <TextField 
                            onChange={DetailsHandller} name='color' color="error" className='mt-2' id="filled-basic" label="Color" variant="filled" />
                        <TextField 
                            onChange={DetailsHandller} name='dimensions' color="error" className='mt-2' id="filled-basic" label="dimensions" variant="filled" />
                        <TextField
                          onChange={DetailsHandller}
                          name='weight'
                          color="error"
                          className='mt-2'
                          id="outlined-number"
                          label="weight"
                          type="number"
                        />
                    </div>
                    <div className={`text-center ${dropDownList && 'd-none'}`}>
                        <Button
                          className='mt-2'
                          component="label"
                          role={undefined}
                          variant="contained"
                          tabIndex={-1}
                          startIcon={<CloudUploadIcon />}
                          color='error'
                        >
                          Upload file
                          <VisuallyHiddenInput onChange={imageHandller} type="file" />
                        </Button>
                        {Image &&
                            <div className='view-Image'>
                            <img src={Image}/>
                        </div>
                        }
                    </div>
                </div>
                <div className='button-controller'>
                    <LoadingButton
                      color='error'
                      className='Send-Loading-button my-3'
                      onClick={SendData}
                      endIcon={<SendIcon />}
                      loading = {loading}
                      loadingPosition="center"
                      variant="contained"
                    >
                      <span>Send</span>
                    </LoadingButton>
                </div>
            </div>
        </div>
    </>
  );
}

export default GetQuote;