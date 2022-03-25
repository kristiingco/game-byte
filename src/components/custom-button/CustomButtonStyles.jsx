import styled from "styled-components";

export const CustomButtonContainer = styled.button`
    min-width: 160px;
    max-width: 300px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 11px;
    text-transform: uppercase;
    font-family: "Varela Round", sans-serif;
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

export const InvertedButton = styled(CustomButtonContainer)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

export const GoogleSignInButton = styled(CustomButtonContainer)`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;
