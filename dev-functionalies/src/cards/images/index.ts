import rocketOne from './rocket-1.png';
import rocketTwo from './rocket-2.png';
import test from './test.svg';

interface IImages {
    [key: string]: string;
}

const images: IImages = {
    rocketOne,
    rocketTwo,
    test,
};

export default images;