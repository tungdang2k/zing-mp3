<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useSearchParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import { searchMenu } from '../../untils/menu'


const Search = () => {

  const notActiveStyle = 'px-4 hover:text-main-500 font-semibold cursor-pointer'
  const activeStyle = 'border-b border-green-900 h-[52px] flex items-center text-main-500 px-4 hover:text-main-500 font-semibold cursor-pointer '

  const { keyword } = useSelector(state => state.music)

  return (
    <div className='w-full'>
      <div className="flex h-[50px] mb-7 items-center text-sm pb-1  border border-b-gray-400 pl-[60px]  ">
        <span className="text-[24px] font-semibold pr-6 border-r border-gray-400">Kết quả tìm kiếm</span>
        <div className="flex items-center ">
          {searchMenu.map(item => (
            <NavLink
              key={item.path}
              to={`${item.path}?q=${keyword.replace(' ', '+')}`}
              className={({ isActive }) => isActive ? activeStyle : notActiveStyle}
            >{item?.text}</NavLink>
          ))}

        </div>
      </div>
      <div className="w-full">
        <Outlet />
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e
      </div>
      <div className="w-full h-[120px]"></div>
    </div>
  )
}

export default Search
