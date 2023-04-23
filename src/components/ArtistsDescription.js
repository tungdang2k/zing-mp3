<<<<<<< HEAD
import React from 'react'

const ArtistsDescription = ({artistDes}) => {
  return (
    <div>
        artistDes
    </div>
  )
}

export default ArtistsDescription
=======
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
>>>>>>> 02c123b5bed0469c580f5191e324cb35f117f02e
