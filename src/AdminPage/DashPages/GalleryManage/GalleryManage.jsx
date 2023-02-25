import { CircularProgress } from '@mui/material';
import { IKContext, IKUpload } from 'imagekitio-react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import useFetch from '../../../SharedComponent/Hooks/useFetch';
import usePoster from '../../../SharedComponent/Hooks/usePoster';
import Spineer from '../../../SharedComponent/Spinner/Spineer';
import './GalleryMange.scss'
import img1 from './image-gallery.png'

const publicKey = 'public_ZFrfBtvKxNspT+HqDIHl6KLQLJg=';
const urlEndpoint = 'https://ik.imagekit.io/qn3a4n63b';
const authenticationEndpoint = 'http://localhost:8000/api/v1/hotelGallery/imagekitAuth';

const GalleryManage = () => {
    const [loader, setloader] = useState(false)
    const [uploadedSuccess, setUploadedSuccess] = useState(false)
    const [onuploaded, setOnUploaded] = useState(false)
    const [allGalleryData, setAllGalleryData] = useState([])
    const [deleteSuccess, setDeletedSuccess] = useState(false)


    const { data, isPending } = useFetch(`http://localhost:8000/api/v1/hotelGallery/getAllImage`, uploadedSuccess, deleteSuccess)

    useEffect(() => {
        if (data?.status === 'success') {
            setAllGalleryData(data?.result)
        }
    })


    const { disPatchReq, dispatchData, dispatchError } = usePoster()

    const onSuccess = async(res) =>{
        console.log(res);
        setOnUploaded(false)

        //upload in database
        const photoUrl = res.url
        console.log(photoUrl.length);
        setloader(true)
        if (photoUrl.length > 0) {
          await disPatchReq(`http://localhost:8000/api/v1/hotelGallery/uploadImage`,'POST',{photoUrl:photoUrl})
        }
    }

    useEffect(() => {
        if (dispatchData?.ok) {
            setUploadedSuccess(dispatchData?.ok)
            setloader(false)
            setTimeout(() => {
               setUploadedSuccess(false) 
            }, 1000);
        }
    })

    
    const handleDelete = async(id) => {
        await disPatchReq(`http://localhost:8000/api/v1/hotelGallery/deleteGalleryImage/${id}`, 'DELETE')
       }
   
       useEffect(() => {
           if (dispatchData?.ok) {
               setDeletedSuccess(dispatchData?.ok)
               setTimeout(() => {
                setDeletedSuccess(false)
               }, 1000);
           }
       })

 //Alternative options      

    // const onSuccess = async (res) => {
    //     console.log(res);
    //     setOnUploaded(false)

    //     //upload in database
    //     const photoUrl = res.url
    //     setloader(true)
    //     const response = await fetch(`http://localhost:8000/api/v1/hotelGallery/uploadImage`, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ photoUrl })
    //     })
    //     console.log(response);
    //     const result = response
    //     if (result?.ok) {
    //         setloader(false)
    //         setUploadedSuccess(result?.ok)
    //         setTimeout(() => {
    //             setUploadedSuccess(false)
    //         }, 2000);
    //     }
    // }


    // const handleDelete = async (id) => {
    //     const response = await fetch(`http://localhost:8000/api/v1/hotelGallery/deleteGalleryImage/${id}`, {
    //         method: 'DELETE',
    //     })
    //     if (response.ok) {
    //         console.log(response);
    //         setDeletedSuccess(response.ok)
    //         setTimeout(() => {
    //            setDeletedSuccess(false) 
    //         }, 1000);
    //     }
    // }

    return (
        <div className='container my-4 gallery-manage'>
            <h4>Upload Image</h4>
            <div className='row my-4'>
                <div className=' col-md-12'>
                    <div className='row justify-content-center  align-items-center uploader'>
                        <div className='imgpic col-md-6 col-6 mv-3'>
                            <img src={img1} alt="" />
                        </div>

                        <div className='col-md-6 col-6'>
                            <IKContext
                                publicKey={publicKey}
                                urlEndpoint={urlEndpoint}
                                authenticationEndpoint={authenticationEndpoint}
                            >
                                <h5>{onuploaded && <CircularProgress size={20} />} Upload an image {uploadedSuccess && <span className='text-success'>Successfully</span>} {loader && <span className='text-primary fw-bold'>uploading...</span>}</h5>
                                <IKUpload
                                    fileName="gallery-upload.png"
                                    //onError={onError}
                                    onSuccess={onSuccess}
                                    onUploadProgress={(res) => setOnUploaded(res.isTrusted)}
                                />
                            </IKContext>

                        </div>
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className=' photos my-4'>
                        <div className='row mx-auto'>
                            {
                                isPending && <Spineer></Spineer>
                            }
                            {
                                allGalleryData.length <= 0 &&
                                <div className='d-flex justify-content-center'>
                                    <h4>You haven't uploaded yet</h4>
                                </div>
                            }
                            {
                                allGalleryData.map(img =>

                                    <div className='col-12 col-md-3 mb-3'>
                                        <div className='phto'>
                                            <img src={img.photoUrl} alt="" />
                                            <div className='over'>
                                                <i onClick={() => handleDelete(img._id)} class="bi bi-trash fs-3 text-danger p-1 ripple rounded" role={'button'}></i>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryManage;