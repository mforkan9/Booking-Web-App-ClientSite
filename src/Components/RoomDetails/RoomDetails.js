import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from '../MainHomeItem/Navbar/Navbar';
import './RoomDetails.scss'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Spineer from '../../SharedComponent/Spinner/Spineer';
import Footer from '../../SharedComponent/Footer/Footer';


const sliderSwipe = [
    {
        imgUrl: "https://placeimg.com/800/600/nature?random=3"
    },
    {
        imgUrl: "https://placeimg.com/800/600/nature?random=4"
    },
    {
        imgUrl: "https://placeimg.com/800/600/nature?random=5"
    },
    {
        imgUrl: "https://placeimg.com/800/600/nature?random=6"
    },
    {
        imgUrl: "https://placeimg.com/800/600/nature?random=8"
    },
    {
        imgUrl: "https://placeimg.com/800/600/nature?random=9"
    },
    {
        imgUrl: "https://placeimg.com/800/600/nature?random=0"
    },
    {
        imgUrl: "https://placeimg.com/800/600/nature?random=1"
    },
    {
        imgUrl: "https://placeimg.com/800/600/nature?random=33"
    },
    {
        imgUrl: "https://placeimg.com/800/600/nature?random=66"
    },
    {
        imgUrl: "https://placeimg.com/800/600/nature?random=39"
    },
    {
        imgUrl: "https://placeimg.com/800/600/nature?random=39"
    },
]



const RoomDetails = () => {
    const { id } = useParams()
    const [roomData, setRoomData] = useState({})
    const [roomInnerImage, setRoomInnerImage] = useState([])
    const [loader, setloader] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:8000/api/v1/room/roomFindById/${id}`)
            .then(res => res.json())
            .then(data => {
                setRoomData(data?.value)
                setRoomInnerImage(data?.value?.roomInnerImage)
                setloader(false)
            })
    }, [id])



    console.log(roomData, roomInnerImage);

    return (
        <div className='room-details-page '>
            <div className='fixed-top' style={{ backgroundColor: '#0d0d0d' }}>
                <Navbar></Navbar>
            </div>

            <div className='room-details-header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-10 col-12 mx-auto'>
                            <div className='title text-center'>
                                <h1>Room Details</h1>
                                <div className='text-center d-flex justify-content-center'>
                                    <h5 className=''>Home</h5>
                                    <p className='mx-2 '>/</p>
                                    <h5 style={{ color: '#ffcb05' }}>Room Details</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='room-details-main mt-5 mb-5 container'>
                <div className='container mt-3'>
                    <div className='row '>

                        <div className='col-md-12 col-lg-3 col-12 mx-auto mb-5'>
                            <div className='row'>
                                <div className='col-md-12  col-12 mb-3'>
                                    <div className='contact-block container'>
                                        <h5 className='fw-bold'>Contact Support</h5>
                                        <small>If you have any question please don't hesitate to contact us</small>
                                        <ul className='list-unstyled mt-4'>
                                            <li className='d-flex text-muted'>
                                                <span><i class="fa fa-phone me-3 py-2 fs-4" aria-hidden="true"></i></span>
                                                <div>
                                                    <p className='mb-0'>+123 00088899</p>
                                                    <p>+923 00088899</p>
                                                </div>
                                            </li>
                                            <li className='d-flex text-muted'>
                                                <span><i class="fa fa-envelope-open  me-3 py-2 fs-4" aria-hidden="true"></i></span>
                                                <div>
                                                    <p className='mb-0'>info@starhotel.com</p>
                                                    <p>support@starhotel.com</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-12 col-12 mt-4'>
                                    <div className='special-offer-block'>
                                        <div className='circle mx-auto'>
                                            <span>December</span>
                                            <h3>Special Offer</h3>
                                            <p>Get 30% OFF</p>
                                        </div>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                                        <button type="button" class="btn btn-outline-dark mt-3" data-mdb-ripple-color="dark">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 col-lg-9 col-12 mx-auto  '>
                            <div className='border'>
                                <div className='carousel-slider '>
                                    {
                                        loader && <Spineer></Spineer>
                                    }
                                    <div className='room-Inner-Carousel'>
                                        <div className='price-tag'>
                                            <p><span>$ {roomData.ratePerNight} </span>/ Per Night</p>
                                        </div>
                                    </div>
                                    <Swiper
                                        pagination={{
                                            clickable: true,
                                        }}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        modules={[Pagination, Autoplay]}
                                        className="mySwiper"
                                    >
                                        {
                                            roomInnerImage.map(item =>
                                                <SwiperSlide>
                                                    <div className='' style={{ height: '600px' }}>
                                                        <img src={item} width='100%' height={'100%'} alt="" />
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        }
                                    </Swiper>

                                </div>
                                <div className='room-facilities border'>
                                    <div className='row facility container'>
                                        <div className='col-md-2 col-4  mb-3  facility-block'>
                                            <span>
                                                <i class="fa fa-wifi fs-3" aria-hidden="true"></i>
                                            </span>
                                            <p>Free Wifi</p>
                                        </div>
                                        <div className='col-md-2 col-4  mb-3   facility-block'>
                                            <span>
                                                <i class="fa fa-coffee fs-3" aria-hidden="true"></i>
                                            </span>
                                            <p>Coffee Maker</p>
                                        </div>
                                        <div className='col-md-2  col-4 mb-3 facility-block'>
                                            <span>
                                                <i class="zmdi zmdi-google-earth fs-3"></i>                                    </span>
                                            <p>Sports</p>
                                        </div>
                                        <div className='col-md-2 col-4  mb-3  facility-block'>
                                            <span>
                                                <i class="fa fa-phone fs-3" aria-hidden="true"></i>
                                            </span>
                                            <p>Alert Phone</p>
                                        </div>
                                        <div className='col-md-2 col-4  mb-3  facility-block'>
                                            <span>
                                                <i class="fa fa-cutlery fs-3" aria-hidden="true"></i>                                            </span>
                                            <p>Food Serve</p>
                                        </div>
                                        <div className='col-md-2 col-4 mb-3 facility-block'>
                                            <span>
                                                <i class="fa fa-television fs-3" aria-hidden="true"></i>
                                            </span>
                                            <p>Wide LCD TV</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='room-description'>
                                    <div className='container mt-5 mb-4'>
                                        <h2 className='mb-0'>{roomData.roomType} Room</h2>
                                        <p className='text-muted'>A room with sea view</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut the enim ad minim veniam, quis nostrud exer citation ullamco laboris nisi ut aliquip ex ea com modo conse quat. Duis aute irure dolor in reprehend erit in volupt ate velit esse cillum dolore eu fugiat nulla pari atur. Except eur sint occa ecat cupi datat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volup tatem accusantium the doloremque lauda ntium, totam rem aper iam, eaque ipsa quae

                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam placerat tortor at suscipit. Nunc iaculis libero a quam consequat molestie. Cras volutpat ornare lectus, ut pulvinar neque pretium eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam placerat tortor at suscipit. Nunc iaculis libero a quam consequat molestie.

                                            Cras volutpat ornare lectus, ut pulvinar neque pretium eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam placerat tortor at suscipit. Nunc iaculis libero a quam consequat molestie.</p>
                                        <div className='text-end'>
                                            <Link to={`/roomReservation/${id}`}> <button type="button" class="btn btn-warning btn-rounded text-dark">Book Now</button></Link>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        <Footer></Footer>
        </div>
    );
};

export default RoomDetails;