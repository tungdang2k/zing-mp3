import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { apiGetDetailPlayList } from "../apis";
import icons from "../untils/icons";
import { SongItem } from "./";
import { Scrollbars } from "react-custom-scrollbars";

const { ImBin } = icons;
const SidebarRight = () => {
<<<<<<< HEAD
    return (
        <div className='bg-[#d9d7d4]'>
            SidebarRightfdf
        </div>
    )
}
=======
  const [isRecent, setIsRecent] = useState(false);
  const [playlist, setPlaylist] = useState(null);
  const { currentSongData, curAlbumId,isPlaying,recentSongs,currentSongId } = useSelector((state) => state.music);
>>>>>>> 91464eb50fac1167e8cff16304bc0d04aff6fdf9

  useEffect(()=>{
    if(curAlbumId) fetchDetailtPlaylist();
  },[])
  
  useEffect(() => {
    if (curAlbumId && isPlaying) fetchDetailtPlaylist();
  }, [curAlbumId,isPlaying]);

  useEffect(()=>{
    isPlaying && setIsRecent(false)
  },[isPlaying,currentSongId])
  
  const fetchDetailtPlaylist = async () => {
    const response = await apiGetDetailPlayList(curAlbumId);
    if (response.data?.err === 0) {
      setPlaylist(response.data.data?.song?.items);
    }
  };
  return (
    <div className=" flex flex-col text-xs w-full h-full ">
      <div className="h-[70px flex-none py-[14px] px-2 gap-8 flex items-center justify-between">
        <div className="flex flex-auto gap-4 justify-center bg-main-200 rounded-l-full rounded-r-full p-[6px] cursor-pointer">
          <span
            onClick={() => setIsRecent((prev) => !prev)}
            className={`py-[5px]   flex-1 flex justify-center rounded-l-full rounded-r-full items-center ${
              !isRecent && "bg-red-500"
            }`}
          >
            Danh sách phát
          </span>
          <span
            onClick={() => setIsRecent((prev) => !prev)}
            className={`py-[5px] flex-1 flex justify-center rounded-l-full rounded-r-full items-center ${
              isRecent && "bg-red-500"
            }`}
          >
            Nghe gần đây
          </span>
        </div>
        <span className="p-1 rounded-full hover:bg-main-100 cursor-pointer ">
          <ImBin size={16} />
        </span>
      </div>

      {isRecent ? <div className="w-full flex flex-auto flex-col px-2 ">
      <Scrollbars autoHide style={{ width: "100%", height: "100%" }}>
        {recentSongs && recentSongs?.map(item => (
          <SongItem
          thumbnail={item?.thumbnail}
          title={item?.title}
          artists={item?.artists}
          sid={item?.sid}
          size='w-[40px] h-[40px]'
        />
        ))}
      </Scrollbars>
      </div> :
        <div className="w-full flex flex-auto flex-col px-2 ">
          <Scrollbars autoHide style={{ width: "100%", height: "100%" }}>
              <SongItem
                thumbnail={currentSongData?.thumbnail}
                title={currentSongData?.title}
                artists={currentSongData?.artistsNames}
                sid={currentSongData?.encodeId}
                size='w-[40px] h-[40px]'
                style="bg-main-500 text-white "
              />
              <div className="flex text-black flex-col pt-[15px] px-2 pb-[5px]">
                <span className=" text-sm font-bold">Tiếp theo</span>
                <span className="opacity-70 text-xs flex gap-1">
                  <span className="">Từ playlist</span>
                  <span className="font-semibold text-main-500 ellipsis1">
                    {currentSongData?.album?.title}
                  </span>
                </span>
              </div>

              {playlist && (
                <div className="flex flex-auto flex-col">
                  {playlist?.map((item) => (
                    <SongItem
                      key={item.encodeId}
                      thumbnail={item?.thumbnail}
                      title={item?.title}
                      artists={item?.artistsNames}
                      sid={item?.encodeId}
                      size='w-[40px] h-[40px]'
                    />
                  ))}
                </div>
              )}
          </Scrollbars>
        </div>
      }
      <div className="w-full h-[90px]"></div>
    </div>
  );
};

export default SidebarRight;
