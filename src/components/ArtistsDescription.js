import React from "react";
import { useNavigate } from "react-router-dom";

const ArtistsDescription = ({ artistDes }) => {
  const navigate = useNavigate()
  return (
    <div className="ellipsis2 ">
      {artistDes?.map((item, index) => (
        <span
          className="cursor-pointer hover:text-main-500 hover:underline "
          key={item.id}
        // onClick={()=>{
        //   navigate(item.link)
        // }}
        >{`${item.name}${index !== artistDes.length - 1 ? ", " : ""}`}</span>
      ))}
    </div>
  );
};

export default ArtistsDescription;
