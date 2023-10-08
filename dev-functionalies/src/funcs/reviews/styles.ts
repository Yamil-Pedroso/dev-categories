import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column; 
    background-image: url('https://c4.wallpaperflare.com/wallpaper/742/683/711/landscape-the-lord-of-the-rings-fantasy-art-rivendell-wallpaper-preview.jpg'); 
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    overflow: hidden;
    background-size: cover;
    `;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20rem;
    height: 37rem;
    background-color: #19191A;
    border: 1px solid #c69135;
    overflow: hidden;

    .img-ringlang {
        width: 6rem;
        padding: 1rem;
    }
`;

export const BtnRandomWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 5px 0;
`;

export const ProfileCharWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;

    h4 {
        text-transform: uppercase;
        color: #c69135;
        font-size: 1.5rem;
        letter-spacing: 2px;
        font-family: 'Hind', sans-serif;
        font-weight: 200;
        margin-top: .8rem;
        margin-bottom: 0.25rem;
    }

    p {
        color: #696153;
        font-size: .8rem;
        letter-spacing: 2px;
        font-family: 'Hind', sans-serif;
        font-weight: 200;
        margin-top: 0;
        margin-bottom: 0.25rem;
    }

`;

export const ContentCharWrapper = styled.div`
         position: relative;
         
         ul {
             display: flex;
             list-style: none;
             margin-right: 1.8rem;
             
             li {
                 display: flex;
                 margin: .5rem 1rem;
                 border-bottom: 1px solid #c69135;
                   
                   strong {
                          color: #b2b2b2;
                   }
                }
                .paragraph-wrapper {
                    position: absolute;
                   
                    width: 15rem;
                    height: 10rem;
                    top: 3.1rem;
                    left: 2.5rem;
                    background-color: #19191A;
                    color: #b2b2b2;
                }
                
     }
`;

export const ImgCharWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 1px solid #c69135;
    overflow: hidden;
    position: relative;

    img {
        object-fit: cover;
        border-radius: 50%;
        width: 100%;
    }
`;

export const GreenActivePoint = styled.div`
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    background-color: #208d20;
    position: absolute;
    top: 8rem;
    right: 16.5rem;
    z-index: 1;
`;



export const SocialNet = styled.div`
  display: flex;
  color: #c69135;
  div {
      margin: 1rem 1rem;
      
      
    &:hover {
      cursor: pointer;
      animation: heartbeat 1.5s infinite;
    }
  }

  @keyframes heartbeat {
    0%, 100% {
      transform: scale(2);
      filter: drop-shadow(0 0 8px rgba(255, 223, 0, 0.6));
      border-radius: 50%;
    }
    50% {
        transform: scale(1.1);
        filter: none;
    }
  }
`;

export const BtnLeftWrapper = styled.div`
    margin-left: 1rem;

    button {
        border: none;
        img {
            &:hover {
                cursor: pointer;
                transform: rotate(90deg);
                transition: transform 0.5s ease-in-out;
            }
        }
    }
`;


export const BtnRightWrapper = styled.div`
    margin-right: 1rem;

    button {
        border: none;
        img {
            &:hover {
                cursor: pointer;
                transform: rotate(-90deg);
                transition: transform 0.5s ease-in-out;
            }
        }
    }
`;
export const BtnLeftDiamantWrapper = styled.div`
    margin-left: 1rem;

    button {
        border: none;
        img {
            transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
            &:hover {
                cursor: pointer;
                transform: rotate(90deg);
                transition: transform 0.5s ease-in-out;
                filter: drop-shadow(0 0 5px rgba(0, 179, 255, 0.6));
            }
        }
    }
`;


export const BtnRightDiamantWrapper = styled.div`
    margin-right: 1rem;

    button {
        border: none;
        img {
            transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
            &:hover {
                cursor: pointer;
                transform: rotate(-90deg);
                transition: transform 0.5s ease-in-out;
                filter: drop-shadow(0 0 5px rgba(0, 179, 255, 0.6));

            }
        }
    }
`;
export const BtnLeftFellowWrapper = styled.div`
    margin-left: 1rem;

    button {
        border: none;
        img {
            &:hover {
                cursor: pointer;
                transition: transform 0.5s ease-in-out;
                filter: drop-shadow(0 0 5px rgba(0, 255, 0, 0.6));
                
                @keyframes rotateRight {
                    0% {
                        transform: rotate(0deg);
                        
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
                animation: rotateRight 2s linear infinite;
            }
        }
    }
`;


export const BtnRightFellowWrapper = styled.div`
    margin-right: 1rem;

    button {
        border: none;

        img {
            &:hover {
                cursor: pointer;
                transition: transform 0.5s ease-in-out;
                filter: drop-shadow(0 0 5px rgba(0, 255, 0, 0.6));

                @keyframes rotateLeft {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(-360deg);
                    }

                }
                animation: rotateLeft 2s linear infinite;
            }
        }
    }
`;
