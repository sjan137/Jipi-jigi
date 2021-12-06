import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import s from './loading.css'
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';
import { truncate } from 'lodash-es';

const AppSeoulbus = () => {
  let y = [];
  let x = [""];
  
  const chart = () => {
    axios
      .get("http://15.164.225.133:5000/seoulbus")
      .then(res => {
        if(res.status === 200){
          console.log("서울버스 데이터 가져왔다.")
          for(const dataobj of res.data){
            // var temp = dataobj.get_on;
            // var temp1 = dataobj.get_off;
            // y.push(Number(temp - temp1));
            y.push((dataobj.get_on));
            x.push((dataobj.date_day));
          }
        }else{
          console.log("서울버스 데이터 못 가져왔다.")
        }
      })
      .catch(err => {
        console.log(err)
      });
    console.log(x,y)
    
    

  }

  
  useEffect(() => {
  
    chart();
  }, []);

  const [options, setoptions] = useState({
    chart: {
      id: 'apex chart'
    },
    title:{
      text: "Bus data",
      style:{
        fontSize:30
      }
    },
    subtitle:{
      text:"서울시 버스 데이터 통계"
    },
    // labels: x,
    xaxis: {
      // tickPlacement:'on',
      // type: 'datetime',
      categories: x,
      title: {
        text: "Day",
        style:{
          color: '#0f0'
        }
      }
    },
    yaxis: {
      style: {
        colors:['#ff0']
      },
      title:{
        text:"Amount",
        style:{
          color: '#0f0'
        }
      }
    }
  })
  const [series, setseries] = useState([{
    name: '일일 버스 탑승객',
    data: y,
    color: "#0c2925",
  }])


  return (
    <div>
      <Chart options={options} series={series} type="line" width={1000} height={600} />
    </div>
    
  );
};




export default AppSeoulbus
