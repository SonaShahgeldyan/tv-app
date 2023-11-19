import React, { useEffect, useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import videoData from "../data/data.json";

import FeaturedVideo from "../components/FeaturedVideo";
import TendingNow from "../components/TendingNow";

const HomePage = () => {
  const { Featured, TendingNow: Tending } = videoData;

  const [lastClickedVideo, setLastClickedVideo] = useState(null);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  const handleVideoClick = (video) => {
    setShowVideoPlayer(false);

    setLastClickedVideo(video);
    sessionStorage.setItem("lastClickedVideoId", video.Id);

    setTimeout(() => {
      setShowVideoPlayer(true);
    }, 2000);
  };

  useEffect(() => {
    const lastClickedVideoId = sessionStorage.getItem("lastClickedVideoId");
    const video = Tending.find((v) => v.Id === lastClickedVideoId);
    setLastClickedVideo(video);
  }, [Tending]);

  return (
    <div>
      {showVideoPlayer ? (
        <VideoPlayer videoUrl={lastClickedVideo.VideoUrl} />
      ) : (
        <FeaturedVideo video={lastClickedVideo || Featured} />
      )}

      <TendingNow trendingVideos={Tending} onVideoClick={handleVideoClick} />
    </div>
  );
};
export default HomePage;
