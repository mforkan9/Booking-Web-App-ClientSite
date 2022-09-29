import { LocalizationProvider } from '@mui/x-date-pickers';
import React, { useState } from 'react';
import './HeaderDatePicker.scss'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const HeaderDatePicker = () => {
    const [value, setValue] = useState(null);
    return (
        <div className=''>
            <div className='container basicDatePicker row'>
                <div className='col-md-3 col-6 mb-3'>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DatePicker
                            className='date'

                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
                <div className='col-md-3 col-6 mb-3'>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DatePicker
                            className='date'
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
                <div className='col-md-3 col-6 mb-3'>
                <Box sx={{ minWidth: 120 }}  >
                        <FormControl className='date' fullWidth>
                            <InputLabel id="demo-simple-select-label" className='mt-2'>Children</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                //value={age}
                                label=""
                            //onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div className='col-md-3 col-6 mb-3'>
                    <Box sx={{ minWidth: 120, }}  >
                        <FormControl className='date' fullWidth>
                            <InputLabel id="demo-simple-select-label" className='mt-2'>Adult</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                //value={age}
                                label=""
                            //onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div className='col-md-6 col-6 mx-auto my-5'>
                    <button type="button" class="btn btn-light btn-lg">check availabiltiy</button>            </div>


            </div>
        </div>
    );
};

export default HeaderDatePicker;