import styled from "styled-components"


export const CreateLoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;

    
`;

export const CreateLoginContent = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    background-color: #d2d2d2;
    border-radius: 25px;

    @media(max-width: 830px) {
        flex-direction: column;
        row-gap: 50px;
    }

    @media(max-width: 500px) {
        flex-direction: column;
        row-gap: 50px;
    }

`;

export const CreateLoginImgContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CreateLoginImg = styled.img`
    width: 70%;
`;
export const CreateImgSpan = styled.span`
    color: #cc0000;
    font-size: 2rem;

    @media(max-width: 500px) {
        font-size: 20px;
    }
`;


export const CreateInputContainer = styled.div`
    width: 70%;
    height: 30%;
    display: flex;
    flex-direction: column;

    @media(max-width: 500px) {
        flex-direction: column;
        row-gap: 150px;
    }
`;

export const CreateFromContainer = styled.form`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
`;

export const CreateLabelContainer = styled.label`
    width: 70%;
    display: flex;
    
    @media(max-width: 500px) {
        flex-direction: column;
        row-gap: 10px;
    }
    
`;

export const Input = styled.input<{valid: boolean}>`
    width: 250px;
    height: 30px;
    border-radius: 40px;
    border: ${({valid}) => valid? "1px solid #d3d3d3" : "1px solid red"};
    margin-left: 50px;
    font-size: 12px;
    &:focus {
        border-color: ${({valid}) => valid? "#1a75ff" : "red"};
        border-width: 2px;
        outline: none;
    }

`;

export const CompareInputPassword = styled.input<{valid: boolean}>`
    width: 200px;
    height: 30px;
    border-radius: 40px;
    border: ${({valid}) => valid? "1px solid #d3d3d3" : "1px solid red"};
    margin-left: 30px;
    &:focus {
        border-color: ${({valid}) => valid? "#1a75ff" : "red"};
        border-width: 2px;
        outline: none;
    }
`;

export const ViewPassword = styled.div`


`;

export const CreateLoginButtos = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
        width: 150px;
        height: 30px;
        border-radius: 40px;
        border: none;
        cursor: pointer;
    }
`;


export{}

export const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
`;

export const LoginContent = styled.div`
    width: 50%;
    height: 60%;
    display: flex;
    align-items: center;
    background-color: #d2d2d2;
    border-radius: 25px
`;

export const LoginImgContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LoginImg = styled.img`
    width: 70%;
`;
export const ImgSpan = styled.span`
    color: #cc0000;
    font-size: 2rem;
`;


export const InputContainer = styled.div`
    width: 70%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

`;

export const FromContainer = styled.form`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

`;

export const LabelContainer = styled.label`
    width: 70%;
    display: flex;
    justify-content: space-around;
    padding: 10px;


    input {
        width: 200px;
        height: 30px;
        border-radius: 40px;
        border: none;
    }
`;



export const LoginButtos = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
        width: 150px;
        height: 30px;
        border-radius: 40px;
        border: none;
        cursor: pointer;
    }
`;


export{}