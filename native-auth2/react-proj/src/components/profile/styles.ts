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
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background-color: #131314;
    border: 2px solid #88419c;
    top: -5.5rem;
    left: 21rem;
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
    position: relative;
`;

export const IconWrapper = styled.div`
  display: flex;
  margin-top: 8rem;
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

export const UserIconProperties = styled.h2`
   top: 1.5rem;
   position: absolute;
`;

export const MyIconsProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .3s ease-in-out;

    &:hover {
        @keyframes jumping {
            0% {
                transform: translateY(0);
                color: #88419c;
            }

            to {
                transform: translateY(-1rem);
                color: #a6a6a6;
            }
        }

        animation: jumping .5s ease-in-out infinite alternate;
    }
`;
