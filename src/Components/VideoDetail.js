import React from "react";

const VideoDetail = ({ vimeo }) => {
    if (!vimeo) {
        return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${vimeo.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{vimeo.snippet.title}</h4>
                <p>{vimeo.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;
