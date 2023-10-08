import React from 'react';
import { Box } from './styles';
import UploadFiles from './UploadFiles';

const AppDropFiles: React.FC = () => {
    const onFileChange = (files: File[]) => {
        console.log(files);
    };

    return (
        <Box>
            <UploadFiles
                onFileChange={files => onFileChange(files)}
            />
        </Box>
    );
};

export default AppDropFiles;
