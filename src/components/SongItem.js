import React, { memo } from "react";
import moment from "moment";
import "moment/locale/vi";
import * as actions from "../store/action";
import { useDispatch } from "react-redux";

const SongItem = ({ thumnail, title, artists, sid, releaseDate }) => {
  const dispatch = useDispatch();
  return (
    <div
    onClick={()=>{
      dispatch(actions.setCurrentSongId(sid))
      dispatch(actions.play(true))
    }}
    className="w-[45%] min-[1024px]:w-[30%] flex flex-auto  p-[10px] items-start gap-[10px] hover:bg-main-200 rounded-md cursor-pointer">
      <img
        src={thumnail}
        alt={thumnail}
        className="w-[60px] h-[60px] object-cover rounded-md "
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold ellipsis1 ">{title}</span>
        <span className="text-xs text-gray-700 ellipsis1">{artists}</span>
        <span className="text-xs text-gray-700">
          {moment(releaseDate * 1000).fromNow()}
        </span>
      </div>
    </div>
  );
};

export default memo(SongItem);
