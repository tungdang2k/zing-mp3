import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.svg";
import { sidebarMenu } from "../untils/menu";

const notActiveStyle =
    "py-2 px-[25px] font-bold text-[#32323d] text-[13px] flex gap-[12px] items-center";
const activeStyle =
    "py-2 px-[25px] font-bold text-[#0f7070] text-[13px] flex gap-[12px] items-center";
// ({ isActvive }) =>
//
const SidebarLeft = () => {
    return (
        <div className="flex flex-col bg-[#d9d7d4]">
            <div className="w-full h-[70px] py-[15px] px-[25px] flex justify-center items-center">
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
