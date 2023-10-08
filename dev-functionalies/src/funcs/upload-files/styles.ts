
import styled from 'styled-components';
import { MdCloudUpload } from 'react-icons/md';
import { MdFolderDelete } from 'react-icons/md';
import { BiSolidFilePdf, BiSolidFilePng, BiSolidFileJpg } from 'react-icons/bi';


export const IconPdf = styled(BiSolidFilePdf)`
    width: 5rem;
    height: 5rem;
    color: #8a2d2d;
`;

export const IconPng = styled(BiSolidFilePng)`
    width: 5rem;
    height: 5rem;
    color: #44a85e;
`;

export const IconJpg = styled(BiSolidFileJpg)`
    width: 5rem;
    height: 5rem;
    color: #5250c3;
`;

export const Container = styled.div`
   display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const DropFileInputWrapper = styled.div`
      width: 40rem;
      height: 15rem;
      border-radius: .5rem;
      background-color: #212423;
`;

export const Input = styled.input`
  opacity: 0;
   position: absolute;
    top: 3.3rem;
    left: 15rem;
    cursor: pointer;
`;

export const DropFileInputIcon = styled(MdCloudUpload)`
    width: 5rem;
    height: 5rem;
    margin-top: .7rem;
    color: #4f7192;
    transition: color .3s ease;

    &:hover {
      color: #5a80a6;
    }
`;



export const DropFileInput = styled.div`
    position: relative;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
     margin-top: 4rem;
    &:hover {
      ${Input} {
        .dragover & {
          opacity: .6;
        }
      }
    }    
`;

export const DropFileInputLabel = styled.div`
     text-align: center;
    color: var(--txt-second-color);
    font-weight: 600;
    padding: 10px;

    img {
      width: 5rem;
    }
`;

export const DropFilePreview = styled.div`
       overflow: scroll;
       margin-top: 30px;
     p {
      font-weight: 500;
     }
`;

export const DropFilePreviewTitle = styled.div`
    margin-bottom: 20px;
`;

export const DropFilePreviewItemDel = styled.span`
   background-color: #fff;
    color: blue;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);
    box-shadow: var(--box-shadow);
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
    position: absolute;
`;

export const DropFilePreviewItemDelIcon = styled(MdFolderDelete)`
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    right: 2rem;
    top: 2rem;
    color: #ca2525;
    opacity: 0;
`;

export const DropFilePreviewItem = styled.div`
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 20px;
    display: flex;
    position: relative;
    
    
    img {
      width: 50px;
      margin-right: 20px;
    }
    &:hover {
      ${DropFilePreviewItemDelIcon} {
        opacity: 1;
      }
    }
`;

export const ImgContentWrapper = styled.div`
    width: 45rem;
      height: 8rem;
      padding: 10px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #212423;
      }
`;


export const DropFilePreviewInfo= styled.div`
    display: flex;
    flex-direction: column;
`;

export const Box = styled.div`
    margin-top: 30px;
    border-radius: 20px;
`;

export const Header = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

