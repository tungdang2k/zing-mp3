import React, { useEffect, useState } from "react";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import icons from "../untils/icons";
import { apiSearch } from "../apis";
import * as actions from "../store/action";
import path from "../untils/path";

const { FiSearch, AiFillCloseCircle, AiOutlineCloseCircle } = icons;
const Search = () => {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { singer } = useParams()
    const handleSearch = async (e) => {
        if (e.keyCode === 13) {
            dispatch(actions.search(keyword));
            navigate({
                pathname: `${path.SEARCH}/${path.ALL}`,
                search: createSearchParams({
                    q: keyword,
                }).toString(),
            });
        }
    };

    return (
        <div className="w-full flex relative items-center">
            {keyword && (
                <span
                    className="absolute right-[16px] cursor-pointer"
                    onClick={() => setKeyword("")}
                >
                    <AiOutlineCloseCircle />
                </span>
            )}
            <span className={`h-10 pl-4  flex items-center justify-center rounded-l-[20px] text-gray-500 ${singer ? 'bg-[rgba(0,0,0,0.2)] text-gray-200' : 'bg-[#DDE4E4]'}`}>
                <FiSearch size={24} />
            </span>
            <input
                type="text"
                className={`outline-none px-4 py-2 rounded-r-[20px] h-10 w-full text-gray-500 ${singer ? 'bg-[rgba(0,0,0,0.2)] placeholder:text-gray-200' : 'bg-[#DDE4E4]'}`}
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyUp={handleSearch}
            />
        </div>
    );
};

export default Search;
