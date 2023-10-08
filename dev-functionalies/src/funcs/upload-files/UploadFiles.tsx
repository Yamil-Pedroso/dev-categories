import React, { useRef, useState } from 'react';
import { DropFileInputIcon } from './styles';
import { 
    Container,
    DropFileInput,
    DropFileInputWrapper,
    Input, 
    DropFileInputLabel, 
    DropFilePreview, 
    DropFilePreviewTitle, 
    DropFilePreviewItem,
    DropFilePreviewInfo,
    IconPdf,
    IconPng,
    IconJpg,
    ImgContentWrapper,
    DropFilePreviewItemDelIcon
} from './styles';
import { ImageConfig } from './ImageConfig';

interface UploadFilesProps {
    onFileChange: (fileList: File[]) => void;
}

const UploadFiles: React.FC<UploadFilesProps> = (props) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [fileList, setFileList] = useState<File[]>([]);

    const onDragEnter = () => {
        if (wrapperRef.current) {
            wrapperRef.current.classList.add('dragover');
        }
    };

    const onDragLeave = () => {
        if (wrapperRef.current) {
            wrapperRef.current.classList.remove('dragover');
        }
    };

    const onDrop = () => {
        if (wrapperRef.current) {
            wrapperRef.current.classList.remove('dragover');
        }
    };

    const onFileDrop = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFile = e.target.files?.[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    };

    const fileRemove = (file: File) => {
        const updatedList = fileList.filter(item => item !== file);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    };

    return (
        <Container>
            <div style={{display: "flex"}}>

            
            <div style={{marginBottom: "1rem", marginRight: "2rem", display: "flex", flexDirection:"column"}}>
                <IconPdf />
                <IconPng />
                <IconJpg />
            </div>
            <DropFileInputWrapper>
              <DropFileInput
                  ref={wrapperRef}
                  onDragEnter={onDragEnter}
                  onDragLeave={onDragLeave}
                  onDrop={onDrop}
              >
                  <DropFileInputLabel>
                        <DropFileInputIcon />
                  </DropFileInputLabel>
                  <Input type="file" value="" onChange={onFileDrop} />
              </DropFileInput>
            </DropFileInputWrapper>
            </div>
            {fileList.length > 0 ? (
                <DropFilePreview>
                    <DropFilePreviewTitle>Nice and Ease</DropFilePreviewTitle>
                    {fileList.map((item, index) => (
                        <DropFilePreviewItem key={index}>
                            <ImgContentWrapper>
                              <img
                                  src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']}
                                  alt=""
                              />
      
                              <DropFilePreviewInfo>
                                  <p>{item.name}</p>
                                  <p>{item.size}B</p>
                              </DropFilePreviewInfo>
                            </ImgContentWrapper>
                            <DropFilePreviewItemDelIcon
                                onClick={() => fileRemove(item)}
                            />
                        </DropFilePreviewItem>
                    ))}
                </DropFilePreview>
            ) : null}

        </Container>
    );
};

export default UploadFiles;
