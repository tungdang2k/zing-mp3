import React, { memo } from 'react'

import { handleNumber } from '../untils/fn'
import icons from '../untils/icons'


const {AiOutlineUserAdd} = icons
const Artist = ({imgae, title, follower}) => {
  return (
    <div className=' w-1/5  flex flex-col gap-[15px]'>
      <img src={imgae} alt="artist" className='w-full object-contain rounded-full'/>
      <div className='flex gap-1 flex-col items-center'>
        <span className='text-sm font-medium'>{title}</span>
        <span className='text-xs opacity-70'>{`${handleNumber(follower)} quan tâm`}</span>
      <button
      type='button'
      className='bg-main-500 px-4 py-1 text-white text-sm rounded-l-full rounded-r-full flex items-center justify-center gap-1'
      >
          <AiOutlineUserAdd/>
        <span className='text-xs opacity-70'>QUAN TÂM</span>
      </button>
      </div>
    </div>
  )
}

export default memo(Artist)
