import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheSearchResults } from "../utils/searchSlice";
const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const handleToggleClick = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    // make an api after keypress call --but if the diffrence between two api calls is less than 200ms then limit the api call
    // getsearchSuggestions();
    const timer = setTimeout(() => {
      
      // if (searchCache[searchQuery]) {
      //   setSuggestions(searchCache[searchQuery]);
      // } else {
        getsearchSuggestions();
      // }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getsearchSuggestions = async () => {
    if (searchQuery.length > 0) {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      console.log(json);
      setSuggestions(json[1]);
      // UPDATE THE CACHE
      dispatch(cacheSearchResults({
        [searchQuery]: json[1],
      }));
    }
  };

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg items-center w-full">
      <div className="flex col-span-1">
        <img
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="menu"
          className="h-14 cursor-pointer"
          onClick={() => handleToggleClick()}
        />

        <a href="/">
          <img
            alt="youtube-logo"
            src="https://tse1.mm.bing.net/th?id=OIP.EZEvFXTQX2BQ1xZivCYHeQHaEH&pid=Api&P=0&h=180&w=180"
            className="h-14 mx-2"
          />
        </a>
      </div>

      <div className="col-span-10">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full  font-normal"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 bg-gray-200 px-5 rounded-r-full ">
            <CiSearch size="1.5rem" />
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white px-5 py-2 shadow-lg rounded-lg w-[30rem] border border-gray-200">
            <ul>
              {suggestions?.map((suggestion) => (
                <li className="px-3 py-2 shadow-sm hover:bg-gray-200">
                  🔍{suggestion}
                </li>
              ))}
              {/* <li className="px-3 py-2 shadow-sm hover:bg-gray-200">
                🔍 iphone
              </li>
              <li className="px-3 py-2 shadow-sm hover:bg-gray-200">
                🔍 iphone 13
              </li>
              <li className="px-3 py-2 shadow-sm hover:bg-gray-200">
                🔍 iphone 14 pro
              </li>
              <li className="px-3 py-2 shadow-sm hover:bg-gray-200">
                🔍 iphone 16 pro max
              </li>
              <li className="px-3 py-2 shadow-sm hover:bg-gray-200">
                🔍 iphone 15 plus
              </li>
              <li className="px-3 py-2 shadow-sm hover:bg-gray-200">
                🔍 iphone 16
              </li> */}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 flex">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.Crq9sn3Qu3HyHwPJi2zW8QHaHa&pid=Api&P=0&h=180"
          alt="user"
          className="h-14"
        />
      </div>
    </div>
  );
};

export default Head;
