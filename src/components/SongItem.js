import React, { memo } from "react";
import moment from "moment";
import "moment/locale/vi";
import * as actions from "../store/action";
import { useDispatch } from "react-redux";

const SongItem = ({ thumbnail, title, artists, sid, releaseDate, percent, order,style,size }) => {
  const dispatch = useDispatch();
  return (
    <div
    onClick={()=>{
      dispatch(actions.setCurrentSongId(sid))
      dispatch(actions.play(true))
      dispatch(actions.setRecent({thumbnail, title, sid, artists}))
    }}
    className={`w-full flex p-[10px] items-center justify-between gap-[10px] rounded-md cursor-pointer ${style || 'text-black hover:bg-main-200'}`}>
     <div className="flex gap-4 ">
        {order&& <span className={`m-auto text-[32px]  text-[#681882] ${order === 1 ? 'text-shadow-no1': order === 2 ? 'text-shadow-no2' : 'text-shadow-no3'} `}>{order}</span>}
        <img
          src={thumbnail}
          alt={thumbnail}
          className={`object-cover rounded-md ${size || 'w-[60px] h-[60px]' }`}
        />
        <div className="flex flex-col ">
          <span className="text-sm font-semibold ellipsis1 ">{title}</span>
          <span className="text-xs opacity-70 ellipsis1">{artists}</span>
          {releaseDate && <span className="text-xs text-gray-700">
            {moment(releaseDate * 1000).fromNow()}
          </span>}
        </div>
     </div>
       { percent && <span className="font-bold">{`${percent}%`}</span>}
    </div>
  );
};

export default memo(SongItem);
