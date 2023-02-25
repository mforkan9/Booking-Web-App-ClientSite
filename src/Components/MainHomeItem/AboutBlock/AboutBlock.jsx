import React from 'react';
import './AboutBlock.scss'

const AboutBlock = () => {
    return (
        <div className='about-block container mb-5' id='About'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 col-lg-5 col-12'>
                        <div className='section-title '>
                            <span>About Our Hotel</span>
                            <h2>Get Here The Finest Hote Experience.</h2>

                            <p className='text-muted'>Hotel ut nisl quam nestibulum ac quam nec odio elementum
                                oneni sceisuen the aucan ligula. Orci varius natoque
                                penatibus ethemen magnis discustent parturient monte
                                nascete ridiculus musclineorto elementum oneni sceisuen
                                the aucan ligula. Orci nellentesque habitant forminy
                                morbine.</p>
                        </div>
                        <blockquote className='quote'>
                            <p>Hotel ut nisl quam nestibulum ac quam nec odion elementum oneni 
                                sceisuen the aucan ligula orchive varius natoque this called.</p>
                                <h4>Hotel Chairman</h4>

                        </blockquote>
                        <button className='btn btn-outline-warning py-3 px-5 text-dark mt-3'>Discoverd More</button>
                    </div>
                    <div className='col-md-7 col-lg-7 col-12'>
                        <div className='about-img'>
                            <div className='row'>
                                <div className='col-md-5 col-lg-5  py-3'>
                                    <div className='mb-5 img-1'>
                                        <img style={{ width: '100%' }} src="https://demo-egenslab.b-cdn.net/html/hotelina/preview/assets/images/bg/h2-about-img1.png" alt="" srcset="" />
                                    </div>
                                    <div className='rating '>
                                        <img src="https://demo-egenslab.b-cdn.net/html/hotelina/preview/assets/images/icons/trio.svg" alt="" />
                                        <h2>5.0</h2>
                                    </div>
                                </div>
                                <div className='col-md-7 col-lg-7 py-3'>
                                    <img style={{ width: '100%', height: '100%' }} src="https://demo-egenslab.b-cdn.net/html/hotelina/preview/assets/images/bg/h2-about-img2.png" alt="" srcset="" />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBlock;