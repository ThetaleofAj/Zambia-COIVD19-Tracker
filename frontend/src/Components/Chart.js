import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const Chart=()=>{
const url = "http://andyson2.pythonanywhere.com/api/chartdata/"
const [chartData, SetchartData] = useState([]);
//Getting data from API
const getData = async ()=>{
  const response = await fetch(url);
  const responseJson = await response.json();
  SetchartData(responseJson);
};
useEffect(()=>{
  getData();
},[]);

//CHART SETUP
const data = {
  labels: chartData.map((data)=>data.StartOfWeekDate),
  datasets: [
    {
      label: '# of Cases',
      data: chartData.map((data)=>data.figure),
      fill: false,
      
      borderColor: 'red',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  elements:{
    line:{
      tension:0.5
    }
  }
};
    return(
      <div className="ChartArea">
<Line data={data} options={options}/>
      </div>
    )
    
}

export default Chart;