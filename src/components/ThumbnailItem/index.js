import React from 'react';

const ThumbnailItem = ({ imageDetails, isActive, handleClickThumbnail }) => {
    const { id, thumbnailUrl, thumbnailAltText } = imageDetails;

    const handleClick = () => {
        handleClickThumbnail(id);
    };

    return (
        <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
        style={{
            filter: isActive ? 'none' : 'grayscale(100%)',
            cursor: 'pointer',
        }}
        onClick={handleClick}
        />
    );
};

export default ThumbnailItem;
