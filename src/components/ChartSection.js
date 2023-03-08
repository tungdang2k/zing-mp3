import React, { memo, useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

import bgChart from "../assets/img/bg-chart.jpg";
import { SongItem } from "./";
import path from "../untils/path";
import icons from "../untils/icons";

const {BsFillPlayFill} = icons

const ChartSection = () => {
  const [data, setData] = useState(null);
  const [tooltipState,setTooltipState] = useState({
    opacity:0,
    top:0,
    left:0
  })
  const [selected,setSelected ] = useState(null)
  const { chart, rank } = useSelector((state) => state.app);
  const chartRef = useRef()
  const options = {
    responsive: true,
    pointRadius: 0,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: { display: false },
        grid: { color: "rgba(255,255,255,0.3)", drawTicks: false },
        min: chart?.minScore,
        max: chart?.maxScore,
        border: { dash: [3, 4] },
      },

      x: {
        ticks: { color: "white" },
        grid: { color: "transparent" },
      },
    },
    plugins: {
      legend: false,
      tooltip:{
        enabled:false,
        external:({tooltip}) => {
          if(!chartRef || !chartRef.current) return
          if(tooltip.opacity === 0){
            if(tooltipState.opacity !== 0) setTooltipState(prev => ({...prev, opacity:0}))
            return
          }
          const dataCounters = []
          for(let i=0;i<3;i++){
            dataCounters.push({
               data:chart?.items[Object.keys(chart?.items)[i]]
               ?.filter((item) => +item.hour % 2 === 0)
               ?.map((item) => item.counter),
               encodeId:Object.keys(chart?.items)[i]
            })
          }
          const result = dataCounters.find( i => i.data.some(num => num === +tooltip.body[0]?.lines[0]?.replace(',','')))
          setSelected(result.encodeId)
          const newTooltipData = {
            opacity:1,
            left:tooltip.caretX,
            top:tooltip.caretY,
          }
          if(!_.isEqual(tooltipState,newTooltipData)) setTooltipState(newTooltipData)
        }
      }
    },
    hover: {
      mode: "dataset",
      intersect: false,
    },
  };

  useEffect(() => {
    const labels = chart?.times
      ?.filter((item) => +item.hour % 2 === 0)
      ?.map((item) => `${item.hour}:00`);
    const datasets = [];
    if (chart?.items) {
      for (let i = 0; i < 3; i++) {
        datasets.push({
          data: chart?.items[Object.keys(chart?.items)[i]]
            ?.filter((item) => +item.hour % 2 === 0)
            ?.map((item) => item.counter),
          borderColor: i === 0 ? "#4a90e2" : i === 1 ? "#50e3c2" : "#e35050",
          tension: 0.2,
          borderWidth: 3,
          pointBackgroundColor:
            i === 0 ? "#4a90e2" : i === 1 ? "#50e3c2" : "#e35050",
          pointHoverRadius: 4,
          pointBorderColor: "white",
          pointBorderWidth: 4,
        });
      }
    }
    setData({ labels, datasets });
  }, [chart]);
  return (
    <div className="px-[59px] mt-12 relative max-h-[430px] ">
      <img
        src={bgChart}
        alt="bgChart"
        className="w-full object-cover rounded-md max-h-[430px] "
      />
      <div className="absolute top-0 left-[59px] right-[59px] bottom-0 z-10  bg-[rgba(77,34,104,0.9)] rounded-md"></div>
      <div className="absolute top-0 left-[59px] right-[59px] bottom-0 z-20 p-5 flex flex-col gap-8 rounded-md">
        <Link to={path.ZING_CHART} className='flex gap-2 items-center hover:text-green-800 text-white'>
          <h3 className="text-2xl  font-bold ">#zingChart</h3>
          <span className=" p-1 rounded-full bg-white"><BsFillPlayFill size={15} color='green'/></span>
        </Link>
        <div className="flex gap-4 f-full">
          <div className="flex-3 flex flex-col gap-4">
            {rank
              ?.filter((i, index) => index < 3)
              ?.map((item, index) => (
                  <SongItem
                    key={item.encodeId}
                    thumbnail={item.thumbnail}
                    title={item?.title}
                    artists={item?.artistsNames}
                    sid={item?.encodeId}
                    order={index + 1}
                    percent={Math.round(+item?.score * 100 / +chart?.totalScore)}
                    style='text-white bg-[#ffffff12] hover:bg-[#A874B8]'
                  />
              ))}
              <Link to={path.ZING_CHART} className='text-white px-4 py-2 rounded-l-full m-auto rounded-r-full border border-white hover:bg-[#462e60]'>Xem thêm</Link>
          </div>
          <div className="flex-6 h-full relative ">
            {data && <Line data={data} ref={chartRef} options={options} />}
            <div className="tooltip" style={{ top: tooltipState.top, left: tooltipState.left, opacity: tooltipState.opacity , position:'absolute'}} > 
            <SongItem
                    thumbnail={rank?.find(i=> i.encodeId === selected)?.thumbnail}
                    title={rank?.find(i=> i.encodeId === selected)?.title}
                    artists={rank?.find(i=> i.encodeId === selected)?.artistsNames}
                    sid={rank?.find(i=> i.encodeId === selected)?.encodeId}
                    percent={Math.round(+rank?.find(i => i.encodeId === selected )?.score * 100 / +chart?.totalScore)}
                    style='bg-white'
                  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ChartSection);
