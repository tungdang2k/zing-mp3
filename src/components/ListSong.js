import React, { memo } from "react";
import moment from "moment/moment";
import { useDispatch } from "react-redux";

import icons from "../untils/icons";
import * as actions from "../store/action";

const { CiMusicNote1 } = icons;

const ListSong = ({ songdata,isHideAlbum }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="flex justify-between items-center p-[10px] border-t border-[#0000000d] hover:bg-[#DDE4E4]"
      onClick={() => {
        dispatch(actions.setCurrentSongId(songdata?.encodeId));
        dispatch(actions.play(true));
        dispatch(actions.playAlbum(true))
        dispatch(actions.setRecent({thumbnail:songdata?.thumbnailM, title:songdata?.title, sid:songdata?.encodeId, artists:songdata?.artistsNames}))

      }}
    >
      <div className="flex items-center gap-3 flex-1 justify-start">
        { !isHideAlbum &&<CiMusicNote1 size={16} />}
        <img
          src={songdata?.thumbnailM}
          alt="thumbnail"
          className=" w-10 h-10 object-cover rounded-md "
        />
        <span className="flex flex-col">
          <span className="text-sm font-semibold ellipsis1">
              {songdata?.title}
          </span>
          <span className="ellipsis text-xs opacity-70">
              {songdata?.artistsNames}
          </span>
        </span>
      </div>
      { !isHideAlbum && <div className=" flex flex-1 items-center justify-start ellipsis1">
        {songdata?.album?.title}
      </div>}
      <div className=" flex flex-1 justify-end text-xs ">
        {moment.utc(songdata?.duration * 1000).format("mm:ss")}
      </div>
    </div>
  );
};

export default memo(ListSong);
