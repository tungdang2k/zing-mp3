import React,{useEffect, useRef} from "react";
import { useSelector,useDispatch } from "react-redux";

import { getArrSlider } from "../untils/fn";
import * as action from '../store/action'

const Slider = () => {
  const { banner } = useSelector((state) => state.app);
  const dispatch = useDispatch()
    const listElement = useRef()

    useEffect(()=>{
      const  silderEls = document.getElementsByClassName('slider')  
        let min = 0
        let max = 2
        const  intervalId =  setInterval(() => {

            const list = getArrSlider(min, max, silderEls.length - 1 )
            // console.log('list',list)

            for(let i = 0; i<  silderEls.length; i++){

                silderEls[i]?.classList?.remove('animate-slide-right', 'order-last', 'z-20')
                silderEls[i]?.classList?.remove('animate-slide-left', 'order-first', 'z-10')
                silderEls[i]?.classList?.remove('animate-slide-left2', 'order-2', 'z-10')

                if(list.some(item => item === i) ){
                    silderEls[i].style.cssText = `display: none`

                }else{
                  silderEls[i].style.cssText = `display: block`
                    
                }
            }

            // console.log('useRef',listElement)
            list.forEach(item => {
                if(item === max){
                  silderEls[item]?.classList?.add('animate-slide-right', 'order-last', 'z-20')
                }else if(item === min){
                    silderEls[item]?.classList?.add('animate-slide-left', 'order-first', 'z-10')
                }else{
                    silderEls[item]?.classList?.add('animate-slide-left2', 'order-2', 'z-10')
                }
            })


            // min += 1
            // max += 1 
            // if(max > silderEls.length - 1 ) max = 0
            // if(min > silderEls.length - 1 ) min = 0

            min = (min === silderEls.length - 1) ? 0 : min + 1
            max = (max === silderEls.length - 1) ? 0 : max + 1


        }, 3000);
        
        return ()=>{
            intervalId && clearInterval(intervalId)
        }
    },[])

    const handleClickBanner = (item)=>{
      if(item?.type === 1 ){
        dispatch(action.setCurrentSongId(item.encodeId))
        dispatch(action.play(true))
      }
      
    }
  return (
    <div className='w-full overflow-hidden px-[59px]'>
      <div className="flex gap-8 w-full pt-8 " 
      >
        {banner?.map((item, index) => (
          <img
            ref={listElement}
            src={item.banner}
            alt={item.banner}
            key={item.encodeId}
            onClick={() => handleClickBanner(item)}
            className={`slider flex-1 object-contain w-[30%] rounded-lg cursor-pointer ${index <= 2 ? 'block' : 'hidden'} ` }
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
