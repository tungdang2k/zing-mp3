import React from 'react'
import { Outlet } from 'react-router-dom'

const Search = () => {
  return (
    <div className='w-full'>
      <div className="flex h-[50px] mb-7 items-center text-sm pb-1  border border-b-gray-400 pl-[60px]  ">
        <span className="text-[24px] font-semibold pr-6">Kết quả tìm kiếm</span>
        <div className="flex items-center border-r border-gray-400">
        <span className="px-4 hover:text-main-500 font-semibold cursor-pointer ">TẤT CẢ</span>
        <span className="px-4 hover:text-main-500 font-semibold cursor-pointer ">BÀI HÁT</span>
        <span className="px-4 hover:text-main-500 font-semibold cursor-pointer ">PLAYLIST/ALBUM</span> 
        <span className="px-4 hover:text-main-500 font-semibold cursor-pointer ">NGHỆSĨ/OA</span>
        <span className="px-4 hover:text-main-500 font-semibold cursor-pointer ">MV</span>
        </div>
      </div>
      <div className="w-full">
        <Outlet/>
      </div>
      <div className="w-full h-[120px]"></div>
    </div>
  )
}

export default Search
