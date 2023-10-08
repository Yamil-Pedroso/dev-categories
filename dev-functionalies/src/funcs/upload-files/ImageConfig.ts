import fileDefault from './images/file-blank-solid-240.png';
import fileCSS from './images/file-css-solid-240.png';
import filePdf from './images/file-pdf-solid-240.png';
import filePng from './images/file-png-solid-240.png';
import cloudUpload from './images/cloud-upload.png';

interface ImageConfigType {
    [key: string]: string;
}

export const ImageConfig: ImageConfigType = {
    default: fileDefault,
    pdf: filePdf,
    png: filePng,
    css: fileCSS,
};

export const ImageIcons: ImageConfigType = {
    upload: cloudUpload,
};
