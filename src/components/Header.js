import React from 'react'

import icons from '../untils/icons'
import { Search } from './'
import { useNavigate, useParams } from 'react-router-dom'
const { BsArrowRight, BsArrowLeft } = icons
const Header = () => {
    const navigate = useNavigate()
    const { singer } = useParams()
    return (
        <div className='flex justify-between w-full bg-[#fcfff]'>
            <div className="flex gap-6 w-full items-center" >
                <div className="flex  cursor-pointer gap-6">
                    <span onClick={() => navigate(-1)}><BsArrowLeft size={24} color={singer ? 'gray' : 'black'} /></span>
                    <span onClick={() => navigate(-1)} ><BsArrowRight size={24} color={singer ? 'gray' : 'black'} /></span>
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
