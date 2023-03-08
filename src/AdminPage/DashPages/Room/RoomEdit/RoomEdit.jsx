import React from 'react';
import { Alert, AlertTitle, Badge, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { useState } from 'react';
import './RoomEdit.scss'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';



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

const RoomEdit = () => {
    const { id } = useParams()
    const [getData, setGetData] = useState({})
    const [innerImageUrl, setInnerImageUrl] = useState([])
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
    const [updateError, setUpdateError] = useState('')
    const [updateSuccess, setUpdateSuccess] = useState(false)
    const [updateWarning, setUpdateWarning] = useState('')

    const [innerImg, setInnerImg] = useState([])
    const [innerImgDeleted, setInnerImgDeleted] = useState(false)



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


    // Upload Inner Image

    let myWidgetInner = window.cloudinary.createUploadWidget({
        cloudName: 'forkancloudinary',
        uploadPreset: 'storeHotelImg',
        sources: 'url'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log(result)
            setInnerImageUrl([...innerImageUrl, result.info.url])
        }
    }
    )

    const handleOpenInnerImage = () => {
        try {
            myWidgetInner.open()
        } catch (error) {
            console.log(error)
        }
    }




    //GET Edit Room Data
    useEffect(() => {
        try {
            fetch(`https://start-hotel-practice-project.onrender.com/api/v1/room/roomFindById/${id}`)
                .then(res => res.json())
                .then(data => {
                    setGetData(data?.value)
                    setInnerImg(data?.value?.roomInnerImage)
                })
        }
        catch (error) {
            console.log(error);
        }
    }, [id, updateSuccess, innerImgDeleted])




    //Room Data Submit

    const RoomData = {
        roomNumber: roomNumber || getData?.roomNumber,
        roomType: roomType || getData.roomType,
        roomFeature: roomFeature || getData.roomFeature,
        roomMeal: roomMeal || getData.roomMeal,
        roomCancelCharge: roomCancelCharge || getData.roomCancelCharge,
        roomBedCapacity: roomBedCapacity || getData.roomBedCapacity,
        contact: contact || getData.contact,
        ratePerNight: ratePerNight || getData.ratePerNight,
        roomDetails: roomDetails || getData.roomDetails,
        roomImage: imgUrl || getData.roomImage,
        roomInnerImage: innerImageUrl || getData?.roomInnerImage
    }



    console.log(innerImageUrl);

    const handleSubmitData = (e) => {
        e.preventDefault()

        const uri = `https://start-hotel-practice-project.onrender.com/api/v1/room/editRoom/${id}`
        const requested = {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(RoomData)
        }

        fetch(uri, requested)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.status === 'success') {
                    if (result?.data?.modifiedCount === 0) {
                        setUpdateWarning('This Data is already Existing')
                        setUpdateSuccess(false)
                        setUpdateError('')
                    }
                    else if (result?.data?.modifiedCount === 1) {
                        setUpdateSuccess(true)
                        setUpdateWarning('')
                        setUpdateError('')
                        setInnerImageUrl([])
                        setTimeout(() => {
                            setUpdateSuccess(false)
                        }, 3000);

                    }
                } else {
                    setUpdateError(result.error)
                    setUpdateSuccess(false)
                    setUpdateWarning('')
                }
            })
    }

    const handleDeleteInnerImg = (index) => {
        fetch(`https://start-hotel-practice-project.onrender.com/api/v1/room/deleteInner?id=${id}&&index=${index}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(result => {
                if (result.status === 'success') {
                    setInnerImgDeleted(true)
                    setUpdateError('')
                } else {
                    setUpdateError(result.message)
                }
            })

    }




    return (
        <div className='container '>
            <h3 className='mt-4'>Room Edit</h3>
            <div>
                {
                    updateSuccess ?
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            Room Updated success  — <strong>check it out!</strong>
                        </Alert>
                        : ''

                }
                {
                    updateError
                        ? <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            {updateError}
                        </Alert>
                        : ''
                }
                {
                    updateWarning ?
                        <Alert severity="warning">{updateWarning}</Alert>
                        : ''
                }
            </div>
            <div className=' edit-form my-4'>
                <div className='py-5 px-3'>
                    <form className='container' onSubmit={handleSubmitData}>
                        <div className='row  '>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <TextField
                                        className='col-md-10 mb-4 mx-auto '
                                        type={'number'}
                                        onChange={(e) => setRoomNumber(e.target.value)}
                                        placeholder='Room Number'
                                        id="outlined-required"
                                        label="Room Number"
                                        variant="outlined"
                                        multiline
                                        defaultValue={getData?.roomNumber}


                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <FormControl className='col-md-10 mb-4 mx-auto'>
                                        <InputLabel id="demo-multiple-name-label">Room-Type</InputLabel>
                                        <Select
                                            labelId="demo-multiple-name-label"
                                            id="demo-multiple-name"
                                            displayEmpty
                                            input={<OutlinedInput label="Room-Type" />}
                                            MenuProps={MenuProps}


                                            onChange={(e) => setRoomType(e.target.value)}
                                        >

                                            <div class="input-group px-2 mb-2">
                                                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                <span class="input-group-text bg-primary text-white ripple " role={'button'} id="basic-addon2">@</span>
                                            </div>

                                            <MenuItem><em>{getData.roomType}</em></MenuItem>
                                            <MenuItem value={'single'}>Single</MenuItem>
                                            <MenuItem value={'double'}>Double</MenuItem>
                                            <MenuItem value={'quad'}>Quad</MenuItem>
                                            <MenuItem value={'king'}>King</MenuItem>
                                            <MenuItem value={'apartment'}>Apartments</MenuItem>
                                            <MenuItem value={'villa'}>Villa</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <FormControl className='col-md-10 mb-4 mx-auto'>
                                        <InputLabel id="demo-multiple-name-label">AC/Non AC</InputLabel>
                                        <Select
                                            labelId="demo-multiple-name-label"
                                            id="demo-multiple-name"
                                            displayEmpty
                                            input={<OutlinedInput label="AC/Non AC" />}
                                            MenuProps={MenuProps}

                                            onChange={(e) => setRoomFeature(e.target.value)}
                                        >

                                            <MenuItem><em>{getData.roomFeature}</em></MenuItem>
                                            <MenuItem value={'ac'}>Ac</MenuItem>
                                            <MenuItem value={'non ac'}>Non Ac</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <FormControl className='col-md-10 mb-4 mx-auto' >
                                        <InputLabel id="demo-multiple-name-label">Meal</InputLabel>
                                        <Select
                                            labelId="demo-multiple-name-label"
                                            id="demo-multiple-name"
                                            displayEmpty
                                            input={<OutlinedInput label="Meal" />}
                                            MenuProps={MenuProps}

                                            onChange={(e) => setRoomMeal(e.target.value)}
                                        >
                                            <MenuItem><em>{getData.roomMeal}</em></MenuItem>
                                            <MenuItem value={'free breakfast'}>Free Breakfast</MenuItem>
                                            <MenuItem value={'free dinner'}>Free Dinner</MenuItem>
                                            <MenuItem value={'free breakfast & dinner'}>Free Breakfast & dinner</MenuItem>
                                            <MenuItem value={'free welcome drink'}>Free Welcome Drink</MenuItem>
                                            <MenuItem value={'no food'}>No Food</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <FormControl className='col-md-10 mb-4 mx-auto'  >
                                        <InputLabel id="demo-multiple-name-label">Cancellation-Charge</InputLabel>
                                        <Select
                                            labelId="demo-multiple-name-label"
                                            id="demo-multiple-name"
                                            displayEmpty
                                            input={<OutlinedInput label="Cancellation-Charge" />}
                                            MenuProps={MenuProps}

                                            onChange={(e) => setRoomCancelCharge(e.target.value)}
                                        >
                                            <MenuItem><em>{getData.roomCancelCharge}</em></MenuItem>
                                            <MenuItem value={'free cancellation'}>Free Cancellation</MenuItem>
                                            <MenuItem value={'not allowed'}>Not Allowed</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <FormControl className='col-md-10 mb-4 mx-auto'  >
                                        <InputLabel id="demo-multiple-name-label">Bed-Capacity</InputLabel>
                                        <Select
                                            labelId="demo-multiple-name-label"
                                            id="demo-multiple-name"
                                            displayEmpty

                                            onChange={(e) => setRoomBedCapacity(e.target.value)}
                                            input={<OutlinedInput label="Bed-Capacity" />}
                                            MenuProps={MenuProps}
                                        >
                                            <MenuItem><em>{getData.roomBedCapacity}</em></MenuItem>
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
                                    <TextField
                                        className='col-md-10 mb-4 mx-auto'
                                        type={'tel'}
                                        multiline
                                        defaultValue={getData.contact}
                                        onChange={(e) => setContact(e.target.value)}
                                        placeholder='Contact-Number'
                                        id="outlined-basic"
                                        label="Contact Number"
                                        variant="outlined" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <TextField
                                        className='col-md-10 mb-4 mx-auto'
                                        type={'number'}
                                        multiline
                                        defaultValue={getData.ratePerNight}
                                        onChange={(e) => setRatePerNight(e.target.value)}
                                        placeholder='Rent-Per-Night'
                                        id="outlined-basic"
                                        label="Rent-Per-Night"
                                        variant="outlined" />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='row'>
                                    <TextField
                                        className='col-md-11 mb-4 mx-auto '
                                        multiline
                                        rows={4}
                                        defaultValue={getData.roomDetails}
                                        onChange={(e) => setRoomDetails(e.target.value)}
                                        placeholder='Room Details'
                                        id="outlined-basic"
                                        label="Room Details"
                                        variant="outlined"

                                    />
                                </div>
                            </div>
                            <div className='col-md-12 '>
                                <div className='row'>
                                    <div className='col-md-11 mb-4 mx-auto img-div' >
                                        <div className='text-center  ' role={'button'} onClick={handleOpen}>
                                            {imgUrl ? <i class="bi bi-cloud-check-fill text-success"></i> : <i class="bi bi-cloud-arrow-up-fill mb-0 "></i>}
                                            <h4>Drop files here or Click to Upload</h4>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='row'>
                                    <div className='col-md-11 mb-4 mx-auto inner-img-div' >

                                        <div className='row'>
                                            {
                                                innerImg?.map((imgUrl, index) =>

                                                    <div className='col-md-4 col-lg-3  col-12'>
                                                        <Badge color="error" onClick={() => handleDeleteInnerImg(imgUrl)} className='border innerimgbox  my-3' badgeContent="X" role={'button'}>
                                                            <img src={imgUrl} alt="" />
                                                        </Badge>
                                                    </div>
                                                )
                                            }
                                        </div >

                                        <div className='text-center ' onClick={handleOpenInnerImage} role={'button'}>
                                            {imgUrl ? <i class="bi bi-cloud-check-fill text-success"></i> : <i class="bi bi-cloud-plus-fill mb-0 "></i>}
                                            <h6>Upload Inner Image</h6>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='text-end my-3 '>
                                <button type="submit" className='btn btn-primary'>Submit</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RoomEdit;