import React, { memo } from "react";
import moment from "moment/moment";
import { useDispatch } from "react-redux";

import icons from "../untils/icons";
import * as actions from "../store/action";

const { CiMusicNote1 } = icons;

const ListSong = ({ songdata }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="flex justify-between items-center p-[10px] border-t border-[#0000000d] hover:bg-[#DDE4E4]"
      onClick={() => {
        dispatch(actions.setCurrentSongId(songdata?.encodeId));
        dispatch(actions.play(true));
      }}
    >
      <div className="flex items-center gap-3 flex-1 justify-start">
        <CiMusicNote1 size={16} />
        <img
          src={songdata?.thumbnailM}
          alt="thumbnail"
          className=" w-10 h-10 object-cover rounded-md "
        />
        <span className="flex flex-col">
          <span className="text-sm font-semibold">
            {songdata?.title?.length > 25
              ? `${songdata?.title.slice(0, 25)}...`
              : songdata?.title}
          </span>
          <span className="">
            {songdata?.artistsNames?.length > 25
              ? `${songdata?.artistsNames.slice(0, 25)}...`
              : songdata?.artistsNames}
          </span>
        </span>
      </div>
      <div className=" flex flex-1 items-center justify-start ">
        {songdata?.album?.title}
      </div>
      <div className=" flex flex-1 justify-end ">
        {moment.utc(songdata?.duration * 1000).format("mm:ss")}
      </div>
    </div>
  );
};

export default memo(ListSong);
