import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import * as apis from "../apis";
import icons from "../untils/icons";

const {
  AiOutlineHeart,
  HiDotsHorizontal,
  BiShuffle,
  BiSkipNext,
  BiSkipPrevious,
  FiRepeat,
  FaPlay,
  AiOutlinePause
} = icons;

const Player = () => {
  const audioEl = new Audio("https://mp3-s1-zmp3.zmdcdn.me/100b137bac3b45651c2a/4275091211825479581?authen=exp=1676602052~acl=/100b137bac3b45651c2a/*~hmac=da6030367832a95bdbf3967dcf164dec&fs=MTY3NjQyOTI1MjMzOHx3ZWJWNnwwfDExMy4yMy4zNy4zMw"
  )
  const { currentSongId, isPlaying } = useSelector((state) => state.music);
  const [songInfo, setSongInfo] = useState(null);
  const [source, setSource] = useState(null)
  // const [isPlaying, setIsPlaying] = useState(false)

  console.log(isPlaying);
  console.log(audioEl);

  useEffect(() => {
    const fetchDetailtSong = async () => {
      const [res1, res2] = await Promise.all([
        apis.getDetailtSong(currentSongId),
        apis.getSong(currentSongId)
      ])

      if (res1.data.err === 0) {
        setSongInfo(res1.data.data);
      }
      if(res2){
        setSource(res2.data.data['128'])
      }


    };
    fetchDetailtSong();
  }, [currentSongId]);

  const handleTogglePlayMusic =  ()=>{
    // setIsPlaying(prev => !prev)
  }
useEffect(()=>{
  audioEl.play()

},[currentSongId])

  return (
    <div className="bg-main-400 px-5 h-full  flex">
      <div className="w-[30%] flex-auto  gap-3 flex items-center ">
        <img
          src={songInfo?.thumbnail}
          alt="thumbnail"
          className="w-16 h-16 object-cover rounded-md "
        />
        <div className="flex flex-col">
          <span className="font-semibold text-gray-700 text-sm ">
            {songInfo?.title}
          </span>
          <span className="text-xs text-gray-500">
            {songInfo?.artistsNames}
          </span>
        </div>
        <div className="flex gap-4 pl-2">
          <span>
            <AiOutlineHeart size={16} />
          </span>
          <span>
            <HiDotsHorizontal size={16} />
          </span>
        </div>
      </div>

      <div className="w-[40%] flex-auto flex flex-col items-center justify-center gap-2 border border-red-500 py-2 ">
        <div className="flex gap-8  justify-center items-center ">
          <span className="cursor-pointer" title="Bật phát ngẫu nhiên">
            <BiShuffle size={20} />
          </span>
          <span className="cursor-pointer">
            <BiSkipPrevious size={32} />
          </span>
          <span onClick={handleTogglePlayMusic} className="p-2 border border-gray-700 cursor-pointer rounded-full hover:text-main-500 ">
            {isPlaying ?   <AiOutlinePause size={18}/>  : <FaPlay size={18} />}
            
          </span>
          <span className="cursor-pointer">
            <BiSkipNext size={32} />
          </span>
          <span className="cursor-pointer" title="Bật phát lại tất cả">
            <FiRepeat size={20} />
          </span>
        </div>
        <div className="">progress bar </div>
      </div>
      <div className="w-[30%] flex-auto border border-red-500 "> volume</div>
    </div>
  );
};

export default Player;
