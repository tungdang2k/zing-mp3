import React, { memo, useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'
import { useSelector } from 'react-redux'

import bgChart from '../assets/img/bg-chart.jpg'


const ChartSection = () => {

  const [data, setData] = useState(null)
  const {chart, rank} = useSelector(state => state.app)

  const options={
    responsive:true,
    pointRadius:0,
    aspectRatio:4,
    scales:{
      y:{
        ticks:{display:false},
        grid:{borderDash:[4,4], color:'rgba(255,255,255,0.5)'}
      },

      x:{
        ticks:{color:'white'},
        grid:{color:'transparent'}
      },
    },
    plugins:{
      legend:false
    }
  }

  useEffect(()=>{
    const labels = chart?.times?.filter(item => +item.hour % 2 === 0)?.map(item => item.hour)
    const datasets =[]
    if(chart?.items){
      for(let i=0; i<3;i++){
        datasets.push({
          data:chart?.items[Object.keys(chart?.items)[i]]?.filter(item => +item.hour % 2 === 0)?.map(item => item.counter),
          borderColor: i === 0 ? 'blue': i===1 ? 'yellow' : 'red',
          tension:0.2,
          borderWidth:2
        })
      }
    }
    setData({labels,datasets})
  },[chart])
  return (
    <div className='px-[59px] mt-12 relative'>
      <img src={bgChart} alt="bgChart" className='w-full object-contain rounded-md ' />
      <div className="absolute top-0 left-[59px] right-[59px] bottom-0 z-10  bg-[rgba(77,34,104,0.9)]"></div>
      <div className='absolute top-0 left-[59px] right-[59px] bottom-0 z-20 p-5'>
        <h3 className="text-2xl text-white font-bold ">#zingChart</h3>
        <div className="flex gap-4 f-full">
          <div className="flex-4">rank</div>
          <div className="flex-6h-full">
            {data && <Line data={data}  options={options}/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(ChartSection)
