import styled from 'styled-components'

export const GalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 90%;
    margin-top: 5%;
    margin-bottom: 34px;
    margin-left: 80px;
    max-width: 1140px;
    background-color: #fff;

    @media screen and (max-width: 720px) {
    margin-left: 20px;
}

@media screen and (max-width: 590) {
        display: column;
        justify-content: center;
        align-items: column;
    }

`;

export const SelectedImage = styled.img`
    width: 65%;
    height: 90%;
    border-radius: 36px;
    padding-top: 36px;
    padding-left: 30px;
    @media screen and (max-width: 720px) {
    width: 100%;
    height: 300px;
    border-radius: 16px;
    padding-top: 16px;
    padding-left: 16px;

    @media screen and (max-width: 680px) {
        width: 200px;
        height: 200px;
    }

    @media screen and (max-width: 680px) {
        width: 60%;
        height: 50%
}

    @media screen and (min-width: 681px) and (max-width: 1024px) {
        width: min(70%, calc(680px + (1024 - 680) * ((100vw - 320px) / 704)));
}

    @media screen and (min-width: 1025px) {
        width: 1024px;
}


`;

export const UpperPart = styled.div`
    display: flex;
    width: 100%;
    height: 60%;
`;

export const PassageContainer = styled.div`
    height: 70%;
    width: 80%;
    display: flex;
    flex-direction: column;
`;

export const PassageHeading = styled.h1`
    margin-left: 20px;
    margin-bottom: 30px;
    font-size: 20px;
`;

export const PassageText = styled.p`
    margin-left: 20px;
    margin-right: 26px;
    margin-top: auto;
    font-size: 18px;
    margin-bottom: 30px;

    @media screen and (max-width: 700px) {
    font-size: 12px; 
}

`;

export const ThumbnailsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 24px;
    border-radius: 0;
    border-width: 0;
    padding-top: 50px;
    align-items: center;

    @media screen and (max-width: 720px) {
    gap: 10px;
}

`;

export const SlideshowControls = styled.div`
margin-left: 180px;

@media screen and (max-width: 770) {
    display: column;
    margin-left: 500px;
}
`;
