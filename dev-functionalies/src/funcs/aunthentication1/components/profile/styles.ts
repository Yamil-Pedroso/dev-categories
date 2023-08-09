import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.25rem;
    background-color: #131314;
    border-radius: 5px;
    width: 50rem;
    height: 25rem;
    margin-top: 10rem;
    position: relative;
`;

export const ImgWrapper = styled.div`
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background-color: #131314;
    border: 2px solid #88419c;
    top: -3.5rem;
    left: 22.5rem;
    position: absolute;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;

    }
`;

export const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #a6a6a6;
    margin-top: 2rem;
    line-height: 0rem;
    font-family: 'Roboto', sans-serif;
`;

export const IconWrapper = styled.div`
  display: flex;
  margin-top: 4rem;
  color: #88419c;

    div {
        margin: 0 1.5rem;
    }
`;

export const SmsWrapper = styled.div`
    display: flex;

    h2 {
        font-family: 'Roboto', sans-serif;
        color: #a6a6a6;
    }
`;

export const EditProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 3rem;

    a {
        margin: 0 1rem;
    }
`;

export const EditProfileText = styled.a`
    text-decoration: none;
    color: #88419c;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
`;


