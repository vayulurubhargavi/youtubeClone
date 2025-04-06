import React from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const handleToggleClick = () => {
    dispatch(toggleMenu());

  };
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg items-center ">
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
          />
          <button className="border border-gray-400 bg-gray-200 px-5 rounded-r-full ">
            <CiSearch size="1.5rem" />
          </button>
        </div>
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
