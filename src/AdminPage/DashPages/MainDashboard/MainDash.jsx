import React from 'react';
import { useState } from 'react';
import './MainDash.scss'

const MainDash = () => {
    const [imgUrl,setImgUrl] = useState(null)
    
    let myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'forkancloudinary', 
        uploadPreset: 'storeHotelImg',
        sources:'url'
    }, (error, result) => { 
          if (!error && result && result.event === "success") { 
            console.log('Done! Here is the image info: ', result.info.url); 
            setImgUrl(result.info.url)
          }
        }
      )

      const handleOpen = () =>{
        myWidget.open()
      }

      console.log(imgUrl);
    return (
        <div>
            <h1>MainDashboard</h1>
            <button onClick={handleOpen}>open</button>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
            <p>fjsdfkjsdafkljsadhfjk</p>
        </div>
    );
};

export default MainDash;