import { Alert, AlertTitle, Badge, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import './RoomAdd.scss'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const RoomAdd = () => {
    const [roomNumber, setRoomNumber] = useState(Number)
    const [roomType, setRoomType] = useState('')
    const [roomFeature, setRoomFeature] = useState('')
    const [roomMeal, setRoomMeal] = useState('')
    const [roomCancelCharge, setRoomCancelCharge] = useState('')
    const [roomBedCapacity, setRoomBedCapacity] = useState(Number)
    const [contact, setContact] = useState(Number)
    const [ratePerNight, setRatePerNight] = useState(Number)
    const [roomDetails, setRoomDetails] = useState('')
    const [imgUrl, setImgUrl] = useState(null)
    const [innerImageUrl, setInnerImageUrl] = useState([])
    const [postError, setPostError] = useState('')
    const [postSuccess, setPostSuccess] = useState(false)
    const [roomNumberError, setRoomNumberError] = useState(false)




    //Image Upload
    let myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'forkancloudinary',
        uploadPreset: 'storeHotelImg',
        sources: 'url'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            setImgUrl(result.info.url)
        }
    }
    )

    const handleOpen = () => {
        try {
            myWidget.open()
        } catch (error) {
            console.log(error)
        }
    }

    //Upload Inner Image
    let myWidgetInner = window.cloudinary.createUploadWidget({
        cloudName: 'forkancloudinary',
        uploadPreset: 'storeHotelImg',
        sources: 'url'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            setInnerImageUrl([...innerImageUrl, result.info.url])
        }
    }
    )

    const handleOpenInnerImage = () => {
        myWidgetInner.open()
    }

  

    console.log(innerImageUrl)


    //Room Data Submit

    const RoomData = {
        roomNumber: roomNumber,
        roomType: roomType,
        roomFeature: roomFeature,
        roomMeal: roomMeal,
        roomCancelCharge: roomCancelCharge,
        roomBedCapacity: roomBedCapacity,
        contact: contact,
        ratePerNight: ratePerNight,
        roomDetails: roomDetails,
        roomImage: imgUrl,
        roomInnerImage: innerImageUrl
    }

    const handleSubmitData = (e) => {
        e.preventDefault()

        const uri = `https://start-hotel-practice-project.onrender.com/api/v1/room/createRoom`
        const requested = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(RoomData)
        }

        fetch(uri, requested)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.status === 'fail') {
                    if (result?.error?.errors?.roomImage?.message) {
                        setPostError(result.error.errors.roomImage.message)
                        setPostSuccess(false)
                    } else if (result?.error?.errors?.roomInnerImage?.name) {
                        setPostError('Inner Room Image minmum 3 && maxmum 5')
                        setPostSuccess(false)
                    }
                    else if (result?.error?.index === 0) {
                        setPostError('Room number must be unique')
                        setRoomNumberError(true)
                        setPostSuccess(false)
                    }
                    else {
                        setPostError(result.error.message)
                        setPostSuccess(false)
                        console.log(result)
                    }

                } else {
                    console.log(result)
                    setPostSuccess(true)
                    setPostError('')
                    setRoomNumberError(false)
                    setTimeout(() => {
                        setPostSuccess(false)
                    }, 4000);
                }
            })
    }


    const handleRemove = (value) =>{
        setInnerImageUrl( innerImageUrl.filter((prevItem) => prevItem !== value))

    }


    return (
        <div className='px-1'>
            <h3 className='mt-4'>Room Create</h3>
            <div>
                {
                    postSuccess ?
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            Room Added success  — <strong>check it out!</strong>
                        </Alert>
                        : ''

                }
                {
                    postError
                        ? <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            {postError}
                        </Alert>
                        : ''
                }
            </div>
            <div className=' create-form my-4'>
                <div className=' py-5 px-3'>
                    <form className=' container' onSubmit={handleSubmitData}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='row' >
                                    <TextField
                                        className='col-md-10 mb-4 mx-auto  '
                                        type={'number'}
                                        required
                                        helperText={roomNumberError ? <span className='text-danger'>Please provide an unique Number</span> : ''}
                                        onChange={(e) => setRoomNumber(e.target.value)}
                                        placeholder='Room Number'
                                        id="outlined-basic"
                                        label="Room Number"
                                        variant="outlined"
                                        style={{zIndex:0}}
                                         />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className=' row'>
                                    <FormControl className='col-md-10 mb-4 mx-auto'  >
                                        <InputLabel style={{zIndex:0}} id="demo-multiple-name-label">Room-Type</InputLabel>
                                        <Select
                                            labelId="demo-multiple-name-label"
                                            id="demo-multiple-name"
                                            input={<OutlinedInput label="Room-Type" />}
                                            MenuProps={MenuProps}
                                            required
                                            onChange={(e) => setRoomType(e.target.value)}
                                        >

                                            <div class="input-group px-2 mb-2">
                                                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                <span class="input-group-text bg-primary text-white ripple " role={'button'} id="basic-addon2">@</span>
                                            </div>
                                            <MenuItem value={'Single'}>Single</MenuItem>
                                            <MenuItem value={'Double'}>Double</MenuItem>
                                            <MenuItem value={'Quad'}>Quad</MenuItem>
                                            <MenuItem value={'King'}>King</MenuItem>
                                            <MenuItem value={'Apartment'}>Apartments</MenuItem>
                                            <MenuItem value={'Villa'}>Villa</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <FormControl className='col-md-10 mb-4 mx-auto' >
                                        <InputLabel style={{zIndex:0}} id="demo-multiple-name-label">AC/Non AC</InputLabel>
                                        <Select
                                            labelId="demo-multiple-name-label"
                                            id="demo-multiple-name"
                                            input={<OutlinedInput label="AC/Non AC" />}
                                            MenuProps={MenuProps}
                                            required
                                            onChange={(e) => setRoomFeature(e.target.value)}
                                        >

                                            <MenuItem value={'AC'}>Ac</MenuItem>
                                            <MenuItem value={'NON AC'}>Non Ac</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <FormControl className='col-md-10 mb-4 mx-auto' >
                                        <InputLabel style={{zIndex:0}} id="demo-multiple-name-label">Meal</InputLabel>
                                        <Select
                                            labelId="demo-multiple-name-label"
                                            id="demo-multiple-name"
                                            input={<OutlinedInput label="Meal" />}
                                            MenuProps={MenuProps}
                                            required
                                            onChange={(e) => setRoomMeal(e.target.value)}
                                        >
                                            <MenuItem value={'Free Breakfast'}>Free Breakfast</MenuItem>
                                            <MenuItem value={'Free Dinner'}>Free Dinner</MenuItem>
                                            <MenuItem value={'Free Breakfast & Dinner'}>Free Breakfast & dinner</MenuItem>
                                            <MenuItem value={'Free Welcome Drink'}>Free Welcome Drink</MenuItem>
                                            <MenuItem value={'No Food'}>No Food</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <FormControl className='col-md-10 mb-4 mx-auto' >
                                        <InputLabel style={{zIndex:0}} id="demo-multiple-name-label">Cancellation-Charge</InputLabel>
                                        <Select
                                            labelId="demo-multiple-name-label"
                                            id="demo-multiple-name"
                                            input={<OutlinedInput label="Cancellation-Charge" />}
                                            MenuProps={MenuProps}
                                            required
                                            onChange={(e) => setRoomCancelCharge(e.target.value)}
                                        >
                                            <MenuItem value={'Free Cancellation'}>Free Cancellation</MenuItem>
                                            <MenuItem value={'Not Allowed'}>Not Allowed</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <FormControl className='col-md-10 mb-4 mx-auto' >
                                        <InputLabel style={{zIndex:0}} id="demo-multiple-name-label">Bed-Capacity</InputLabel>
                                        <Select
                                            labelId="demo-multiple-name-label"
                                            id="demo-multiple-name"
                                            required
                                            onChange={(e) => setRoomBedCapacity(e.target.value)}
                                            input={<OutlinedInput label="Bed-Capacity" />}
                                            MenuProps={MenuProps}
                                        >

                                            <MenuItem value={1}> 1</MenuItem>
                                            <MenuItem value={2}> 2</MenuItem>
                                            <MenuItem value={3}> 3</MenuItem>
                                            <MenuItem value={4}> 4</MenuItem>
                                            <MenuItem value={5}> 5</MenuItem>
                                            <MenuItem value={6}> 6</MenuItem>
                                            <MenuItem value={7}> 7</MenuItem>
                                            <MenuItem value={8}> 8</MenuItem>
                                            <MenuItem value={9}> 9</MenuItem>

                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <TextField style={{zIndex:0}} className='col-md-10 mb-4 mx-auto' type={'tel'} required onChange={(e) => setContact(e.target.value)} placeholder='Contact-Number' id="outlined-basic" label="Contact Number" variant="outlined" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <TextField style={{zIndex:0}} className='col-md-10 mb-4 mx-auto' type={'number'} required onChange={(e) => setRatePerNight(e.target.value)} placeholder='Rent-Per-Night' id="outlined-basic" label="Rent-Per-Night" variant="outlined" />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='row'>
                                    <TextField style={{zIndex:0}} className='col-md-11 mb-4 mx-auto' multiline rows={4} required onChange={(e) => setRoomDetails(e.target.value)} placeholder='Room Details' id="outlined-basic" label="Room Details" variant="outlined" />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='row'>
                                    <div className='col-md-11 mb-4 mx-auto img-div' >
                                        <div className='text-center  ' role={'button'} onClick={handleOpen}>
                                            {imgUrl ? <i class="bi bi-cloud-check-fill text-success"></i> : <i class="bi bi-cloud-arrow-up-fill mb-0 "></i>}
                                            <h5>Drop files here or Click to Upload</h5>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='row'>
                                    <div className='col-md-11 mb-4 mx-auto img-div-inner' >
                                        {
                                            innerImageUrl.length > 0 &&
                                       
                                        <div className='row'>
                                            {
                                                innerImageUrl.map((img,index )=> 

                                                <div className='col-md-4 col-lg-3  col-12'>
                                                    <Badge color="error" onClick={() => handleRemove(img)} className='border innerimgbox  my-3' badgeContent="X" role={'button'}>
                                                        <img src={img} alt="" />
                                                    </Badge>
                                                </div>
                                            )}
                                        </div >
                                         }
                                        <div className='text-center  mb-5' role={'button'} onClick={handleOpenInnerImage}>
                                            {innerImageUrl.length > 0 ? <i class="bi bi-cloud-check-fill text-success"></i> : <i class="bi bi-cloud-plus-fill mb-0"></i>}
                                            <h5>Atleast 3  Upload Inner Room Image</h5>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='text-end my-3'>
                                <button type="submit" className='btn btn-primary'>Submit</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RoomAdd;