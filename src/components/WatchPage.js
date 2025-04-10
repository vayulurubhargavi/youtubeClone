import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, YOUTUBE_VIDEO_URL } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videoInfo, setVideoInfo] = useState(null);

  // CALL VIDEO URL
  const fetch_videoInfo = async () => {
    const data = await fetch(
      YOUTUBE_VIDEO_URL + videoId + "&key=" + GOOGLE_API_KEY
    );

    console.log(data);
    const json = await data.json();
    console.log(json.items[0]);
    setVideoInfo(json.items[0]);
  };
  useEffect(() => {
    fetch_videoInfo();
    dispatch(closeMenu());
  }, []);
  return (
    <div className="px-5 flex flex-wrap flex-col w-full ">
      <div className="flex  ">
        <iframe
          width="640"
          height="360"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="rounded-lg"
        ></iframe>
        <div className="flex-1 ml-4">
          <LiveChat />
        </div>
        
      </div>
      {videoInfo && (
        <div className="flex  py-5 w-[640px] ">
          <h1 className="font-bold text-lg">{videoInfo.snippet.title}</h1>
          {/* <div className="flex justify-between">
            <p>{videoInfo.snippet.channelTitle}</p>
            <p>{videoInfo.statistics.viewCount} views</p>
          </div> */}
        </div>
      )}
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
