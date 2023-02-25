import React from 'react';
import ChartCard from './ChartCard/ChartCard';
import CounterCard from './CounterCard/CounterCard';
import './MainDash.scss'

const MainDash = () => {
    return (
        <div>
            <h4>Dashboard</h4>
            <CounterCard></CounterCard>
            <ChartCard></ChartCard>
      
        </div>
    );
};

export default MainDash;