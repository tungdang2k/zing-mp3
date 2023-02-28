import React, { memo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import icons from "../untils/icons";

const { AiOutlineHeart, FaPlay, HiDotsHorizontal } = icons;

const SectionItem = ({
  link,
  thumbnailM,
  title,
  artists,
  sortDescription,
  data,
  encodeId,
  sectionId,
}) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  const imageRef = useRef();

  const handleHover = () => {
    setIsHover(true);
    imageRef.current.classList?.remove("animate-scale-down-image");
    imageRef.current.classList?.add("animate-scale-up-image");
  };

  const handleLeave = () => {
    setIsHover(false);
    imageRef.current.classList?.add("animate-scale-down-image");
    imageRef.current.classList?.remove("animate-scale-up-image");
  };
  return (
    <div
      className="flex flex-col gap-3 flex-auto w-1/5 text-sm cursor-pointer "
      key={encodeId}
      onClick={() => {
        navigate(link?.split(".")[0], { state: { playAlbum: false } });
      }}
    >
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className="relative w-full overflow-hidden"
      >
        {isHover && (
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-overlay-30 rounded-md z-10 text-white flex items-center justify-evenly  ">
            <span className="">
              <AiOutlineHeart size={20} />
            </span>
            <span
              onClick={(e) =>{
                    e.stopPropagation()
                  navigate(link?.split(".")[0], { state: { playAlbum: true } })
              }
              }
              className="p-2 border border-white rounded-full "
            >
              <FaPlay size={25} />
            </span>
            <span className="">
              <HiDotsHorizontal size={20} />
            </span>
          </div>
        )}
        <img
          ref={imageRef}
          src={thumbnailM}
          alt="thumbnail"
          className="w-full h-auto rounded-lg  "
        />
      </div>
      <span className="flex flex-col">
        <span className="font-semibold ">{title}</span>
        <span className="ellipsis">
          {sectionId === "h100" ? (
            <div className="">
              {artists?.map((artists) => (
                <span key={artists.id}>{`${artists.name}, `}</span>
              ))}
            </div>
          ) : (
            sortDescription
          )}
        </span>
      </span>
    </div>
  );
};

export default memo(SectionItem);
