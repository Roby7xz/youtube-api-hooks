import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos }) {


    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} />
    });


    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );


}

export default VideoList;