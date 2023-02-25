import { Box, ImageList, ImageListItem } from '@mui/material';
import React from 'react';
import './GalleryBlock.scss'
import 'aos/dist/aos.css';
import { useState } from 'react';
import useFetch from '../../../SharedComponent/Hooks/useFetch';
import { useEffect } from 'react';
import img1 from './h2-about-img2.png'
import { Masonry } from '@mui/lab';
import Spineer from '../../../SharedComponent/Spinner/Spineer';


const GalleryBlock = () => {
    const [galleryImages, setGalleryImages] = useState([])

   // const { data, isPending } = useFetch(`http://localhost:8000/api/v1/hotelGallery/getAllImage`)

    // useEffect(() => {
    //     if (data?.status === 'success') {
    //         setGalleryImages(data?.result)
    //     }
    // })
    
  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/hotelGallery/getAllImage`)
      .then(res => res.json())
      .then(data => setGalleryImages(data?.result))
  }, [])

  console.log(galleryImages);


    return (
        <div className='container gallery-block' id='Gallery'>
            <div className='col-md-12 g-title mb-5'>
                <h2>Our <span>Hotel Gallery</span> </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <Box className='gallery' >
                {/* {
                    isPending && <Spineer></Spineer>
                } */}
                {
                    galleryImages.length <= 0 &&
                    <div className='d-flex justify-content-center'>
                        <h4 className='text-center'>Hotel Gallery Empty</h4>
                    </div>
                }

                <ImageList variant="masonry" className='' cols={4} gap={13}>

                    {galleryImages.map((item) =>
                        <ImageListItem key={item.photoUrl}>
                            <img
                                src={`${item.photoUrl}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.photoUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={'gdfgd'}
                                loading="lazy"
                                style={{ width: '100%' }}
                                className='border'

                            />
                        </ImageListItem>
                    )}
                </ImageList>
            </Box>
        </div>
    );
};

export default GalleryBlock;