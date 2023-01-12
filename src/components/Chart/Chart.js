import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';
const Chart = (props) => {
  const value = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximun = Math.max(...value);
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          lable={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
