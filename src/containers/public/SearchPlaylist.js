import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { apiGetArtist } from '../../apis'
import { Section, SectionItem } from '../../components'

const SearchPlaylist = () => {

    const { searchData } = useSelector(state => state.music)
    const [playlists, setPlaylists] = useState([])
    useEffect(() => {
        const fetch = async () => {
            const res = await apiGetArtist(searchData?.top?.alias)
            if (res.data.err === 0) {
                setPlaylists(res.data.data.sections[1])
            }
            console.log(res);
        }

        fetch()
    }, [searchData])

    return (
        <div className='w-full flex-col flex gap-8 px-[60px]'>

            <h3>PLAYLIST/ALBUM</h3>
            <div className=" flex items-start flex-wrap justify-between gap-[28px] ">
                {playlists &&
                    playlists?.items?.length > 0 &&
                    playlists?.items
                        ?.map((item, index) => (
                            <SectionItem
                                link={item?.link}
                                thumbnailM={item?.thumbnailM}
                                title={item.title}
                                artists={item?.artists}
                                key={item.encodeId}
                                artistDes={item?.artists}
                                sortDescription={item?.sortDescription}
                            />
                        ))}
            </div>

        </div>
    )
}

export default SearchPlaylist
