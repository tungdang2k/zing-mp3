import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import * as apis from "../apis";
import icons from "../untils/icons";
import * as actions from "../store/action";

const {
  AiOutlineHeart,
  HiDotsHorizontal,
  BiShuffle,
  BiSkipNext,
  BiSkipPrevious,
  FiRepeat,
  FaPlay,
  AiOutlinePause,
} = icons;

var intervalId;
const Player = () => {
  const { currentSongId, isPlaying } = useSelector((state) => state.music);
  const [songInfo, setSongInfo] = useState(null);
  const [curSeconds, setCurSeconds] = useState(0);
  const [audio, setAudio] = useState(new Audio());
  const dispatch = useDispatch();
  const thumbRef = useRef();
  const trackRef = useRef();

  useEffect(() => {
    const fetchDetailtSong = async () => {
      const [res1, res2] = await Promise.all([
        apis.apiGetDetailSong(currentSongId),
        apis.apiGetSong(currentSongId),
      ]);

      if (res1.data.err === 0) {
        setSongInfo(res1?.data?.data);
      }
      if (res2.data.err === 0) {
        audio.pause();
        setAudio(new Audio(res2?.data?.data["128"]));
      } else {
        setAudio(new Audio());
        dispatch(actions.play(false));
        setCurSeconds(0);
        thumbRef.current.style.cssText = `right:100%`;

        // alert('Bài hát chỉ dành cho vip')
      }
    };
    fetchDetailtSong();
  }, [currentSongId]);

  useEffect(() => {
    intervalId && clearInterval(intervalId);
    audio.load();
    if (isPlaying) {
      audio.play();
      intervalId = setInterval(() => {
        let percent = Math.round(
          (audio.currentTime * 10000) / songInfo?.duration /100
        );
        thumbRef.current.style.cssText = `right:${100 - percent}%`;
        setCurSeconds(Math.round(audio.currentTime));
      }, 200);
    }
  }, [audio]);

  const handleTogglePlayMusic = () => {
    if (isPlaying) {
      audio.pause();
      dispatch(actions.play(false));
    } else {
      audio.play();
      dispatch(actions.play(true));
    }
  };

  const handleClickProgressbar = (e) => {
    const trackRect = trackRef.current.getBoundingClientRect()
    const percent = Math.round((e.clientX -  trackRect.left ) * 10000 / trackRect.width) / 100
    thumbRef.current.style.cssText = `right:${100 - percent }%`
    audio.currentTime = percent * songInfo.duration /100 
    setCurSeconds(Math.round(percent * songInfo.duration / 100))

  };
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
          <span
            onClick={handleTogglePlayMusic}
            className="p-2 border border-gray-700 cursor-pointer rounded-full hover:text-main-500 "
          >
            {isPlaying ? <AiOutlinePause size={18} /> : <FaPlay size={18} />}
          </span>
          <span className="cursor-pointer">
            <BiSkipNext size={32} />
          </span>
          <span className="cursor-pointer" title="Bật phát lại tất cả">
            <FiRepeat size={20} />
          </span>
        </div>
        <div className="w-full flex justify-center gap-2 items-center text-xs ">
          <span className="">
            {moment.utc(curSeconds * 1000).format("mm:ss")}
          </span>
          <div
            onClick={handleClickProgressbar}
            ref={trackRef}
            className="w-3/5 relative h-[3px] hover:h-[8px] bg-[rgba(0,0,0,0.1)] rounded-l-full rounded-r-full cursor-pointer "
          >
            <div
              ref={thumbRef}
              className="absolute top-0 left-0 bottom-0 h-full bg-[#0e8080] rounded-l-full rounded-r-full "
            ></div>
          </div>
          <span className="">
            {moment.utc(songInfo?.duration * 1000).format("mm:ss")}
          </span>
        </div>
      </div>
      <div className="w-[30%] flex-auto border border-red-500 "> volume</div>
    </div>
  );
};

export default Player;
