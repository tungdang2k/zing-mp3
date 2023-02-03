import React from 'react'

import icons from '../untils/icons'
import { Search } from './'
const { BsArrowRight, BsArrowLeft } = icons
const Header = () => {
    return (
        <div className='flex justify-between w-full bg-[#fcfff]'>
            <div className="flex gap-6 w-full items-center" >
                <div className="flex  text-gray-400 gap-6">
                    <span><BsArrowLeft size={24} /></span>
                    <span><BsArrowRight size={24} /></span>
                </div>
                <div className="w-1/2">
                    <Search />
                </div>
            </div>
            <div className="">
                dang nhap
            </div>
        </div>
    )
}

export default Header
