<<<<<<< HEAD
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const Section = ({ data }) => {
  const navigate = useNavigate();

=======
import React, { memo, } from "react";
import {SectionItem} from './'
const Section = ({ data }) => {
>>>>>>> parent of f98498b (search2)
  return (
    <div className="mt-12 px-[59px] flex flex-col gap-5 ">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold ">{data?.title}</h3>
        <span className="text-xs ">tat ca</span>
      </div>
      <div className=" flex items-start justify-between gap-[28px] ">
        {data &&
          data?.items?.length > 0 &&
          data?.items
            .filter((item, index) => index <= 4)
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
      </div>
    </div>
  );
};

export default memo(Section);
