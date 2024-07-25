import styled from "styled-components";


export const MenuContainer = styled.div<{openMenu: boolean }>`
    width: ${( {openMenu} ) => openMenu? '180px' : '80px'};
    height: calc(100vh - 55px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 30px;
    padding: 10px 10px 10px 10px;
    box-sizing: border-box;
    margin-top: 100px;
    overflow-y: auto;
    overflow-x: hidden;
    position: sticky;
    top: 50px;   

    @media(max-width: 500px) {
        width: ${( {openMenu} ) => openMenu? '180px' : '70px'};
        margin-left: ${({openMenu}) => openMenu? '0px' : '-10px'};
        z-index: 4;
        background-color: #fff;
    }
`;

export const DivisorItem = styled.div`
  width: 100%;
  margin-top: 15px;
  border-bottom: 1px solid #e0e0e0;

  @media(max-width: 500px) {
       
    }

`;



export const MenuItem = styled.div<{openMenu: boolean }>`
    width: ${( {openMenu} ) => openMenu? '75%' : '85%'};
    min-height: 50px;
    display: flex;
    margin-bottom: ${( {openMenu} ) => openMenu? '10px' : '20px'};
    cursor: pointer;
    padding: 2px 15px;
    :hover {
        background-color: #f2f2f2;
        border-radius: 10px;
    }


`;

export const ButtonContainer = styled.div`
    width: 100%;
    height: 90%; 
    cursor: pointer;

`;

export const ButtonContent = styled.div<{openMenu: boolean }>`
    width: 95%;
    height: 95%;
    display: flex;
    flex-direction: ${( {openMenu} ) => openMenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${( {openMenu} ) => openMenu? 'none' : 'center'};
    padding: ${( {openMenu} ) => openMenu? 'none' : '2px 17px'};
    box-sizing: border-box;
    
    span {
        font-weight: ${( {openMenu} ) => openMenu? 'bold' : '400'}; 
        margin-left: ${( {openMenu} ) => openMenu? '10px' : 'none'};
        font-size: ${( {openMenu} ) => openMenu? '16px' : '12px'};
        
    }
`;

export const ButtonIcon = styled.img<{openMenu: boolean }>`
    width: 35px;
    margin-top: ${( {openMenu} ) => openMenu? 'none' : '5px'};
    margin-left: ${( {openMenu} ) => openMenu? '5px' : 'none'};
`;

export const ButtonLogin = styled.button`
    width: 120px;
        height: 25px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 40px 40px 40px 40px;
        border: 1px solid;

    img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
`;

