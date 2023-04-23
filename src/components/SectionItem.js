import React, { memo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import icons from "../untils/icons";
<<<<<<< HEAD
=======
import ArtistsDescription from "./ArtistsDescription";
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e

const { AiOutlineHeart, FaPlay, HiDotsHorizontal } = icons;

const SectionItem = ({
  link,
  thumbnailM,
  title,
<<<<<<< HEAD
  artists,
  sortDescription,
  data,
  encodeId,
  sectionId,
=======
  artistDes,
  sortDescription,
  data,
  encodeId,
  isSingerName,
  linkArtist,
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e
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
<<<<<<< HEAD
      className="flex flex-col gap-3 flex-auto w-1/5 text-sm cursor-pointer "
      key={encodeId}
      onClick={() => {
        navigate(link?.split(".")[0], { state: { playAlbum: false } });
      }}
=======
      className="flex flex-col gap-3 w-1/5 text-sm  "
      key={encodeId}
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e
    >
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className="relative w-full overflow-hidden"
      >
        {isHover && (
<<<<<<< HEAD
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
=======
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-overlay-30 rounded-md z-10 text-white flex items-center justify-evenly cursor-pointer ">
            <span>
              <AiOutlineHeart size={20} />
            </span>
            <span
              onClick={(e) => {
                e.stopPropagation();
                navigate(link?.split(".")[0], { state: { playAlbum: true } });
              }}
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e
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
<<<<<<< HEAD
        />
      </div>
      <span className="flex flex-col">
        <span className="font-semibold ellipsis1">{title}</span>
        <span className="ellipsis">
           {sortDescription}
        </span>
=======
          onClick={() => {
            navigate(link?.split(".")[0], { state: { playAlbum: false } });
          }}
        />
      </div>
      <span className="flex flex-col">
        <span
          onClick={() => {
            navigate(link?.split(".")[0], { state: { playAlbum: false } });
          }}
          className="font-semibold ellipsis1 cursor-pointer"
        >
          {title}
        </span>
        {isSingerName && <ArtistsDescription artistDes={artistDes} linkArtist={linkArtist} />}
        {!isSingerName && (
          <span
            className="ellipsis cursor-pointer"
            onClick={() => {
              navigate(link?.split(".")[0], { state: { playAlbum: false } });
            }}
          >
            {sortDescription}
          </span>
        )}
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e
      </span>
    </div>
  );
};

export default memo(SectionItem);
