import styled from "styled-components";

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--mainBlue);
    border-color: ${(props) =>
        props.cart ? "var(--black)" : "var(--mainBlue)"};
    color: ${(props) =>
        props.cart ? "var(--black)" : "var(--mainBlue)"};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transitions: all 0.5s ease-in-out;
    &:hover {
        background: ${(props) =>
            props.cart ? "var(--black)" : "var(--mainBlue)"};
        color: var(--mainWhite);
    }
    &:focus {
        outline: none;
    }
`;
