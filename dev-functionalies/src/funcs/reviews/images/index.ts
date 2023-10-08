import ringLang from './ring-lang.png';
import magic from './magic.png';
import blueDiamant from './blue-diamant.png';
import orcFang from './orc-fang.png';


interface IImage {
    [key: string]: string
}

const images: IImage = {
    'ringLang': ringLang,
    'magic': magic,
    'blueDiamant': blueDiamant,
    'orcFang': orcFang
}

export default images;