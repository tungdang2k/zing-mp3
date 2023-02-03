import React from 'react'
import { Outlet } from 'react-router-dom'

import { SidebarLeft, SidebarRight } from '../../components'


const Public = () => {
    return (
        <div className='w-full flex bg-[#e5e3df]'>
            <div className='w-[240px] flex-none border border-blue-500 '>
                <SidebarLeft />
            </div>
            <div className='flex-auto border border-red-500'>
                <Outlet />
            </div>
            <div className="w-[340px] flex-none  border border-green-500">
                {/* <SidebarRight /> */}
                <SidebarRight />
            </div>
        </div>
    )
}

export default Public
