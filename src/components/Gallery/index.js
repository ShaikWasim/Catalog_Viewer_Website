import React, { useState, useEffect, useCallback } from 'react';
import ThumbnailItem from '../ThumbnailItem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import './index.css'

import { createGlobalStyle } from 'styled-components';
import { GalleryContainer, UpperPart, SelectedImage, PassageContainer, PassageHeading, PassageText, ThumbnailsList, SlideshowControls  } from './styledComponents';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #efebf0 
    }
`;

const imagesList = [
    {
        id: 0,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
        thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
        imageAltText: 'nature mountain with pond',
        thumbnailAltText: 'nature mountain with pond thumbnail',
        className: 'img',
        passage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
        id: 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
        thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
        imageAltText: 'nature sunset',
        thumbnailAltText: 'nature sunset thumbnail',
        className: 'img',
        passage: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quam corrupti debitis assumenda odit? Libero odit voluptas molestiae itaque culpa natus a doloribus? Rem mollitia cupiditate fugit sequi rerum, odit dolores? Voluptates doloribus autem eaque sequi dolore voluptate corporis quisquam quae numquam, illum in placeat aliquid magni iure'

    },
    {
        id: 2,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
        thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
        imageAltText: 'nature mountain with ocean',
        thumbnailAltText: 'nature mountain with ocean thumbnail',
        className: 'img',
        passage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua voluptate corporis quisquam quae numquam, illum in placeat aliquid magni iure deserunt, unde nam? Quam perspiciatis obcaecati corporis asperiores id vero unde fugiat, nemo aut, omnis explicabo numquam, rerum magni velit ullam. Ullam, est eaque? Unde error voluptate odit, tempore aut, delectus temporibus iusto earum ea cum ducimus eligendi? Dolorum atque quibusdam esse accusamus, dicta maxime, reprehenderit vero quis minus quae, eveniet suscipit'
    },
    {
        id: 3,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
        thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
        imageAltText: 'nature mountain with forest',
        thumbnailAltText: 'nature mountain with forest thumbnail',
        className: 'img',
        passage: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quam corrupti debitis assumenda odit? Libero odit voluptas molestiae itaque culpa natus a doloribus? Rem mollitia cupiditate fugit sequi rerum, odit dolores? Voluptates doloribus autem eaque sequi dolore '
    },
    {
        id: 4,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
        thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
        imageAltText: 'nature leaves',
        thumbnailAltText: 'nature leaves thumbnail',
        className: 'img',
        passage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
    }
];


const Gallery = () => {
  // Define state variables
    const [activeThumbnailId, setActiveThumbnailId] = useState(imagesList[0].id);
    const [selectedPassage, setSelectedPassage] = useState(imagesList[0].passage);
    const [isSlideshowActive, setIsSlideshowActive] = useState(false);

    // Define the function to handle next image
    const handleNextImage = useCallback(() => {
        const currentIndex = imagesList.findIndex((image) => image.id === activeThumbnailId);
        const nextIndex = (currentIndex + 1) % imagesList.length;
        const nextImage = imagesList[nextIndex];
        setActiveThumbnailId(nextImage.id);
        setSelectedPassage(nextImage.passage);
    }, [activeThumbnailId]);

    // Set up interval for slideshow if active
    useEffect(() => {
        let slideshowInterval;

        if (isSlideshowActive) {
        slideshowInterval = setInterval(handleNextImage, 3000);
        }

        return () => {
        clearInterval(slideshowInterval);
        };
    }, [isSlideshowActive, handleNextImage]);

    // Handle click on thumbnail
    const handleClickThumbnail = (id) => {
        const selectedImage = imagesList.find((image) => image.id === id);
        if (selectedImage) {
        setActiveThumbnailId(id);
        setSelectedPassage(selectedImage.passage);
        setIsSlideshowActive(false);
        }
    };

    // Handle click on previous image
    const handlePreviousImage = () => {
        const currentIndex = imagesList.findIndex((image) => image.id === activeThumbnailId);
        const previousIndex = currentIndex === 0 ? imagesList.length - 1 : currentIndex - 1;
        const previousImage = imagesList[previousIndex];
        setActiveThumbnailId(previousImage.id);
        setSelectedPassage(previousImage.passage);
    };

    // Handle click on slideshow toggle
    const handleSlideshowToggle = () => {
        setIsSlideshowActive((prevState) => !prevState);
    };

    // Get the details of the selected image
    const selectedImage = imagesList.find((image) => image.id === activeThumbnailId);

    // Render the gallery component
    return (
        <>
        {/* Apply global styles */}
        <GlobalStyle />

        {/* Gallery container */}
        <GalleryContainer>
            <UpperPart>
            <SelectedImage src={selectedImage.imageUrl} alt={selectedImage.imageAltText} />
            <PassageContainer>
                <PassageHeading>Nature</PassageHeading>
                <PassageText>{selectedPassage}</PassageText>
            </PassageContainer>
            </UpperPart>

            <ThumbnailsList>
            {/* Render the previous image button */}
            <ArrowBackIosIcon onClick={handlePreviousImage} style={{ cursor: 'pointer' }} />

            {/* Render the thumbnail items */}
            {imagesList.map((eachImage) => (
                <ThumbnailItem
                key={eachImage.id}
                className={eachImage.className}
                imageDetails={eachImage}
                style={{ fontSize: '50px', cursor: 'pointer' }}
                isActive={activeThumbnailId === eachImage.id}
                handleClickThumbnail={handleClickThumbnail}
                />
            ))}

            {/* Render the next image button */}
            <ArrowForwardIosIcon onClick={handleNextImage} style={{ cursor: 'pointer' }} />

            {/* Render the slideshow controls */}
            <SlideshowControls>
                {isSlideshowActive ? (
                <PauseCircleFilledIcon
                    className="icon play-icon"
                    onClick={handleSlideshowToggle}
                    style={{ fontSize: '50px', cursor: 'pointer' }}
                />
                ) : (
                <PlayCircleIcon
                    className="icon play-icon"
                    onClick={handleSlideshowToggle}
                    style={{ fontSize: '50px', cursor: 'pointer' }}
                />
                )}
            </SlideshowControls>
            </ThumbnailsList>
        </GalleryContainer>
        </>
    );
};

export default Gallery;

