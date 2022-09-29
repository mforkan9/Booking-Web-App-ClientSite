import { Alert, AlertTitle, FormControl,  InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
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
    const [ratePerNight, setRatePerNight] = useState('')
    const [roomDetails, setRoomDetails] = useState('')
    const [imgUrl, setImgUrl] = useState(null)
    const [postError,setPostError] = useState('')
    const [postSuccess,setPostSuccess] = useState(false)
    const [roomNumberError,setRoomNumberError] = useState(false)



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
        myWidget.open()
    }

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
        roomImage: imgUrl
    }

    const handleSubmitData = (e) =>{
        e.preventDefault()

        const uri = `http://localhost:8000/api/v1/room/createRoom`
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
                if(result.status === 'fail'){
                    if (result?.error?.errors?.roomImage?.message) {
                        setPostError(result.error.errors.roomImage.message)
                        setPostSuccess(false)
                    }
                    else if(result?.error?.index === 0){
                        setPostError('Room number must be unique')
                        setRoomNumberError(true)
                        setPostSuccess(false)
                    }
                    else{
                        setPostError(result.error.message)
                        setPostSuccess(false)
                    }

                }else{
                    setPostSuccess(true)
                    setPostError('')
                    setRoomNumberError(false)
                }
            })
    }


    return (
        <div className='container '>
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
                    ?   <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                     {postError}
                  </Alert> 
                  : ''
                }
            </div>
            <div className=' create-form my-4'>
                <div className=' mx-4 py-5 px-3 '>
                    <form className='' onSubmit={handleSubmitData}>
                        <div className='row mx-3 '>
                            <div className='col-md-6 row'>
                                <TextField 
                                className='col-md-10 mb-4 mx-auto ' 
                                type={'number'} 
                                required 
                                helperText={roomNumberError ? <span className='text-danger'>Please provide a unique Number</span> : ''}
                                onChange={(e) => setRoomNumber(e.target.value)} 
                                placeholder='Room Number'
                                 id="outlined-basic" 
                                 label="Room Number"
                                  variant="outlined" />
                            </div>
                            <div className='col-md-6  row'>
                                <FormControl className='col-md-10 mb-4 mx-auto'  >
                                    <InputLabel id="demo-multiple-name-label">Room-Type</InputLabel>
                                    <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        //multiple
                                        //value={personName}
                                        // onChange={handleChange}
                                        input={<OutlinedInput label="Room-Type" />}
                                        MenuProps={MenuProps}
                                        required
                                        onChange={(e) => setRoomType(e.target.value)}
                                    >

                                        <div class="input-group px-2 mb-2">
                                            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <span class="input-group-text bg-primary text-white ripple " role={'button'} id="basic-addon2">@</span>
                                        </div>
                                        <MenuItem value={'single'}>Single</MenuItem>
                                        <MenuItem value={'double'}>Double</MenuItem>
                                        <MenuItem value={'quad'}>Quad</MenuItem>
                                        <MenuItem value={'king'}>King</MenuItem>
                                        <MenuItem value={'apartment'}>Apartments</MenuItem>
                                        <MenuItem value={'villa'}>Villa</MenuItem>
                                    </Select>
                                </FormControl>
                              
                            </div>
                            <div className='col-md-6 row'>
                                <FormControl className='col-md-10 mb-4 mx-auto' >
                                    <InputLabel id="demo-multiple-name-label">AC/Non AC</InputLabel>
                                    <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        //multiple
                                        //value={personName}
                                        // onChange={handleChange}
                                        input={<OutlinedInput label="AC/Non AC" />}
                                        MenuProps={MenuProps}
                                        required
                                        onChange={(e) => setRoomFeature(e.target.value)}
                                    >

                                        <MenuItem value={'ac'}>Ac</MenuItem>
                                        <MenuItem value={'non ac'}>Non Ac</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-md-6 row'>
                                <FormControl className='col-md-10 mb-4 mx-auto' >
                                    <InputLabel id="demo-multiple-name-label">Meal</InputLabel>
                                    <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        //multiple
                                        //value={personName}
                                        // onChange={handleChange}
                                        input={<OutlinedInput label="Meal" />}
                                        MenuProps={MenuProps}
                                        required
                                        onChange={(e) => setRoomMeal(e.target.value)}
                                    >
                                        <MenuItem value={'free breakfast'}>Free Breakfast</MenuItem>
                                        <MenuItem value={'free dinner'}>Free Dinner</MenuItem>
                                        <MenuItem value={'free breakfast & dinner'}>Free Breakfast & dinner</MenuItem>
                                        <MenuItem value={'free welcome drink'}>Free Welcome Drink</MenuItem>
                                        <MenuItem value={'no food'}>No Food</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-md-6 row'>
                                <FormControl className='col-md-10 mb-4 mx-auto' >
                                    <InputLabel id="demo-multiple-name-label">Cancellation-Charge</InputLabel>
                                    <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        //multiple
                                        //value={personName}
                                        input={<OutlinedInput label="Cancellation-Charge" />}
                                        MenuProps={MenuProps}
                                        required
                                        onChange={(e) => setRoomCancelCharge(e.target.value)}
                                    >
                                        <MenuItem value={'free cancellation'}>Free Cancellation</MenuItem>
                                        <MenuItem value={'not allowed'}>Not Allowed</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-md-6 row'>
                                <FormControl className='col-md-10 mb-4 mx-auto' >
                                    <InputLabel id="demo-multiple-name-label">Bed-Capacity</InputLabel>
                                    <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        //multiple
                                        //value={personName}

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
                            <div className='col-md-6 row'>
                                <TextField className='col-md-10 mb-4 mx-auto' type={'tel'} required onChange={(e) => setContact(e.target.value)} placeholder='Contact-Number' id="outlined-basic" label="Contact Number" variant="outlined" />
                            </div>
                            <div className='col-md-6 row'>
                                <TextField className='col-md-10 mb-4 mx-auto' required onChange={(e) => setRatePerNight(e.target.value)} placeholder='Rent-Per-Night' id="outlined-basic" label="Rent-Per-Night" variant="outlined" />
                            </div>
                            <div className='col-md-12 row'>
                                <TextField className='col-md-11 mb-4 mx-auto' multiline rows={4} required onChange={(e) => setRoomDetails(e.target.value)} placeholder='Room Details' id="outlined-basic" label="Room Details" variant="outlined" />
                            </div>
                            <div className='col-md-12 row'>

                                <div className='col-md-11 mb-4 mx-auto img-div' >
                                    <div className='text-center  ' role={'button'} onClick={handleOpen}>
                                        {imgUrl ? <i class="bi bi-cloud-check-fill text-success"></i> : <i class="bi bi-cloud-arrow-up-fill mb-0 "></i>}
                                        <h4>Drop files here or Click to Upload</h4>
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