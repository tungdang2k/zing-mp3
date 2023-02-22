import React, { memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Section = () => {
  const { friday } = useSelector((state) => state.app);

    const navigate = useNavigate()

  return (
    <div className="mt-12 px-[59px] flex flex-col gap-5 ">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold ">{friday?.title}</h3>
        <span className="text-xs ">tat ca</span>
      </div>
      <div className=" flex items-center justify-between gap-[28px] ">
        {friday &&
          friday?.items?.length > 0 &&
          friday.items.map((item) => (
            <div
              className="flex flex-col gap-3 flex-auto w-1/5 text-sm cursor-pointer"
              key={item.encodeId}
              onClick={(item)=>{
                navigate(item?.link?.split('.')[0])
              }}
            >
              <img
                src={item.thumbnailM}
                alt="thumbnail"
                className="w-full h-auto rounded-lg  "
              />
              <span className="flex flex-col">
                <span className="font-semibold ">{item.title}</span>
                <span className="ellipsis">
                  {item.sortDescription}
                </span>
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default memo(Section);
