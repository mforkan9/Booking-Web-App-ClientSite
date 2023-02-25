import { LocalizationProvider } from '@mui/x-date-pickers';
import React, { useState } from 'react';
import './HeaderDatePicker.scss'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material';
import usePoster from '../../../SharedComponent/Hooks/usePoster';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Spineer from '../../../SharedComponent/Spinner/Spineer';

const HeaderDatePicker = () => {
    const [checkOutValue, setCheckOutValue] = useState(null);
    const [checkInValue, setCheckInValue] = useState(null);
    const [adult, setAdult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [childrenValue, setChildrenValue] = useState(null);
    const [findRoomData, setFindRoomData] = useState([]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { disPatchReq, dispatchData } = usePoster()


    const capcity = adult + childrenValue

    const handleSubmit = async (e) => {
        e.preventDefault()
        handleOpen()
        const checkData = {
            checkIn: new Date(checkInValue).toISOString().split('T')[0],
            checkOut: new Date(checkOutValue).toISOString().split('T')[0],
            capcity: capcity
        }
        console.log(checkData)
        // await disPatchReq(`http://localhost:8000/api/v1/room/checkAvailability`,'POST',{checkData})
        setLoading(true)
        fetch(`http://localhost:8000/api/v1/room/checkAvailability`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ checkData })
        })
            .then(res => res.json())
            .then(data => {
                setFindRoomData(data.data)
                setLoading(false)
            })

    };

    // useEffect(() => {
    //   if (dispatchData?.ok) {
    //     console.log(dispatchData);
    //   }   
    // })

    return (

        <div className=' basicDatePicker'>
            <form className='row' onSubmit={handleSubmit}>
                <div className='col-lg-3 col-md-3 col-6 mb-2'>
                    <div className='date'>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DatePicker
                                label='Check In'
                                disablePast={true}
                                value={checkInValue}
                                showToolbar={true}
                                toolbarTitle='CheckIn'
                                
                                onChange={(newValue) => {
                                    setCheckInValue(newValue);
                                }}
                                renderInput={(params) => <TextField required  {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-6 mb-2'>
                    <div className='date'>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DatePicker
                                className=''
                                label='CheckOut'
                                value={checkOutValue}
                                disablePast={true}
                                showToolbar={true}
                                toolbarTitle='CheckOut'
                                onChange={(newValue) => {
                                    setCheckOutValue(newValue);
                                }}
                                renderInput={(params) => <TextField required  {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-6 mb-2  '>
                    <div className='date '>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label1">Adult</InputLabel>
                            <Select
                                labelId="demo-simple-select-label1"
                                id="demo-simple-select"
                                //value={age}
                                label="Adult"
                                className=''
                                required
                                onChange={(e) => setAdult(e.target.value)}
                            >
                                <MenuItem value={1}>One</MenuItem>
                                <MenuItem value={2}>Two</MenuItem>
                                <MenuItem value={3}>Three</MenuItem>
                                <MenuItem value={4}>Four</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-6 mb-3'>

                    <div className='date'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label2">Children</InputLabel>
                            <Select
                                labelId="demo-simple-select-label2"
                                id="demo-simple-select"
                                //value={age}
                                label="Children"
                                className=''
                                onChange={(e) => setChildrenValue(e.target.value)}
                            >
                                <MenuItem value={0}>None</MenuItem>
                                <MenuItem value={1}>One</MenuItem>
                                <MenuItem value={2}>Two</MenuItem>
                                <MenuItem value={3}>Three</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                </div>
                <div className='col-lg-6 col-md-6 col-6 mx-auto my-3 '>
                    <button type="submit" class="btn btn-primary btn-lg py-3 ">check availabiltiy</button>
                </div>

            </form>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Availability</h1>
                            <button type="button" onClick={handleClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body ">
                            {loading && <Spineer></Spineer>}
                            {
                                findRoomData.length > 0  ?

                                    <div className='modal-check-data'>
                                        {
                                            findRoomData.map(item =>

                                                <div className='row py-3 border-bottom'>
                                                    <div className='col-md-9 col-9 row mx-auto'>
                                                        <div className='col-md-6 col-6'>
                                                            <div className='imga'>
                                                                <img src={item.roomImage} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6 col-6'>
                                                            <small className='text-primary'>#Room-{item.roomNumber}</small>
                                                            <h5 className='text-dark fw-bold'>{item.roomType} Room</h5>
                                                        </div>
                                                    </div>
                                                    {/* <div className='col-md-1 d-flex justify-content-center align-items-center '>
                                      <div className=''>
                                      <i class="bi bi-eye-fill fs-4 text-primary" role={'button'}></i>
                                      </div>
                                    </div> */}
                                                    <div className='col-md-3 col-3 d-flex justify-content-center align-items-center'>
                                                        <Link to={`/roomDetails/${item._id}`}>  <button type="button" className='btn text-dark btn-warning'>book</button></Link>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    : 
                                    <div className='text-center text-warning'>
                                        <h5>{loading ? '' : 'No data found'}</h5>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </Modal>
        </div>

    );
};

export default HeaderDatePicker;