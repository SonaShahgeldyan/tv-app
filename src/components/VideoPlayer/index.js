import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl }) => {
  console.log(videoUrl);
  return (
    <div className="video-player">
      <ReactPlayer
        url={videoUrl}
        playing
        controls={false}
        width="100%"
        height="100vh"
      />
    </div>
  );
};

export default VideoPlayer;
