import { Col } from 'react-bootstrap'
import './OwnerColorPage.css'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {getColorData} from '../../../config/api/apis'
import OwnerColorCard from '../OwnerColorCard/OwnerColorCard';
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

//firebase
import { imgDB } from '../../../config/Firebase/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { LoadingButton } from '@mui/lab';
import Swal from 'sweetalert2';
import { secretKey } from '../../../config/secData';
export default function OwnerColorPage(){
    // upload button config 
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

    //////////////////////////////
    const[ColorsData , setColorsData]=useState([]);
    const[ColorSaveData , setColorSaveData ] = useState({});
    const[loadinBTN , setloadinBTN]= useState(false);
    const[imageUrl , setimageUrl]=useState('')

    const Auth = Cookies.get('Authorization');

    const DeHashFunction = ()=>{
        const newsecretKey = secretKey;
        const bytes = CryptoJS.AES.decrypt(Auth , newsecretKey);
        const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedText
    }

    const ColorDataHandeller = (e)=>{
        const value = e.target.value;
        const name = e.target.name ;

        setColorSaveData({
            ...ColorSaveData , 
            [name] : value
        })
    }

    const imageHandeller = (e)=>{
        const img = e.target.files[0];
        setloadinBTN(true)
        const objectUrl = URL.createObjectURL(img);
        setimageUrl(objectUrl)
        const imgref = ref(imgDB , `nucoatingImg/${v4()}`);
        uploadBytes(imgref , img).then(val =>{
            getDownloadURL(val.ref).then(url =>{
                const Photo = url
                setColorSaveData({
                    ...ColorSaveData , 
                    Photo
                })
                setloadinBTN(false)
                console.log(ColorSaveData)
            })
        })

    }

    const SendDataHandller = async ()=>{
        const Token = DeHashFunction();
        const response =await axios.post(getColorData,ColorSaveData,{
            headers:{
                Authorization : Token
            }
        })
        console.log(response.data)
        if(response.status == 202){
            Swal.fire({
                title: "successful !!",
                text: "Send successful",
                icon: "success"
            })
        }else{
            Swal.fire({
                title: "Error !!",
                text: "Please Try again",
                icon: "error"
            })
        }

    }


    const getData =async ()=>{
        const response = await axios.get(getColorData);
        setColorsData(response.data.data);
    }
    
    useEffect(()=>{
        getData()
    },[])
    return(
        <>
            <div className='Owner-Color-Page-Form-Container'>
                <div className='d-sm-flex justify-content-between p-3'>
                    <Col sm={3}>
                        <TextField onChange={ColorDataHandeller} name='title' fullWidth id="filled-basic" label="Title" variant="filled" />
                    </Col>
                    <Col sm={3}>
                        <TextField onChange={ColorDataHandeller} name='type' fullWidth id="filled-basic" label="Type" variant="filled" />
                    </Col> 
                    <Col sm={3}> 
                        <TextField onChange={ColorDataHandeller} name='colorCode' fullWidth id="filled-basic" label="Color code" variant="filled" />
                    </Col>
                </div>
                <div className='mt-3 text-center w-100'>
                    <textarea onChange={ColorDataHandeller} name='description' className='w-75 textarea-Color-form' placeholder='text' />
                    <Button
                        disabled={loadinBTN}
                        className='w-50 m-3'
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                      Upload file
                      <VisuallyHiddenInput onChange={imageHandeller}  type="file" />
                    </Button>
                    <img className='upload-image-ColorCard' src={imageUrl !== ' '? imageUrl : ''}/>
                </div>
                <div className='text-center'>
                    <LoadingButton 
                        loading={loadinBTN} 
                        loadingIndicator="Loading…" 
                        variant='contained'
                        className='m-3 w-50 text-center'
                        onClick={SendDataHandller}
                        >
    
                        Send Data
                    </LoadingButton>
                </div>
            </div>
            <div className='mt-4 border-top'>
                <h3 className='mt-3 text-light text-center fw-bold'>Active Card</h3>
                <div className='d-flex flex-wrap justify-content-center'>
                    {
                        ColorsData.map(data => <OwnerColorCard {...data} />)
                    }
                </div>
            </div>
        </>
    )
}