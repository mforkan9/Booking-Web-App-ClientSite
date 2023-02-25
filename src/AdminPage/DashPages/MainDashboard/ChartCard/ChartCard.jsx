import React, { useEffect } from 'react';
import './ChartCard.scss'
import AreaChart from '../../../MainDashItem/AreaChart/AreaChart';
import CircleChart from '../../../MainDashItem/CircleChart/CircleChart';
import BarChart from '../../../MainDashItem/BarChart/BarChart';


const ChartCard = () => {

     return (
        <div className='my-3'>
            <div className='row chart-cards '>
                <div className='col-md-3 col-lg-3 col-xl-4 col-xxl-4 col-12 mb-4'>
                    <div className="row ">
                        <div className="col-md-12 mb-3 circle-card">
                          <CircleChart></CircleChart>
                        </div>
                        <div className="col-md-12">
                         <BarChart></BarChart>
                        </div>
                    </div>

                </div>
                <div className="col-md-9 col-lg-9 col-xl-8 col-xxl-8 col-12">
                 <AreaChart></AreaChart>
                </div>
            </div>
        </div>

    );
};

export default ChartCard;