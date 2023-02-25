import React from 'react';
import './OfferBlock.scss'

const OfferBlock = () => {
    return (
        <div className='container offer' id='Offer'>
            <div className='container'>

            <div className='row'>
                <div className='col-md-6 mb-3'    data-aos="zoom-in"
                     data-aos-offset="300"
                     data-aos-duration="1000"
                     data-aos-easing="ease-in-sine">
                    <div className='offerblock d-flex align-item-center justify-content-between'>
                        <div className='content'>
                            <span>Member get</span>
                            <h2>40% off</h2>
                            <p>Standred Room</p>
                            <button className='btn btn-outline-warning py-3 px-5 rounded-pill'>Book Now</button>
                        </div>
                        <div className='offer-img'>
                            <img src="https://demo-egenslab.b-cdn.net/html/hotelina/preview/assets/images/bg/room10.png" alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div className='col-md-6'   data-aos="zoom-in"
                     data-aos-offset="300"
                     data-aos-duration="1000"
                     data-aos-easing="ease-in-sine">
                    <div className='offerblock d-flex align-item-center justify-content-between'>
                        <div className='content'>
                            <span>Member get</span>
                            <h2>30% off</h2>
                            <p>Family Room</p>
                            <button className='btn btn-outline-warning py-3 px-5 rounded-pill'>Book Now</button>
                        </div>
                        <div className='offer-img'>
                            <img src="https://demo-egenslab.b-cdn.net/html/hotelina/preview/assets/images/bg/h2-about-img1.png" alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
                            
            </div>
        </div>
    );
};

export default OfferBlock;