import styled from 'styled-components';
import { MdPassword } from 'react-icons/md';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.25rem;
    background-color: #131314;
    border-radius: 5px;
    width: 25rem;
    height: 20rem;
    position: relative;
`;

export const PasswordIconWrapper = styled.div`
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    background-color: #131314;
    border: 2px solid #131314;
    top: -3.5rem;
    position: absolute;
`;

export const PasswordIcon = styled(MdPassword)`
    width: 4rem;
    height: 4rem;
    color: #88419c;
    display: flex;
    margin: 1.2rem auto;
`;


export const HeaderTitle = styled.h1`
    color: #cdcdcd;
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
    margin-bottom: 2rem;

    span {
        color: #88419c;
    }
`;

export const InputWrapper = styled.div`
    
`;

export const Input = styled.input`
    margin-bottom: 1.25rem;
    padding: 10px;
    width: 18rem;
    border-radius: 5px;
    border: none;
    background-color: #1f1f1f;
    color: #bdbdbd;
    font-size: 16px;

    &::placeholder {
        margin: 0;
        padding: 0;
    }
`;

export const UpdatePasswordBtnWrapper = styled.div`
`;

export const UpdatePasswordBtn = styled.button`
   padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #1a1a1a;
    color: #a6a6a6;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        color: #88419c;
        transition: .3s ease-in-out;
    }
`;
