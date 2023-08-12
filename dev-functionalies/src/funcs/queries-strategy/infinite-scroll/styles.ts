import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const CharacterContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100rem;
    margin-top: 3rem;
`;

export const CharacterWrapper = styled.div`
    transition: all 0.5s ease-in-out;

    img {
        width: 6rem;
    }
`;

export const CharacterCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 12rem;
    height: 16rem;
    margin: 0.5rem;
    padding: 5rem;
    border-radius: 0.5rem;
    border: 2px solid #365b3c;
    background-color: #202126;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    img {
        padding-top: 2%.5;
        width: 12rem;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.1) translateY(-1rem);
    }
`;

export const LoadBtnWrapper = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
`;