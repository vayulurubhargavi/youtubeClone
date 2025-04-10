import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const get_popular_videos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    //  console.log(json.items);
    setVideos(json.items);
  };

  useEffect(() => {
    get_popular_videos();
  }, []);
  return (
    <div className="flex flex-wrap ">
      {videos?.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
