import styled from 'styled-components';
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin-top: 1rem;

    .centered-row td {
        vertical-align: middle;
    }

    .centered-row .img-cell {
        padding: 1rem;
    }

    .centered-row .hobbies-cell {
        padding: 1.5rem;
    }

    h1{
        font-size: 3rem;
        color: #1b405a;

        span {
            color: #1b405a;
            font-size: 4rem;
        }
    }
`;



export const AscendingIcon = styled(AiOutlineSortAscending)`
    font-size: 2rem;

    &:hover {
        transform: translateY(1rem);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }
`;

export const DescendingIcon = styled(AiOutlineSortDescending)`
    font-size: 2rem;

    &:hover {
        transform: translateY(-1rem);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }
`;

export const TableBody = styled.div`
    margin-top: 1rem;
`;

export const TableRows = styled.div`
`;


export const InputSearchWrapper = styled.div`
    
`;

export const Input = styled.input`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    margin: 0 1rem;
    width: 20rem;
    outline: none;
    font-size: 1rem;
    font-weight: 500;
    color: #cecfcf;
    box-shadow: 0 0 0.5rem rgba(0,0,0,0.1);
`;

export const BtnsWrapper = styled.div`
   display: flex;
   align-items: center;
   margin-top: 1rem;
`;

export const Btn = styled.button`
    margin: 0 2rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color: #1b405a;
    overflow: hidden;

    &:hover {
        cursor: pointer;
        background-color: #153145;
        transition: all 0.3s ease-in-out;
    }
`;

export const ResetBtn = styled(Btn)`

`;