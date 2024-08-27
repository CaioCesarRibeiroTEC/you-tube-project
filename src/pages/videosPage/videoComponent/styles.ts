import styled from "styled-components";


export const VideosContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 60px;
    
`;

export const VideosContent = styled.div<{openMenu: boolean }>`
  width: 90%;
  height: 300px;
  padding:${({openMenu}) => openMenu? '20px 20px 10px 10px' : '20px 0 0 10px'} ;

  @media(max-width: 1600px) {
    margin-left: -20px;
    height: 250px;
  }

  @media(max-width: 830px) {
    width: 80%;
    height: 200px;
  }
  
    
`;

export const ImageBanner = styled.img<{openMenu: boolean }>`
  width: ${({openMenu}) => openMenu? '400px' : '350px'};
  height: 190px;
  border-radius: 20px;
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;

  @media(max-width: 1650px) {
    width: 95%;
    margin-left: -10px;
  }

  @media(max-width: 950px) {
    width: 95%;
    height: 150px;
  }

  @media(max-width: 830px) {
    width: ${({openMenu}) => openMenu? '450px' : '300px'};
    margin-left: ${({openMenu}) => openMenu? '10px' : '-10px'};
  }

  @media(max-width: 750px) {
    width: ${({openMenu}) => openMenu? '350px' : '230px'};
    margin-left: -20px;
  }

  @media(max-width: 550px) {
    width: ${({openMenu}) => openMenu? '300px' : '200px'};
    margin-left: -20px;
  }

  @media(max-width: 500px) {
    margin-left: 60px;
    width: 250px;
  }

`;

export const TitleContainer = styled.div<{openMenu: boolean }>`
    width: 100%;
    display: flex;
    height: 200px;

    @media(max-width: 500px) {
    margin-left: 60px;

  }
`;

export const ChannelImage = styled.div`
    background-color: #4682B4;
    min-width: 25px;
    max-width: 25px;
    min-height: 25px;
    max-height: 25px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;
    cursor: pointer;
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
`;

