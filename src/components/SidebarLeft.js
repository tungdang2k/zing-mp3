import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg";
import { sidebarMenu } from "../untils/menu";
import path from "../untils/path"

const notActiveStyle =
    "py-2 px-[25px] font-bold text-[#32323d] text-[13px] flex gap-[12px] items-center";
const activeStyle =
    "py-2 px-[25px] font-bold text-[#0f7070] text-[13px] flex gap-[12px] items-center";
// ({ isActvive }) =>
//
const SidebarLeft = () => {
    
    const navigate = useNavigate()

    return (
        <div className="flex flex-col h-full bg-main-200">
            <div onClick={()=>navigate(path.HOME)} className="w-full h-[70px] py-[15px] px-[25px] flex justify-center items-center cursor-pointer">
                <img src={logo} alt="logo" className="h-10 w-[120px]" />
            </div>
            <div className="flex flex-col">
                {sidebarMenu.map(function (item, index) {
                    return (
                        <NavLink
                            to={item.path}
                            key={index}
                            end={item.end}
                            className={({ isActive }) => isActive ? activeStyle : notActiveStyle}
                        >
                            {item.icons}
                            <span>{item.text}</span>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default SidebarLeft;
