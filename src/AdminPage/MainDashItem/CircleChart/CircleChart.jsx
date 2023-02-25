import React, { useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";

const CircleChart = () => {
    const [availableRoom,setAvailableRoom] = useState([])
    const [seriesValue,setSeriesValue] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:8000/api/v1/room/createRoom`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const dataas = []
            for(const dat of data.roomAvailable){
                //console.log(dat)
                if (dat.status === 'Active') {
                    dataas.push(dat)
                }
            }
            const seriesPersentage = Math.floor(100/data.totalData) * dataas.length
            setSeriesValue(seriesPersentage)
            setAvailableRoom(dataas)
        })
    }, [])

    console.log(availableRoom);

    const option = {
        series: [seriesValue],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '50%',
                    },
                },
            },
            labels: ['Room'],
        },
    }
    return (
        <div>
            <div className='card text-center'>
                <div className="card-body">
                    <div>
                        <ReactApexChart options={option.options} series={option.series} type="radialBar" height={200} />
                    </div>
                    <h2 className='text-dark fw-bold'>{availableRoom.length}</h2>
                    <span>Available Room Today</span>
                </div>
            </div>
        </div>
    );
};

export default CircleChart;