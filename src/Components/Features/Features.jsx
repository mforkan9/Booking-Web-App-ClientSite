import React from 'react';
import Footer from '../../SharedComponent/Footer/Footer';
import Navbar from '../MainHomeItem/Navbar/Navbar';
import './Features.scss'

const Features = () => {
    return (
        <div className='feature-Section b'>
            <div className='feature-page'>
                <div className='fixed-top' style={{ backgroundColor: '#0d0d0d' }}>
                    <Navbar></Navbar>
                </div>

                <div className='feature-header'>
                    <div className='container'>

                        <div className='row' id='swim'>
                            <div className='col-md-10  mx-auto'>
                                <div className='title text-center'>
                                    <h1>Hotel Facilities</h1>
                                    <div className='text-center d-flex justify-content-center'>
                                        <h5 className=''>Home</h5>
                                        <p className='mx-2 '>/</p>
                                        <h5 style={{ color: '#ffcb05' }}>Hotel Facitilies</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className=' container mt-5 mb-5'>
                <div className='row mb-5' >
                    <div className='col-md-5 col-lg-5 col-12'>
                        <div className='facilities-img text-center border'>
                            <img src="https://demo-egenslab.b-cdn.net/html/hotelina/preview/assets/images/bg/swiming-poll.png" alt="" />
                        </div>
                    </div>
                    <div className='col-md-7 col-lg-7 col-12'>
                        <div className='content'>
                            <span>Swimming Pool</span>
                            <h3>Efficitur Sit Amet Duis Mollis Nibh Vitae Libero</h3>
                            <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci the aucan ligula. Orci varius natoque penatibus ethemen magnis disc Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci parturient monte nascete ridiculus musclineorto</p>
                        </div>
                    </div>
                </div>
                <div className='row mb-5' id='restaurant'>
                    <div className='col-md-7 col-lg-7 col-12 order-md-1 order-lg-1 order-2'>
                        <div className='content'>
                            <span>Restaurants</span>
                            <h3>Curabitur Scelerisque Lacus Ac Nisl Bibendum Tristique.</h3>
                            <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci the aucan ligula. Orci varius natoque penatibus ethemen magnis disc Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci parturient monte nascete ridiculus musclineorto</p>
                        </div>
                    </div>
                    <div className='col-md-5 col-lg-5 col-12 order-md-2 order-lg-2 order-1'>
                        <div className='facilities-img text-center border'>
                            <img src="https://demo-egenslab.b-cdn.net/html/hotelina/preview/assets/images/bg/restaurant.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='row mb-5' id='gym'>
                    <div className='col-md-5 col-lg-5 col-12'>
                        <div className='facilities-img text-center border'>
                            <img src="https://demo-egenslab.b-cdn.net/html/hotelina/preview/assets/images/bg/gym.png" alt="" />
                        </div>
                    </div>
                    <div className='col-md-7 col-lg-7 col-12'>
                        <div className='content'>
                            <span>Gym Center</span>
                            <h3>Vestibulum Sem Mauris Ultriciei Consectetur Et Et.</h3>
                            <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci the aucan ligula. Orci varius natoque penatibus ethemen magnis disc Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci parturient monte nascete ridiculus musclineorto</p>
                        </div>
                    </div>
                </div>
                <div className='row mb-5' id='transport'>
                    <div className='col-md-7 col-lg-7 col-12 order-md-1 order-lg-1 order-2'>
                        <div className='content'>
                            <span>Transport</span>
                            <h3>Malesuada Nisi Nec Urna Kular Imperdiet Posuere.</h3>
                            <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci the aucan ligula. Orci varius natoque penatibus ethemen magnis disc Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci parturient monte nascete ridiculus musclineorto</p>
                        </div>
                    </div>
                    <div className='col-md-5 col-lg-5 col-12 order-md-2 order-lg-2 order-1'>
                        <div className='facilities-img text-center border'>
                            <img src="https://demo-egenslab.b-cdn.net/html/hotelina/preview/assets/images/bg/transport.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='row mb-5' id='locker'>
                    <div className='col-md-5 col-lg-5 col-12'>
                        <div className='facilities-img text-center border'>
                            <img src="https://demo-egenslab.b-cdn.net/html/hotelina/preview/assets/images/bg/locker-room.png" alt="" />
                        </div>
                    </div>
                    <div className='col-md-7 col-lg-7 col-12'>
                        <div className='content'>
                            <span>Locker Room</span>
                            <h3>Efficitur Sit Amet Duis Mollis Nibh Vitae Libero</h3>
                            <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci the aucan ligula. Orci varius natoque penatibus ethemen magnis disc Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci parturient monte nascete ridiculus musclineorto</p>
                        </div>
                    </div>
                </div>
                <div className='row mb-5' id='spa'>
                    <div className='col-md-7 col-lg-7 col-12 order-md-1 order-lg-1 order-2'>
                        <div className='content'>
                            <span>Spa & Beauty</span>
                            <h3>Acinia Ante Est Nec Metus Metu Vestibulum Ac Nunc.</h3>
                            <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci the aucan ligula. Orci varius natoque penatibus ethemen magnis disc Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sci parturient monte nascete ridiculus musclineorto</p>
                        </div>
                    </div>
                    <div className='col-md-5 col-lg-5 col-12 order-md-2 order-lg-2 order-1'>
                        <div className='facilities-img text-center border'>
                            <img src="https://demo-egenslab.b-cdn.net/html/hotelina/preview/assets/images/bg/swiming-poll.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Features;