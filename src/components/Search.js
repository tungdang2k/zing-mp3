import React, { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
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
            <span className="h-10 pl-4 bg-[#ceccc9] flex items-center justify-center rounded-l-[20px] text-gray-500">
                <FiSearch size={24} />
            </span>
            <input
                type="text"
                className="outline-none bg-[#ceccc9]  px-4 py-2 rounded-r-[20px] h-10 w-full text-gray-500"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyUp={handleSearch}
            />
        </div>
    );
};

export default Search;
