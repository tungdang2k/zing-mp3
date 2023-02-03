import React,{useEffect} from "react";
import { useSelector } from "react-redux";

import { getArrSlider } from "../untils/fn";

const Slider = () => {
  const { banner } = useSelector((state) => state.app);

    useEffect(()=>{
        const  silderEls = document.getElementsByClassName('slider-item')
        let min = 0
        let max = 2
        const  intervalId =  setInterval(() => {

            const list = getArrSlider(min, max, silderEls.length - 1 )

            for(let i = 0; i<  silderEls.length; i++){
                if(list.some(item => item === i) ){
                    silderEls[i].style.display = `none`
                }else{
                    silderEls[i].style.display = `block`
                    
                }
            }
            min += 1
            max += 1 
            if(max > silderEls.length - 1 ) max = 0
            if(min > silderEls.length - 1 ) min = 0
        }, 3000);
        
        return ()=>{
            intervalId && clearInterval(intervalId)
        }
    },[])
  return (
    <div className="flex gap-4 w-full overflow-hidden px-[59px] pt-8 ">
      {banner?.map((item) => (
        <img
          src={item.banner}
          alt={item.banner}
          key={item.encodeId}
          className="slider-item flex-1 object-contain w-1/3 rounded-lg "
        />
      ))}
    </div>
  );
};

export default Slider;
