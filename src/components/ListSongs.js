import React, { memo } from "react";
import moment from "moment";
import { useSelector } from "react-redux";


import ListSong from "./ListSong";
import icons from "../untils/icons";

const { BsDot } = icons

const ListSongs = ({ total, totalduration, isHideTime }) => {

  const { songs } = useSelector(state => state.music)
  return (
    <div>
      <div className="w-full flex flex-col text-xs text-gray-600">
        <div className="flex justify-between items-center p-[10px] font-semibold ">
          <span className={isHideTime ? 'font-bold text-lg' : ''}>BÀI HÁT</span>
          {!isHideTime && <> <span>ALBUM</span>
            <span>THỜI GIAN</span> </>}
        </div>
        <div className="flex flex-col">
          {songs?.map((item) => (
            <ListSong songdata={item} isHideNode key={item?.encodeId} />
          ))}
        </div>
      </div>
      {totalduration && <span className="flex items-center gap-1 py-[10px] border-t border-[#0000000d]">
        <span>{`${total} bài hát`} </span>
        <BsDot size={24} />
        <span>
          {moment.utc(totalduration * 1000).format('HH [giờ] mm [phút]')}
        </span>
      </span>}
    </div>
  );
};

export default memo(ListSongs);
