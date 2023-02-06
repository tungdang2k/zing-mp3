import React from 'react'
import { Outlet } from 'react-router-dom'

import { SidebarLeft, SidebarRight,Player } from '../../components'


const Public = () => {
    return (
        <div className='w-full flex min-h-screen flex-col bg-main-300'>
            <div className='w-full h-full flex flex-auto'>
                <div className='w-[240px] min-h-screen flex-none border border-blue-500 '>
                    <SidebarLeft />
                </div>
                <div className='flex-auto border border-red-500'>
                    <Outlet />
                </div>
                <div className="w-[329px] flex-none  border border-green-500">
                    {/* <SidebarRight /> */}
                    <SidebarRight />
                </div>
            </div>
            <div className="flex-none h-[90px]">
                <Player/>
            </div>
        </div>
    )
}

export default Public