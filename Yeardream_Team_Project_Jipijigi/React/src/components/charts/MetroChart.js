import { merge } from 'lodash';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
import { BaseOptionChart } from '../../components/charts';
import { Card, CardHeader, Box } from '@mui/material';


// Chart.register(...registerables);

const Metro = () => {
  const [number, setnumber] = useState([])
  const [date, setdate] = useState([])

  const [chartdata, setchartdata] = useState({
    labels: ['1'],
    datasets: [
      {
        label: "국내 누적 확진자",
        backgroundColor: "red",
        fill: true,
        data: [1]
      },
    ]
  })

  const chart = () => {

    let y = [];
    let x = [];
    axios
      .get('http://15.164.225.133:5000/metro')
      .then(res => {
        console.log(res)
        for(const dataobj of res.data){
          y.push(parseInt(dataobj.ALIGHT));
          x.push(parseInt(dataobj.DATE));
        }
        setchartdata({
          labels: x,
          datasets: [
            {
              label: "지하철 이용객",
              borderColor: "red",
              fill: false,
              data: y,
            },
          ]
        });
      })
      .catch(err => {
        console.log(err)
      });
    console.log(x, y)


  }


  useEffect(() => {
    chart();
  }, []);

  const CHART_DATA = [chartdata.datasets.data]

  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: 'gradient' },
    labels: chartdata.labels,
    xaxis: { type: 'string' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        }
      }
    }
  });
  

  return (
    <Card>
      <CardHeader title="교통 데이터" subheader="국내 코로나 관련 정보입니다." />
      {/* <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box> */}
    </Card>
  )
}

export default Metro
