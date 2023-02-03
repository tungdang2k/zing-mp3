import React from 'react'
import icons from '../untils/icons'


const {FiSearch}  = icons
const Search = () => {
    return (
        <div className='w-full flex  items-center'>
            <span className='h-10 pl-4 bg-[#ceccc9] flex items-center justify-center rounded-l-[20px] text-gray-500'>
            <FiSearch size={24}/>
            </span>
            <input
                type="text"
                className='outline-none bg-[#ceccc9]  px-4 py-2 rounded-r-[20px] h-10 w-full text-gray-500'
                placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
            />
        </div>
    )
}

export default Search
