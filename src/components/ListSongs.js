import React, { memo } from "react";

import ListSong from "./ListSong";
import icons from "../untils/icons"; 
import moment from "moment";
const {BsDot} = icons

const ListSongs = ({ songs, total, totalduration }) => {
  return (
    <div>
      <div className="w-full flex flex-col text-xs text-gray-600">
        <div className="flex justify-between items-center p-[10px] font-semibold ">
          <span>BÀI HÁT</span>
          <span>ALBUM</span>
          <span>THỜI GIAN</span>
        </div>
        <div className="flex flex-col">
          {songs?.map((item) => (
            <ListSong songdata={item} key={item?.encodeId} />
          ))}
        </div>
      </div>
      <span className="flex items-center gap-1 py-[10px] border-t border-[#0000000d]">
       <span>{`${total} bài hát`} </span>
       <BsDot size={24}/>
       <span>
       {moment.utc(totalduration * 1000).format('HH [giờ] mm [phút]')}
        </span>
      </span>
    </div>
  );
};

export default memo(ListSongs);
