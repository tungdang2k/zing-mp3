import React from "react";
import { useSelector } from "react-redux";

import { handleNumber } from "../../untils/fn";
import { SongItem, ListSong, SectionItem, Artist } from "../../components";

const SearchAll = () => {
  const { searchData } = useSelector((state) => state.music);
  // console.log(searchData.playlists.map(item => item.artists.map(item => item.name)
  //   ));
  console.log(searchData);
  return (
    <div className="w-full flex flex-col px-[60px] gap-[60px]">
      <div className="flex flex-col">
        <h3 className="text-lg font-bold mb-5">Nổi bật</h3>
        <div className="flex gap-8 ">
          {searchData?.top && (
            <div className="p-[10px] flex-1 bg-main-200 flex gap-8 items-center cursor-pointer ">
              <img
                src={searchData?.top?.thumbnail}
                alt="thumbnail"
                className={`w-[84px] h-[84px] object-cover ${searchData?.top?.objectType === "artist" && "rounded-full"
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
                  size="w-[84px] h-[84px]"
                  style="bg-main-200"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h3 className="text-lg font-bold mb-5">Bài hát</h3>
        <div className="flex justify-between flex-wrap w-full">
          {searchData?.songs?.map((item, index) => (
            <div
              key={item.encodeId}
              className={`flex-auto w-[45%] ${index % 2 !== 0 ? "pl-4" : "pr-4"
                }`}
            >
              <ListSong key={item.encodeId} songdata={item} isHideAlbum />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h3 className="text-lg font-bold mb-5">Playlist/Album</h3>
        <div className="flex items-start justify-between gap-[20px]">
          {searchData?.playlists
            ?.filter((item, index) => index <= 4)
            ?.map((item) => (
              <SectionItem
                key={item.encodeId}
                link={item?.link}
                thumbnailM={item?.thumbnailM}
                title={item?.title}
                encodeId={item?.encodeId}
                artistDes={item?.artists}
                artists={item?.artistsNames}
                isSingerName
              />
            ))}
        </div>
      </div>

      <div className="flex flex-col w-full">
        <h3 className="text-lg font-bold mb-5">Nghệ sĩ</h3>
        <div className="flex  gap-[20px]">
          {searchData?.artists
            ?.filter((item, index) => index <= 4)
            ?.map((item) => (
              <Artist
                key={item.id}
                imgae={item?.thumbnailM}
                title={item?.name}
                follower={item?.totalFollow}
                link={item?.link}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchAll;
