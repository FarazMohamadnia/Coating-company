import { useEffect, useState } from 'react';
import './dashboard.css'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from 'axios';
import { getComments, getStory, getUsersData } from '../../config/api/apis';
import CryptoJS from 'crypto-js';
import { secretKey } from '../../config/secData';
import NavScrollExample from '../../components/Nav/Navbar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UsersCard from '../../components/OwnerComponents/OwnerUsersCard/OwnerUsersCard';
import CommentsOwnerCard from '../../components/OwnerComponents/OwnerCommentsCard/CommentsOwnerCard';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { Col } from 'react-bootstrap';
import OwnerStoryCard from '../../components/OwnerComponents/OwnerStoryCard/OwnerStoryCard';
import Swal from 'sweetalert2';
// firebase
import { imgDB } from '../../config/Firebase/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import OwnerColorPage from '../../components/OwnerComponents/OwnerColorData/OwnerColorPage';

export default function Dashboard(){
    //buttom config
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
    ////////////////
    const [usersData , setusersData] = useState([]);
    const [CommnetsData , setCommnetsData]=useState([])
    const [PostStory , setPostStory]=useState({})
    const [imgUrl , setimgUrl]=useState([]);
    const [seeStory , setseeStory]=useState([]);
    const [getStorys , setgetStorys]=useState([]);
    const myStateCookieValue = Cookies.get('ownerLogin');
    const Auth = Cookies.get('Authorization');
    const navigate = useNavigate();


    const DeHashFunction = ()=>{
        const newsecretKey = secretKey;
        const bytes = CryptoJS.AES.decrypt(Auth , newsecretKey);
        const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedText
    }

    const getOwnerData = async()=>{
        const Token = DeHashFunction();

        const response = await axios.get(getUsersData , {
            headers :{
                Authorization : Token
            }
        })
        setusersData(response.data.data);
    }

    const getCommentsData = async ()=>{
        const response = await axios.get(getComments);
        setCommnetsData(response.data.data);
    };

    const saveStory = (e)=>{
        const value = e.target.files[0]
        const name = e.target.name
        const objectUrl = URL.createObjectURL(value);
        setseeStory([
            ...seeStory ,
            objectUrl
        ])
        setPostStory({
            ...PostStory ,
            [name] : value
        })
        console.log(PostStory)
    }

    const uploadImage2 = ()=>{
        console.log('hhhhhh2')
        const imgref = ref(imgDB , `nucoatingImg/${v4()}`);
        uploadBytes(imgref , PostStory.image2).then(val2 =>{
            getDownloadURL(val2.ref).then(url2 =>{
                const photo = url2
                imgUrl.push([
                    photo
                ])
                saveInDatabase();
                console.log('hhhhhh3kk')
            })
        })
    }
    const SendStory =()=>{
        const imgref = ref(imgDB , `nucoatingImg/${v4()}`);
        console.log('ffffffff1')
        uploadBytes(imgref , PostStory.image1).then(val1 =>{
            getDownloadURL(val1.ref).then(url1 =>{
                const photo = url1
                imgUrl.push([
                    photo
                ]);
                uploadImage2();
            })
        })   
    }


    const saveInDatabase = async()=>{
        console.log('database 4444')
        const Token =DeHashFunction();
        const response =await axios.post(getStory , {
            image1: imgUrl[0].toString(),
            image2:imgUrl[1].toString()
        } 
        ,
        {
            headers:{
                Authorization : Token
            }
        });
        console.log(response)
        if(response.status === 201){
            Swal.fire({
                title: "succefull",
                text: "send Story",
                icon: "success"
              });
        }else{
            Swal.fire({
                title: "error",
                text: "plaese try again",
                icon: "error"
              })
        }
    }

    const getStoryData = async()=>{ 
        const response = await axios.get(getStory);
        setgetStorys(response.data.data)
        console.log(response);
    }

    useEffect(()=>{
        
        if(!myStateCookieValue){
            navigate('/');
        }

        getOwnerData();
        getCommentsData();
        getStoryData();
    },[]);

    return(
        <div className='Dashboard-container'>
            <NavScrollExample />
            <div>
                <h4 className='mt-3 text-light text-center'>Welcome to nucoating Control Panel</h4>       
                <div>
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="Home" title="Quote List">
                  <div className='d-flex justify-content-center flex-wrap'>
                    {
                      usersData.map(data =>{return <UsersCard {...data} />})
                    }
                  </div>
                  </Tab>
                  <Tab eventKey="profile" title="Comments List">
                    <div className='d-flex justify-content-center flex-wrap-reverse'>
                    
                        {
                            CommnetsData.map(data => {
                                return <CommentsOwnerCard {...data}/>
                            })
                        }
                    </div>
                  </Tab>
                    <Tab eventKey="Story" title="Story List">
                        <div className='d-md-flex text-light'>
                            <Col md={6}>
                                <div className='text-center'>
                                    <p className='fw-bold fs-5 font-style'>Background Image</p>
                                    <img className='image-stroy-section-style rounded-circle' src={seeStory[0]}/>
                                    <Button
                                        className=''
                                        color='error'
                                        component="label"
                                        variant="contained"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                      Upload file
                                      <VisuallyHiddenInput onChange={saveStory} name = 'image1' type="file" />
                                    </Button>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='text-center'>
                                    <p className='fw-bold fs-5 font-style'>Image</p>
                                    <img className='image-stroy-section-style' src={seeStory[1]}/>
                                    <Button
                                        component="label"
                                        color='error'
                                        className=''
                                        variant="contained"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                      Upload file
                                      <VisuallyHiddenInput onChange={saveStory}  name ='image2' type="file" />
                                    </Button>
                                </div>
                            </Col>
                        </div>
                        <div className='text-center w-100 mt-3'>
                            <Button onClick={SendStory} className='w-50 text-center' variant='contained'>
                                Send
                            </Button>
                        </div>
                        <div className='Story-section-style'>
                                <h3 className='text-center mb-4'>Active stories</h3>
                                <div className='d-flex justify-content-center flex-wrap'>
                                {
                                    getStorys.map(data =>{
                                        return <OwnerStoryCard {...data}/>  
                                    })
                                }
                                </div>
                        </div>
                
                    </Tab>

                    <Tab eventKey="Color" title="Color List">
                            <OwnerColorPage />
                    </Tab>
                    <Tab eventKey="" title="Prudocts" disabled>

                    </Tab>
                </Tabs>
                </div>

            </div>
        </div>
    )
}