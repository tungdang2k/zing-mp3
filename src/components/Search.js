<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import icons from '../untils/icons'
=======
import React, { useEffect, useState } from "react";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e

import icons from "../untils/icons";
import { apiSearch } from "../apis";
import * as actions from "../store/action";
import path from "../untils/path";

const { FiSearch, AiFillCloseCircle, AiOutlineCloseCircle } = icons;
const Search = () => {
<<<<<<< HEAD
=======
import React, { useEffect, useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import icons from '../untils/icons'
import { apiSearch } from '../apis'
import * as actions from '../store/action'
import path from '../untils/path'

const {FiSearch}  = icons
const Search = () => {
    
    const [keyword, setKeyword] = useState('') 
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSearch = async(e) => {
        if(e.keyCode === 13){
            dispatch(actions.search(keyword))
            navigate({
                pathname:`${path.SEARCH}/${path.ALL}`,
                search:createSearchParams({
                    q:keyword
                }).toString()
            })
        }
    }

>>>>>>> parent of f98498b (search2)
=======
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { singer } = useParams()
    const handleSearch = async (e) => {
        if (e.keyCode === 13) {
            dispatch(actions.search(keyword));
            navigate({
                pathname: `${path.SEARCH}/${path.ALL}`,
                search: createSearchParams({
                    q: keyword,
                }).toString(),
            });
        }
    };

>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e
    return (
        <div className="w-full flex relative items-center">
            {keyword && (
                <span
                    className="absolute right-[16px] cursor-pointer"
                    onClick={() => setKeyword("")}
                >
                    <AiOutlineCloseCircle />
                </span>
            )}
            <span className={`h-10 pl-4  flex items-center justify-center rounded-l-[20px] text-gray-500 ${singer ? 'bg-[rgba(0,0,0,0.2)] text-gray-200' : 'bg-[#DDE4E4]'}`}>
                <FiSearch size={24} />
            </span>
            <input
                type="text"
<<<<<<< HEAD
                className='outline-none bg-[#ceccc9]  px-4 py-2 rounded-r-[20px] h-10 w-full text-gray-500'
                placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
<<<<<<< HEAD
=======
                value={keyword}
                onChange={(e)=> setKeyword(e.target.value)}
                onKeyUp={handleSearch}
>>>>>>> parent of f98498b (search2)
=======
                className={`outline-none px-4 py-2 rounded-r-[20px] h-10 w-full text-gray-500 ${singer ? 'bg-[rgba(0,0,0,0.2)] placeholder:text-gray-200' : 'bg-[#DDE4E4]'}`}
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyUp={handleSearch}
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e
            />
        </div>
    );
};

export default Search;
