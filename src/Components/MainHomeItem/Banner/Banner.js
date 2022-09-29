import React from 'react';
import './Banner.scss'

const Banner = () => {
    return (
        <div className='banner'>
            <div className=' text-center container'>
                <div className='row container'>
                    <div className='col-md-4 mb-3'>
                        <div className='block-1'>
                            <span className='icon'>
                                <i className='fa fa-cutlery'></i>
                            </span>
                            <h3>Best Service</h3>
                            <p>lorem  dfdslkfjds ofjldsjflsdjf
                             jlskdjfsdf  jfsdjflsd fljflfj fjlsdfj
                             dfjklsdkjfl;skadjflsadkjflsdkjflsdkfdl</p>
                        </div>
                    </div>
                    <div className='col-md-4 mb-3'>
                    <div className='block-2'>
                            <span className='icon'>
                                <i className='fa fa-thumbs-up'></i>
                            </span>
                            <h3>Quality Food</h3>
                            <p>lorem  dfdslkfjds ofjldsjflsdjf
                             jlskdjfsdf  jfsdjflsd fljflfj fjlsdfj
                             fsdkjfl;skdjfl;sdjfl;sadjflsadjflsadk</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                    <div className='block-3'>
                            <span className='icon'>
                                <i className='fa fa-fire'></i>
                            </span>
                            <h3>Perfect Cooked</h3>
                            <p>lorem  dfdslkfjds ofjldsjflsdjf
                             jlskdjfsdf  jfsdjflsd fljflfj fjlsdfj
                             fsladkjfl;skdjfl;sk;adjflskadfjlskd</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;