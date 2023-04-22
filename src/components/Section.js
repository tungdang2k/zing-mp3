import React, { memo, } from "react";
import { SectionItem } from './'
const Section = ({ data, isSingerName }) => {


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
      </div>
    </div>
  );
};

export default memo(Section);
