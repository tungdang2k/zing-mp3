import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import icons from '../../untils/icons'
import { apiGetArtist } from '../../apis'
import { SongItem, Section, Artist } from '../../components'
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
            <div className="mt-[30px] px-[60px] w-full flex ">
                {artistData?.topAlbum && <div className="w-[40%] flex-auto  ">
                    <h3 className='mb-5 font-bold text-[20px]'>Mới nhât</h3>
                    <div className="pr-11 p-4 gap-4 bg-gray-300 rounded-md flex">
                        <img src={artistData?.topAlbum?.thumbnail} alt="album" className='w-[151px] h-[151px] object-cover rounded-md ' />
                        <div className="flex flex-col gap-[12px] opacity-80 text-black ">
                            <span>{artistData?.topAlbum?.textType}</span>
                            <div className="flex flex-col">
                                <span className='text-sm font-bold opacity-100'>{artistData?.topAlbum?.title}</span>
                                <span className=''>{artistData?.topAlbum?.artistsNames}</span>
                            </div>
                            <span className=''>{artistData?.topAlbum?.releaseDate}</span>
                        </div>
                    </div>
                </div>}
                <div className="w-[60%] flex-auto ">
                    <h3 className='mb-5 font-bold text-[20px]'>Bài hát nổi bật</h3>
                    <div className="flex flex-wrap w-full justify-start  ">
                        {artistData?.sections?.find(item => item?.sectionType === 'song')?.items?.filter((item, index) => index < 6)?.map((item) => (
                            <div key={item.encodeId} className="w-[90%] min-[1024px]:w-[45%] ml-4 border-b border-gray-400">
                                <SongItem
                                    thumbnail={item.thumbnail}
                                    title={item.title}
                                    artists={item.artistsNames}
                                    sid={item.encodeId}
                                    size='w-[40px] h-[40px]'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {artistData?.sections?.filter(item => item.sectionType === 'playlist')?.map((item, index) => (
                <Section data={item} key={index} />
            ))}

            <div className="flex flex-col w-full px-[52px] mt-12">
                <h3 className="text-lg font-bold mb-5">{artistData?.sections?.find((item) => item.sectionType === "artist")?.title}</h3>
                <div className="flex  gap-[20px]">
                    {artistData?.sections
                        ?.find((item) => item.sectionType === "artist").items
                        ?.map((item) => (
                            <Artist
                                key={item.id}
                                image={item?.thumbnailM}
                                title={item?.name}
                                follower={item?.totalFollow}
                                link={item?.link}
                            />
                        ))}
                </div>
            </div>

            <div className="px-[52px] mt-12">

                <h3 className='text-lg font-bold mb-5'> {`Về ${artistData?.name}`}</h3>
                <div className="flex gap-8  ">
                    <img src={artistData?.thumbnailM} alt="artits" className='w-[45%] flex-none h-[275px] object-cover rounded-md' />
                    <div className="flex flex-col gap-8 text-sm">
                        <p dangerouslySetInnerHTML={{ __html: artistData?.biography }}></p>
                        <div className="flex flex-col">
                            <span className='text-[20px] font-bold'>{Number(artistData?.totalFollow.toFixed(1)).toLocaleString()}</span>
                            <span>Người quan tâm</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[500px]"></div>
        </div>
    )
}

export default Singer
