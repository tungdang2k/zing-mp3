<<<<<<< HEAD
import React from 'react'
import icons from '../untils/icons'


const {FiSearch}  = icons
const Search = () => {
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
    return (
        <div className='w-full flex  items-center'>
            <span className='h-10 pl-4 bg-[#ceccc9] flex items-center justify-center rounded-l-[20px] text-gray-500'>
            <FiSearch size={24}/>
            </span>
            <input
                type="text"
                className='outline-none bg-[#ceccc9]  px-4 py-2 rounded-r-[20px] h-10 w-full text-gray-500'
                placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
<<<<<<< HEAD
=======
                value={keyword}
                onChange={(e)=> setKeyword(e.target.value)}
                onKeyUp={handleSearch}
>>>>>>> parent of f98498b (search2)
            />
        </div>
    )
}

export default Search
