import styled from 'styled-components';

export const Container = styled.div`

`;

export const HeaderTitle = styled.h1`
   background: -webkit-linear-gradient( 92.1deg,  rgba(140,35,140,1) 0.1%, rgba(255,0,0,1) 100.2% );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CardWrapper= styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  `;

export const Card = styled.div`
  width: 60rem;
  height: 40rem;
  border: 1px solid #242424;
  background-color: #191919;
  border-radius: 5px;
  box-shadow: 0 0 1rem rgba(140, 35, 140, 0.1);
  margin: 10px;
  padding: 10px;
  overflow: hidden;
  scroll-behavior: smooth;
  overflow-x: auto;
  scrollbar-width: thin; 
  scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.1); 
  cursor: pointer;
`;

export const MenuItemWrapper = styled.div`
  display: flex;
  justify-content: center;

  p {
    margin: 0 10px;
  }
`;