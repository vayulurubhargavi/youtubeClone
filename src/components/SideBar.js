import React from "react";
import { IoHome } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { PiPlaylistFill } from "react-icons/pi";
import { BiSolidVideos } from "react-icons/bi";
import { MdWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { IoMdTrendingUp } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null; // Return null if the menu is not open
  return (
    <div className="p-5 w-48 shadow-lg">
      <ul className="flex flex-col gap-3  ">
        <li className="flex text-md ">
          <span className="pr-1">
            <IoHome size="1.5rem" />
          </span>
          <Link to={"/"}>Home</Link>
        </li>
        <li className="flex text-md ">
          <span className="pr-1">
            <SiYoutubeshorts size="1.5rem" />
          </span>
          Shorts
        </li>
        <li className="flex text-md ">
          <span className="pr-1">
            <MdSubscriptions size="1.5rem" />
          </span>
          Subscriptions
        </li>
        <hr className=" bg-gray-700" />
        {/* <Link><h2>You</h2></Link> */}

        <li className="flex text-md ">
          <span className="pr-1">
            <PiPlaylistFill size="1.5rem" />
          </span>
          PlayList
        </li>
        <li className="flex text-md ">
          <span className="pr-1">
            <BiSolidVideos size="1.5rem" />
          </span>
          Your Videos
        </li>
        <li className="flex text-md ">
          <span className="pr-1">
            <MdWatchLater size="1.5rem" />
          </span>
          Watch Later
        </li>
        <li className="flex text-md ">
          <span className="pr-1">
            <AiFillLike size="1.5rem" />
          </span>
          Liked Videos
        </li>
      </ul>
      <hr className=" bg-gray-700 mt-2" />
      <h2 className=" font-bold mt-4">Subscriptions</h2>
      <ul className="flex flex-col gap-3  text-gray-500 mt-2">
        <li className="text-md">Channel 1</li>
        <li className="text-md">Channel 2</li>
        <li className="text-md">Channel 3</li>
      </ul>
      <hr className=" bg-gray-700 mt-2" />
      <h2 className=" font-bold mt-4">Explore</h2>
      <ul className="flex flex-col gap-3  mt-2">
        <li className="flex text-md ">
          <span className="pr-1">
            <IoMdTrendingUp size="1.5rem" />
          </span>
          Trending
        </li>
        <li className="flex text-md ">
          <span className="pr-1">
            <FaShoppingBag size="1.5rem" />
          </span>
          Shopping
        </li>
        <li className="flex text-md ">
          <span className="pr-1">
            <FaMusic size="1.5rem" />
          </span>
          Music
        </li>
        <li className="flex text-md ">
          <span className="pr-1">
            <MdLocalMovies size="1.5rem" />
          </span>
          Movies
        </li>
      </ul>
      <hr className=" bg-gray-700 mt-2" />
      <ul className="flex flex-col gap-3 mt-2 text-gray-500 text-sm font-semibold">
        <li>About Press Copyright Contact usCreators Advertise Developers</li>
        <li>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</li>
        <li>© 2025 Google LLC</li>
      </ul>
    </div>
  );
};

export default SideBar;
