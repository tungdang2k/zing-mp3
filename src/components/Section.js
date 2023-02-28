import React, { memo, } from "react";
import {SectionItem} from './'
const Section = ({ data }) => {
  return (
    <div className="mt-12 px-[59px] flex flex-col gap-5 ">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold ">{data?.title}</h3>
        {data?.items?.length >= 6 && <span className="text-xs ">TẤT CẢ </span>}
      </div>
      <div className=" flex items-start justify-between gap-[28px] ">
        {data &&
          data?.items?.length > 0 &&
          data?.items
            .filter((item, index) => index <= 4)
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
                />
            
            ))}
      </div>
    </div>
  );
};

export default memo(Section);
