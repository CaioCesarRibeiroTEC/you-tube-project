import styled from "styled-components"


export const HomeContainer = styled.main`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  overflow-x: hidden;
  overflow-y: hidden;
  flex-wrap: wrap;
  
`;

export const HomeContent = styled.div<{openMenu: boolean }>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: ${({openMenu}) => openMenu? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
  column-gap: ${({openMenu}) => openMenu? '20px' : '10px'};
  margin-top: 30px;
  margin-left: 30px;

  @media(max-width: 1600px) {
    margin-left: -10px;
    column-gap: ${({openMenu}) => openMenu? '1px' : '5px'};
    column-gap: ${({openMenu}) => openMenu? '20px' : '1px'};
  
  }
  @media(max-width: 830px) {
    margin-left: -5px;
    grid-template-columns: ${({openMenu}) => openMenu? 'repeat(1, 1fr)' : 'repeat(2, 1fr)'};
    column-gap: ${({openMenu}) => openMenu? '5px' : '5px'};
  
  }

  @media(max-width: 500px) {
    grid-template-columns: 1fr;
    margin-left: ${({openMenu}) => openMenu? '-100px' : '1px'};
  
  }

`;




export {}