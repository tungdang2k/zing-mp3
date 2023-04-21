import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import icons from '../../untils/icons'
import { apiGetArtist } from '../../apis'
const Singer = () => {

    const { AiOutlineUserAdd, BsFillPlayFill, } = icons
    const { singer } = useParams()
    const [artistData, setArtistData] = useState(null)
    useEffect(() => {
        const fetchArtistData = async () => {
            const res = await apiGetArtist(singer)
            if (res.data.err === 0) {
                setArtistData(res.data.data)
            }
        }
        singer && fetchArtistData()
    }, [singer])
    console.log(artistData);
    return (
        <div className='flex flex-col w-full '>
            <div className="relative">
                <img src={artistData?.cover} alt="artis" className='h-[400px] w-full object-cover' />
                <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent px-[60px] text-white">
                    <div className="absolute px-[60px] bottom-0  pb-6">
                        <div className='flex gap-8 items-center'>
                            <h1 className='text-[60px] font-bold'>{artistData?.name}</h1>
                            <span className='p-2 relative rounded-full text-[#9b4de0] bg-white hover:bg-[#9b4de0] hover:text-white cursor-pointer'

                            >
                                <span className="absolute animate-scale-up-center top-0 bottom-0 left-0 right-0 rounded-full  bg-[#9b4de0]} "></span>
                                <BsFillPlayFill size={36} />
                            </span>
                        </div>
                        <div className="flex items-center gap-4 mt-8 ">
                            <span className='text-sm text-gray-300'>{`${Number(artistData?.follow.toFixed(1)).toLocaleString()} người quan tâm`}</span>
                            <button
                                type="button"
                                className="bg-main-500 px-4 py-1 text-white text-sm rounded-l-full rounded-r-full flex items-center justify-center gap-1"
                            >
                                <AiOutlineUserAdd />
                                <span className="text-xs opacity-70">QUAN TÂM</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Singer
