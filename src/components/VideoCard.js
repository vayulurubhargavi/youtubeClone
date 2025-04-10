import React from "react";

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-60 shadow-lg ">
      <img src={thumbnails.medium.url} alt="video" className="rounded-lg" />
      <ul>
        <li>{title}</li>
        <li className="text-gray-700">{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
