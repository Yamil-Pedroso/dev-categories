import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.25rem 1.25rem 2.5rem 1.25rem;
    background-color: #131314;
    border-radius: 5px;
    width: 25rem;
    height: 25rem;
    position: relative;
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

export const FigureWrapper = styled.div`
    margin: 0 auto;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    background-color: #131314;
    border: 2px solid #131314;
    overflow: hidden;
`;

export const Figure = styled.img`
    width: 4rem;
    height: 3.8rem;
    border-radius: 50%;
    display: flex;
    margin: 1.2rem auto;
    object-fit: cover;
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

export const UpdateBtnWrapper = styled.div`
`;

export const UpdateBtn = styled.button`
   padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #1a1a1a;
    color: #a6a6a6;
    font-size: 16px;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;

    &:hover {
        color: #88419c;
        transition: 0.3s ease-in-out;
    }
`;

export const CustomFileInput = styled.input`
    
`;