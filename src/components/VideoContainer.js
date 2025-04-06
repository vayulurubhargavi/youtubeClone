import React, { useEffect ,useState} from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {

   const [videos, setVideos] = useState([]);
  const get_popular_videos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  useEffect(() => {
    get_popular_videos();
  }, []);
  return <div>
    <VideoCard videoInfo={videos[0]} />
  </div>;
};

export default VideoContainer;
