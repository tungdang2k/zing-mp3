import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment/moment";
import { Scrollbars } from "react-custom-scrollbars";
import { useDispatch, useSelector } from "react-redux";

import * as apis from "../../apis";
import { ListSongs, AudioLoading } from "../../components";
import * as actions from "../../store/action";
import icons from "../../untils/icons";

const { BsFillPlayFill } = icons;

const Album = () => {
  const { currentSongId, isPlaying, songs } = useSelector(
    (state) => state.music
  );
  const { title, pid } = useParams();
  const [playlistData, setPlaylistData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDetailPlayList = async () => {
      const response = await apis.apiGetDetailPlayList(pid);
      if (response?.data.err === 0) {
        setPlaylistData(response?.data?.data);
        dispatch(actions.setPlaylist(response?.data?.data?.song?.items));
      }
    };
    fetchDetailPlayList();
  }, [pid]);
  // console.log(playlistData);

  return (
    <div className="flex gap-8 w-full h-full px-[59px] ">
      <div className="flex-none w-1/4 border border-red-500 flex  flex-col items-center gap-2 ">
        <div className="w-full relative overflow-hidden">
          <img
            className={`w-full object-contain  shadow-md ${
              isPlaying
                ? "rounded-full animate-rotate-center"
                : "rounded-md  animate-rotate-center-pause"
            }`}
            src={playlistData?.thumbnailM}
            alt="thumbnailm"
          />
          <div className={`absolute top-0 left-0 right-0 bottom-0 text-white hover:bg-overlay-30 flex items-center justify-center ${isPlaying && 'rounded-full'} `}>
            <span className="p-3 border border-white rounded-full ">
              {isPlaying ? <AudioLoading /> : <BsFillPlayFill size={30} />}
            </span>
          </div>
        </div>
        <div className="gap-1 flex flex-col items-center ">
          <h3 className="text-[20px] font-bold text-gray-800 text-center">
            {playlistData?.title}
          </h3>
          <span className="flex gap-2 items-center text-gray-500 text-xs">
            <span className="">Cập nhật: </span>
            <span className="">
              {moment
                .unix(playlistData?.contentLastUpdate)
                .format("DD/MM/YYYY")}
            </span>
          </span>
          <span className="flex gap-2 items-center text-gray-500 text-xs">
            {playlistData?.artistsNames}
          </span>
          <span className="flex gap-2 items-center text-gray-500 text-xs">{`${Math.round(
            playlistData?.like / 1000
          )}k người yêu thích`}</span>
        </div>
      </div>
      <Scrollbars style={{ width: "100%", height: "80%" }}>
        <div className="flex-auto border border-blue-600">
          <span className="text-sm">
            <span className="text-gray-600">Lời tựa </span>
            <span className="">{playlistData?.sortDescription}</span>
          </span>
          <ListSongs
            // songs={playlistData?.song?.items}
            total={playlistData?.song?.total}
            totalduration={playlistData?.song?.totalDuration}
          />
        </div>
      </Scrollbars>
    </div>
  );
};

export default Album;
