<<<<<<< HEAD
<<<<<<< HEAD
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
=======
import React, { memo, } from "react";
import { SectionItem } from './'
const Section = ({ data, isSingerName }) => {
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e


=======
import React, { memo, } from "react";
import {SectionItem} from './'
const Section = ({ data }) => {
>>>>>>> parent of f98498b (search2)
  return (
    <div className="mt-12 px-[44px] flex flex-col gap-1 ">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold ">{data?.title}</h3>
        {data?.items?.length >= 6 && <span className="text-xs ">TẤT CẢ </span>}
      </div>
      <div className=" flex  gap-[28px] ">
        {data &&
          data?.items?.length > 0 &&
          data?.items
            .filter((item, index) => index <= 4)
<<<<<<< HEAD
<<<<<<< HEAD
            ?.map((item) => (
              <div
                className="flex flex-col gap-3 flex-auto w-1/5 text-sm cursor-pointer"
                key={item.encodeId}
                onClick={(item) => {
                  navigate(item?.link?.split(".")[0]);
                }}
              >
                <img
                  src={item.thumbnailM}
                  alt="thumbnail"
                  className="w-full h-auto rounded-lg  "
=======
            ?.map((item,index) => (
                <SectionItem 
                  link={item?.link}
                  thumbnailM={item?.thumbnailM}
                  title= {item.title}
                  artists={item?.artists}
                  sortDescription={item?.sortDescription}
                  data={data}
                  encodeId={item?.encodeId}
                  key={item.encodeId}
>>>>>>> parent of f98498b (search2)
                />
                <span className="flex flex-col">
                  <span className="font-semibold ">{item.title}</span>
                  <span className="ellipsis">
                    {data?.sectionId === "h100" ? (
                      <div className="">
                        {item?.artists?.map((artists) => (
                          <span key={artists.id}>{`${artists.name}, `}</span>
                        ))}
                      </div>
                    ) : (
                      item.sortDescription
                    )}
                  </span>
                </span>
              </div>
            ))}
=======
            ?.map((item, index) => {

              // console.log(item?.artists?.map(item => item.link));
              return <SectionItem
                link={item?.link}
                thumbnailM={item?.thumbnailM}
                title={item.title}
                artists={item?.artists}
                data={data}
                encodeId={item?.encodeId}
                key={item.encodeId}
                artistDes={item?.artists}
                sortDescription={item?.sortDescription}
                isSingerName={isSingerName}
                linkArtist={item?.artists[1]?.link}
              />


            })}
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e
      </div>
    </div>
  );
};

export default memo(Section);
