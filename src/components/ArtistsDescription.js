import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ArtistsDescription = ({ artistDes, linkArtist }) => {
  const navigate = useNavigate()
  return (
    <Link className="ellipsis2 "
      to={linkArtist}
    >
      {artistDes?.map((item, index) => (
        <span
          className="cursor-pointer hover:text-main-500 hover:underline "
          key={item.id}
        // onClick={()=>{
        //   navigate(item.link)
        // }}
        >{`${item.name}${index !== artistDes.length - 1 ? ", " : ""}`}</span>
      ))}
    </Link>
  );
};

export default ArtistsDescription;
