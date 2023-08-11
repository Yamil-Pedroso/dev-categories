import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    
    justify-content: center;
    align-items: flex-start;
    position: relative;
`;

export const BtnWrapper = styled.div`
   margin-top: 2rem;
`;


export const SectionWrapper = styled.div`
     margin: 4rem auto;
`;

export const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardWrapper = styled.div`
width: 20rem;
height: 20rem;
background-color: #ab74ad;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0,0,0,0.2);
margin: 10px;
padding: 10px;
display: flex;
flex-direction: column;
overflow: hidden;
background-position: center;

`;

export const Card = styled.div`
   width: 100%;
  height: 12rem;
  img {
      width: 100%;
        height: 12rem;
      object-fit: cover;
      background-size: cover;
  }
`;