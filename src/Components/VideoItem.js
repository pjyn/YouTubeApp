import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        // child to parent.

        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
            />

            <div className="content">
                <div className="header"> {video.snippet.title} </div>
            </div>
        </div>
    );
};

export default VideoItem;
