<<<<<<< HEAD
import React from 'react'
import { Outlet } from 'react-router-dom'

import { SidebarLeft, SidebarRight,Player } from '../../components'
=======
import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import { useSelector } from "react-redux";
>>>>>>> 91464eb50fac1167e8cff16304bc0d04aff6fdf9


const Public = () => {
<<<<<<< HEAD
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
=======
  const [isShowRightSidebar, setIsShowRightSidebar] = useState(true);
  const { isLoading } = useSelector((state) => state.app);
  const { singer } = useParams()
  return (
    <div className="w-full flex h-screen flex-col bg-main-300">
      <div className="w-full h-full flex flex-auto">
        <div className="w-[240px] h-full flex-none  ">
          <SidebarLeft />
        </div>
        <div className="flex-auto relative flex flex-col  ">
          {isLoading && (
            <div className="absolute top-0 bottom-0 right-0 left-0 z-20  flex items-center justify-center bg-main-200">
              <Loading />
            </div>
          )}
          <div className={`fixed top-0 left-[240px] ${singer ? "bg-transparent" : 'bg-main-300'}  right-[329px] z-50 h-[70px] px-[59px] flex-none flex items-center`}>
            <Header />
          </div>
          <div className="flex-auto w-full">
            <Scrollbars autoHide style={{ width: "100%", height: "100%" }}>
              <Outlet />
            </Scrollbars>
          </div>
        </div>
        {isShowRightSidebar && (
          <div className="w-[329px] flex-none hidden 1600:flex h-screen  animate-slide-left">
            <SidebarRight />
          </div>
        )}
      </div>
      <div className=" fixed z-50 bottom-0 right-0 left-0 flex-none h-[90px]">
        <Player setIsShowRightSidebar={setIsShowRightSidebar} />
      </div>
    </div>
  );
};
>>>>>>> 91464eb50fac1167e8cff16304bc0d04aff6fdf9

export default Public
