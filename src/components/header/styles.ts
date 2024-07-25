import styled from "styled-components";



//bloco1
export const HeaderContainer = styled.header`
  width: 100%;
  height: 55px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background-color: #fff;
  position: fixed;
  z-index: 2;
`;


export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 400px;
`;

export const ButtonContainer = styled.div<{margin?: string}>`
  width: 40px;
  height: 40px;
  margin: ${( {margin} ) => margin? margin : 0};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover { background-color: #f2f2f2; border-radius: 50%; }



`;

export const ButtonContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const ButtonIcon = styled.img`
    width: 20px;
`;

//bloco2

export const SearchContainer = styled.div<{openSearch: boolean}>`
  width: 800px;
  display:flex;

  @media(max-width: 500px) {
    position: fixed;
    top: ${({openSearch}) => openSearch? '10px' : '-100px'};
    left: 0;
    width: 95%;
    z-index: 6;
    background-color: #fff;
    height: 50px;
  }
`;

export const SearchInputContainer = styled.div`
  width: 450px;
  height: 35px;
  border: 1px solid #d3d3d3;
  border-radius: 40px 0 0 40px;
  display: flex;
  margin-left: 80px;
  
  @media(max-width: 834px) {
    width: 200px;
    margin-left: 10px;
  }

  @media(max-width: 688px) {
    width: 230px;
    margin-left: 10px;
  }

  @media(max-width: 600px) {
    width: 200px;
    margin-left: 10px;
  }

  @media(max-width: 414px) {
   width: 100%;
  }
    
`;

export const SearchContainerResponsive = styled.div`
  display: none;
  cursor: pointer;
  margin-left: 70px;

  @media(max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 40px
  }

`;

export const ButtonContainerResponsive = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  cursor: pointer;

  :hover { background-color: #f2f2f2; border-radius: 50%; }

`;


export const SearchInput = styled.input`
  width: 100%;
  height: 25px;
  outline: none;
  border: none;
  margin-left: 15px;

`;


export const SearchButton = styled.div`
  border-radius: 0 40px 40px 0;
  height: 35px;
  width: 70px;
  border: 1px solid #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media(max-width: 830px) {
    width: 50px;;
  }
`;


export const BackButton = styled.button<{openSearch: boolean}>`
  display: ${({openSearch}) => openSearch? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
  transition: .4s;
  margin-left: 10px;

`;

export const ClearButton = styled.button<{clearButton: boolean}>`
  display: ${({clearButton}) => clearButton? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: .4s;
  
`;

export const CloseImg = styled.img`
  width: 15px;
`;


//bloco3

export const HeaderButtons = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  justify-content: end;

  @media(max-width: 834px) {
    width: 40%;
  }

  @media(max-width: 500px) {
    display: none;
  }
  
`;

export const UserContainer = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 3s;
  position: sticky;
  top:0;
  z-index: 1;

  @media(max-width: 830px) {
    width: 100%;
  }


`;

export const UserName = styled.div<{openDropDown: boolean}>`
  width: 100%;
  height: ${({openDropDown}) => openDropDown? '70px' : '55px'};
  display: flex;
  align-items: ${({openDropDown}) => openDropDown? 'none' : 'center'};
  justify-content: ${({openDropDown}) => openDropDown? 'none' : 'center'};
  margin-right: ${({openDropDown}) => openDropDown? '9px' : 'none'};;
  background-color: #fff;
    
`;

export const UserButtonContainer = styled.div<{openDropDown: boolean}>`
  width: ${({openDropDown}) => openDropDown? '250px' : '55px'};
  height: ${({openDropDown}) => openDropDown? '50px' : '55px'};
  display: flex;
  border-radius: ${({openDropDown}) => openDropDown? '30px ' : 'none'};
  cursor: pointer;    

  :hover { background-color: ${({openDropDown}) => openDropDown? '#f2f2f2' : '#f2f2f2'}; border-radius: ${({openDropDown}) => openDropDown? '30px' : '50%'}; }

  @media(max-width: 500px) {
    width: 55px;
    :hover{background-color: #d3d3d3;}
    margin-right: 5px; 
  }
`;

export const UserButtonContent = styled.div<{openDropDown: boolean}>`
  width: ${({openDropDown}) => openDropDown? '95%' : '55px'};
  height: ${({openDropDown}) => openDropDown? '100%' : '55px'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({openDropDown}) => openDropDown? '5px' : 'none'};

`;

export const BCharAt = styled.b<{openDropDown: boolean}>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 400; 
  border: ${({openDropDown}) => openDropDown? '1px solid red' : 'none'};


`;

export const BUserName = styled.b<{openDropDown: boolean}>`
  font-size: ${({openDropDown}) => openDropDown? '16px' : '0'};
  color: ${({openDropDown}) => openDropDown? 'black' : '#fff'};
  transition: ${({openDropDown}) => openDropDown? '3s' : '1.5'};
  margin-left: 20px;

  @media(max-width: 500px) {
    display: none;
  }
`;

export const BuserName = styled.b<{openDropDown: boolean}>`
  font-size: ${({openDropDown}) => openDropDown? '16px' : '0'};
  color: ${({openDropDown}) => openDropDown? 'black' : '#fff'};
  transition: ${({openDropDown}) => openDropDown? '3s' : '1.5'};
  margin-left: 20px;
`;

export const DropDowContainer = styled.div<{openDropDown: boolean}>`
  width: 250px;
  height: 250px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  transition: 2s;
  position: absolute;
  margin-right: ${({openDropDown}) => openDropDown? '50px' : '-550px'};
  margin-top: 50px;
  position: absolute;
  
  @media(max-width: 1600px) {
    margin-right: ${({openDropDown}) => openDropDown? '20px' : '-550px'};
  }

  @media(max-width: 500px) {
    margin-right: ${({openDropDown}) => openDropDown? '400px' : '-550px'};
  }
`;


export const UserDropButtonContent = styled.div<{openDropDown: boolean}>`
  display: none;

  @media(max-width: 500px) {
    width: ${({openDropDown}) => openDropDown? '95%' : '55px'};
    height: ${({openDropDown}) => openDropDown? '100%' : '55px'};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${({openDropDown}) => openDropDown? '5px' : 'none'};
  }


`;

export const DropDowContent = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  padding-top: 30px;


 
`;

export const DropDowButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    row-gap: 20px;
    display: flex;
    flex-direction: column;

  :hover{
    background-color: #d2d2d2; 
  }
`;

export const DropDowButton = styled.button`
  width: 70%;
  height: 50px;
  border-radius: 40px 40px 40px 40px;
  font-size: 1.1rem;
  font-weight: 400;
  border: none;
  cursor: pointer;
  background-size: contain;
  background-color: aliceblue;
`;

export const DropDowButtonUser = styled.button`
  display: none;

  @media(max-width: 500px) {
    display: flex;
    width: 70%;
    height: 50px;
    border-radius: 40px 40px 40px 40px;
    font-size: 1.1rem;
    font-weight: 400;
    border: none;
    cursor: pointer;
    background-size: contain;
    background-color: aliceblue;    
  }

`;


export const LogOutContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  :hover{
    background-color: #d2d2d2; 
  }
`;

export const LogOutButton = styled.button`
  width: 70%;
  height: 50px;
  border-radius: 40px 40px 40px 40px;
  font-size: 1.1rem;
  font-weight: 400;
  border: none;
  cursor: pointer;
  background-size: contain;
`;

export const ButtonLogarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center; 
`;

export const ButtonLogar = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 40px 40px 40px 40px;
  border: none;
  cursor: pointer;  
`;







