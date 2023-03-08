import React from "react";
import { useSelector } from "react-redux";

import { handleNumber } from "../../untils/fn";
import { SongItem } from "../../components";

const SearchAll = () => {
  const { searchData } = useSelector((state) => state.music);
  console.log(searchData);
  return (
    <div className="w-full flex flex-col px-[60px]">
      <div className="flex flex-col">
        <h3 className="text-lg font-bold mb-5">Nổi bật</h3>
        <div className="flex gap-8 ">
          {searchData?.top && (
            <div className="p-[10px] flex-1 bg-main-200 flex gap-8 items-center ">
              <img
                src={searchData?.top?.thumbnail}
                alt="thumbnail"
                className={`w-[84px] h-[84px] object-cover ${
                  searchData?.top?.objectType === "artist" && "rounded-full"
                }`}
              />
              <div className="flex flex-col text-xs">
                <span>
                  {searchData?.top?.objectType === "artist" ? "Nghệ sĩ" : ""}
                </span>
                <span className="text-sm font-semibold">
                  {searchData?.top?.title || searchData?.top?.name}
                </span>
                {searchData?.top?.objectType === "artist" && (
                  <span>{`${handleNumber(
                    searchData?.artists[0].totalFollow
                  )} quan tâm`}</span>
                )}
              </div>
            </div>
          )}
          {searchData?.songs
            ?.filter((item, index) =>
              [...Array(2).keys()].some((i) => i === index)
            )
            ?.map((item) => (
              <div key={item.encodeId} className="flex-1">
                <SongItem
                  key={item.encodeId}
                  thumbnail={item?.thumbnail}
                  sid={item.encodeId}
                  title={item.title}
                  artists={item.artistsNames}
                  size='w-[84px] h-[84px]'
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchAll;
