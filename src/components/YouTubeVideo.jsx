import React from "react";
import YouTube from "react-youtube";

const YouTubeVideo = () => {
  const videoId = "1CAEfJmrESw"; // Cambia esto al ID del video que desees mostrar

  return (
    <div>
      <YouTube
        videoId={videoId}
        opts={{
          height: "290",
          width: "100%",
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
          },
        }}
      />
    </div>
  );
};

export default YouTubeVideo;
