import React, { useEffect, useState } from 'react';
import './AreaChart.scss'
import ReactApexChart from "react-apexcharts";

const AreaChart = () => {
    const [orderList, setOrderList] = useState([])
    const [reserveData, setReserveData] = useState([])
    const [seriesData, setSeriesData] = useState([])

    const dataLimit = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec']

    const areaOption = {
        series: [{
            name: 'CheckIn',
            data: seriesData
        }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'month',
                categories: dataLimit
            },
            tooltip: {
                x: {
                    format: 'MM'
                },
            },
        },
    }

    useEffect(() => {
        fetch(`https://start-hotel-practice-project.onrender.com/api/v1/booking/bookingFindByMonth`)
            .then(res => res.json())
            .then(data => setOrderList(data.data))
    }, [])

    useEffect(() => {
        let dataMap = {};
        orderList.forEach((el) => {
            let tempUser = new Date(el.createdAt).getMonth()
            if (tempUser in dataMap) {
                dataMap[tempUser].value.push(el);
            } else {
                dataMap[tempUser] = {
                    month: tempUser,
                    value: [el],
                };
            }
        });

        const data = [];

        // Fill the data
        Object.keys(dataMap).forEach((el) => data.push(dataMap[el]));
        setReserveData(data)

    }, [orderList])

    useEffect(() => {
        const element = [];
        for (let i = 0; i < dataLimit.length; i++) {
            element.push(dataLimit[i] = 0)
            for (const data of reserveData) {
                if (i === data.month) {
                    element[i] = data.value.length
                }
            }
        }
        setSeriesData(element)
    }, [reserveData])


    return (
        <div className='card'>
            <div className='card-body'>
                <div className='card-header mb-1'>
                    <h4 className='text-black'>Reservation Statistic</h4>
                    <span className='text-muted'>Lorem ipsum dolor sit amet</span>
                </div>
                <div className='py-4'>
                    <ReactApexChart options={areaOption.options} series={areaOption.series} type="area" height={350} />
                </div>
            </div>
        </div>
    );
};

export default AreaChart;