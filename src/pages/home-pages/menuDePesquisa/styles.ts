import styled from "styled-components";



export const MenuPesquisaContainer = styled.div<{openMenu:boolean}>`
  width: 85%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 70px;
  position: fixed;
  margin-top: -5px;
  margin-left: ${({openMenu}) => openMenu? '40px' : '100px'};
  


  @media(max-width: 1600px) {
    margin-left: ${({openMenu}) => openMenu? '-10px' : '60px'};
  
  }

  @media(max-width: 830px) {
    width: ${({openMenu}) => openMenu? '75%' : '80%'};
    margin-left: ${({openMenu}) => openMenu? '-10px' : '40px'};
  
  }

  @media(max-width: 500px) {
    width: 90%;
    margin-left: ${({openMenu}) => openMenu? '-150px' : '-40px'};
  
  }



`;
export const SliderButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#fff;
  transition: 2s;
  
`;

export const SliderButtonsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
`;

export const SliderButtons = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
  
  &:hover{
    background-color: #f3f3f3;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;
  overflow-x: hidden;   
  background-color: #fff;
  

`;

export const ButtonsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 37px;;
  height: 100%;

  :hover {
    background-color: #708090;
    color: #4d0000;
  }

  @media(max-width: 500px) {
    column-gap: 6px;
  }
`;


export const Button = styled.button`
  height: 90%;
  display: inline-block;
  white-space: nowrap;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;

  @media(max-width: 500px) {
    font-size: 12px;
  }

`;


export const ButtonIcon = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;


export{}