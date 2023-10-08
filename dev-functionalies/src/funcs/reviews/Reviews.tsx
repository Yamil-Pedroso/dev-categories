import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css'
import React, { useState, useEffect } from "react";
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import ParticulasCanva from './nice-effects/Particulas';

import { GiBowArrow, GiTwoHandedSword } from 'react-icons/gi';
import { DiRuby } from 'react-icons/di';

import character from "./data/data";
import elfCharacter from "./data/elfData";
import orcCharacter from "./data/orcData";

import {
  Container,
  ContentWrapper,
  Card,
  SocialNet,
  ContentCharWrapper,
  ImgCharWrapper,
  ProfileCharWrapper,
  BtnLeftWrapper,
  BtnRightWrapper,
  BtnRightDiamantWrapper,
  BtnLeftDiamantWrapper,
  BtnRightFellowWrapper,
  BtnLeftFellowWrapper,
  GreenActivePoint,
} from "./styles";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import images from "./images/index";

interface TheLordOfTheRingsFellowshipCharacter {
  name: string;
  review: string;
  image: string;
  bio: string;
  weapon: string;
  specie: string;
}

interface TheLordOfTheRingsElfCharacter {
  elfName: string;
  elfReview: string;
  elfImage: string;
  elfBio: string;
  elfWeapon: string;
  elfSpecie: string;
}

interface TheLordOfTheRingsOrcCharacter {
  orcName: string;
  orcReview: string;
  orcImage: string;
  orcBio: string;
  orcWeapon: string;
  orcSpecie: string;
}

const Reviews: React.FC = () => {
  const [active, setActive] = useState<string | null | undefined>(null);
  const [index, setIndex] = useState<number>(0);
  const [indexElf, setIndexElf] = useState<number>(0);
  const [indexOrc, setIndexOrc] = useState<number>(0);
  const [imageOpacity, setImageOpacity] = useState<number>(1);
  const [imageOpacityElf, setImageOpacityElf] = useState<number>(1);
  const [imageOpacityOrc, setImageOpacityOrc] = useState<number>(1);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const { name, review, image, weapon, specie, bio } = character[ index ] as TheLordOfTheRingsFellowshipCharacter;
  const { elfName, elfReview, elfImage, elfSpecie, elfBio } = elfCharacter[ indexElf ] as TheLordOfTheRingsElfCharacter;
  const { orcName, orcReview, orcImage, orcWeapon, orcSpecie, orcBio } = orcCharacter[ indexOrc ] as TheLordOfTheRingsOrcCharacter;

  const handleHoverActive = (arrowItem: string) => {
    setActive(arrowItem);
    const activeElement = document.querySelector(".active");
    if (activeElement) {
      activeElement.classList.add("blueDiamant");
      activeElement.classList.remove("fadeOut");
    }
  };

  const handleHoverLeave = () => {
    const activeElement = document.querySelector(".active");
    if (activeElement) {
      activeElement.classList.remove("blueDiamant");
      activeElement.classList.add("fadeOut");
    }
    
  };

  const handleMouseEnter = (menuItem: string) => {
    setHoveredMenu(menuItem);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const checkNumber = (number: number): number => {
    if (number > character.length - 1) {
      return 0;
    }
    if (number < 0) {
      return character.length - 1;
    }
    return number;
  };

  const checkElfNumber = (number: number): number => {
    if (number > elfCharacter.length - 1) {
      return 0;
    }
    if (number < 0) {
      return elfCharacter.length - 1;
    }
    return number;
  };

  const checkOrcNumber = (number: number): number => {
    if (number > orcCharacter.length - 1) {
      return 0;
    }
    if (number < 0) {
      return orcCharacter.length - 1;
    }
    return number;
  };

  const nextCharacter = () => {
    setImageOpacity(0);
    setTimeout(() => {
      setIndex((index) => {
        const newIndex = index + 1;
        return checkNumber(newIndex);
      });
      setImageOpacity(1);
    }, 300); 
  };

  const prevCharacter = () => {
    setImageOpacity(0);
    setTimeout(() => {
      setIndex((index) => {
        const newIndex = index - 1;
        return checkNumber(newIndex);
      });
      setImageOpacity(1);
    }, 300); 
  };

  const nextElfCharacter = () => {
    setImageOpacityElf(0);
    setTimeout(() => {
      setIndexElf((indexElf) => {
        const newIndexElf = indexElf + 1;
        return checkElfNumber(newIndexElf);
      });
      setImageOpacityElf(1);
    }
    , 300);
  };

  const prevElfCharacter = () => {
    setImageOpacityElf(0);
    setTimeout(() => {
      setIndexElf((indexElf) => {
        const newIndexElf = indexElf - 1;
        return checkElfNumber(newIndexElf);
      });
      setImageOpacityElf(1);
    }
    , 300);
  };

  const elvesWeapon = [
    {
      weapon1: <DiRuby size={80} style={{ color: "blue" }} />,
      weapon2: 'Ruby',
    },
    {
      weapon1: <GiBowArrow size={80} />,
      weapon2: <GiTwoHandedSword size={80} />,
    },
    {
      weapon1: <GiBowArrow size={80} />,
      weapon2: 'Bow',
    },
    {
      weapon1: <GiBowArrow size={80} />,
      weapon2: 'Bow',
    },
    {
      weapon1: <GiBowArrow size={80} />,
      weapon2: 'Bow',
    },
    {
      weapon1: <GiBowArrow size={80} />,
      weapon2: 'Bow',
    },
    {
      weapon1: <GiBowArrow size={80} />,
      weapon2: 'Bow',
    },
    {
      weapon1: <GiBowArrow size={80} />,
      weapon2: 'Bow',
    },
  ]



  const nextOrcCharacter = () => {
    setImageOpacityOrc(0);
    setTimeout(() => {
      setIndexOrc((indexOrc) => {
        const newIndexOrc = indexOrc + 1;
        return checkOrcNumber(newIndexOrc)
      });
      setImageOpacityOrc(1);
    }
    , 300);
  };

  const prevOrcCharacter = () => {
    setImageOpacityOrc(0);
    setTimeout(() => {
      setIndexOrc((indexOrc) => {
        const newIndexOrc = indexOrc - 1;
        return checkOrcNumber(newIndexOrc)
      });
      setImageOpacityOrc(1);
    }
    , 300);
  };

  useEffect(() => {
    setHoveredMenu(bio);
  }
  , [bio]);

  return (
    <Container>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 40,
          slideShadows: false,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
         
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        style={{width: '40rem', marginTop: '1.2rem'}}
      >
     <SwiperSlide>
      <ContentWrapper>
        <BtnRightFellowWrapper>
          <button onClick={prevCharacter}>
            <img 
              onMouseEnter={() => handleHoverActive("leftFellow")}
              onMouseLeave={handleHoverLeave}
            src={images.magic} alt="ring" width={32} />
          </button>
        </BtnRightFellowWrapper>
        <Card>
          <img
            src={images.ringLang}
            alt="ring"
            width={200}
            className="img-ringlang"
          />
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(71, 71, 71, 0.5)",
            }}
          />
          <ProfileCharWrapper>
            <GreenActivePoint />
            <ImgCharWrapper
              
            >
              <img
                src={image}
                alt={name}
                style={{
                  opacity: imageOpacity,
                  transition: "all 0.3s ease-in-out",
                }}
              />
            </ImgCharWrapper>
            <h4
            >
              {name}
            </h4>
            <p>{review}</p>
            <SocialNet>
              <div>
                <FaFacebook size={28} />
              </div>
              <div>
                <FaLinkedin size={28} />
              </div>
              <div>
                <FaGithub size={28} />
              </div>
            </SocialNet>
          </ProfileCharWrapper>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(71, 71, 71, 0.5)",
            }}
          />
          <ContentCharWrapper>
            <ul>
              <li>
                <strong
                  onMouseEnter={() => handleMouseEnter("bio")}
                  onMouseLeave={handleMouseLeave}
                >
                  Bio:
                </strong>
                 
                  <div className='paragraph-wrapper'>
                    <p>
                      {bio}
                    </p>
                  </div>
                 
              </li>

              <li>
                <strong
                  onMouseEnter={() => handleMouseEnter("specie")}
                  onMouseLeave={handleMouseLeave}
                >
                  Specie:
                </strong>
                
                {
                  hoveredMenu === "specie" &&
                  <div className='paragraph-wrapper'>
                    <p>
                      {specie}
                    </p>
                  </div>
                  }
              </li>

              <li>
                <strong
                  onMouseEnter={() => handleMouseEnter("weapon")}
                  onMouseLeave={handleMouseLeave}
                >
                  Weapon:
                </strong>

                {
                  hoveredMenu === "weapon" &&
                  <div className='paragraph-wrapper'>
                    <p>
                      {weapon}
                    </p>
                  </div>}
              </li>
            </ul>
          </ContentCharWrapper>
        </Card>
        <BtnLeftFellowWrapper>
          <button onClick={nextCharacter}>
            <img 
              onMouseEnter={() => handleHoverActive("leftFellow")}
              onMouseLeave={handleHoverLeave}
            src={images.magic} alt="ring" width={32} />
          </button>
        </BtnLeftFellowWrapper>
      </ContentWrapper>
      </SwiperSlide>
      
     <SwiperSlide>
      <ContentWrapper>
        <BtnRightDiamantWrapper>
          <button onClick={prevElfCharacter}>
            <img 
              onMouseEnter={() => handleHoverActive("leftDiamant")}
              onMouseLeave={handleHoverLeave}
            src={images.blueDiamant} alt="ring" width={32} />
          </button>
        </BtnRightDiamantWrapper>
        <Card>
          <img
            src={images.ringLang}
            alt="ring"
            width={200}
            className="img-ringlang"
          />
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(71, 71, 71, 0.5)",
            }}
          />
          <ProfileCharWrapper>
            <ImgCharWrapper
              className={active === "leftDiamant" ? "active" : "active"}
            >
              <img
                src={elfImage}
                alt={elfName}
                style={{
                opacity: imageOpacityElf,
                  transition: "all 0.3s ease-in-out",
                }}
              />
            </ImgCharWrapper>
            <h4
            >
              {elfName}
            </h4>
            <p>{elfReview}</p>
            <SocialNet>
              <div>
                <FaFacebook size={28} />
              </div>
              <div>
                <FaLinkedin size={28} />
              </div>
              <div>
                <FaGithub size={28} />
              </div>
            </SocialNet>
          </ProfileCharWrapper>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(71, 71, 71, 0.5)",
            }}
          />
          <ContentCharWrapper>
            <ul>
              <li>
                <strong
                  onMouseEnter={() => handleMouseEnter("elfBio")}
                  onMouseLeave={handleMouseLeave}
                >
                  Bio:
                </strong>
                 
                  <div className='paragraph-wrapper'>
                    <p>
                      {elfBio}
                    </p>
                  </div>
                  
              </li>

              <li>
                <strong
                  onMouseEnter={() => handleMouseEnter("elfSpecie")}
                  onMouseLeave={handleMouseLeave}
                >
                  Specie:
                </strong>
                
                {
                  hoveredMenu === "elfSpecie" &&
                  <div className='paragraph-wrapper'>
                    <p>
                      {elfSpecie}
                    </p>
                  </div>
                  }
              </li>

              <li>
                <strong
                  onMouseEnter={() => handleMouseEnter("elfWeapon")}
                  onMouseLeave={handleMouseLeave}
                >
                  Weapon:
                </strong>

                {
                  hoveredMenu === "elfWeapon" &&
                  <div className='paragraph-wrapper'>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem"}}>
                     {elvesWeapon[indexElf].weapon1} {elvesWeapon[indexElf].weapon2}
                    </div>
                  </div>}
              </li>
            </ul>
          </ContentCharWrapper>
        </Card>
        <BtnLeftDiamantWrapper>
          <button 
            onClick={nextElfCharacter}
            >
            <img 
              onMouseEnter={() => handleHoverActive("leftDiamant")}
              onMouseLeave={handleHoverLeave}
            src={images.blueDiamant} alt="ring" width={32} />
          </button>
        </BtnLeftDiamantWrapper>
      </ContentWrapper>
      </SwiperSlide>
      
     <SwiperSlide>
      <ContentWrapper>
        <BtnRightWrapper>
          <button onClick={prevOrcCharacter}>
            <img src={images.orcFang} alt="ring" width={32} />
          </button>
        </BtnRightWrapper>
        <Card>
          <img
            src={images.ringLang}
            alt="ring"
            width={200}
            className="img-ringlang"
          />
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(71, 71, 71, 0.5)",
            }}
          />
          <ProfileCharWrapper>
            <ImgCharWrapper>
              <img
                src={orcImage}
                alt={orcName}
                style={{
                  opacity: imageOpacityOrc,
                  transition: "all 0.3s ease-in-out",
                }}
              />
            </ImgCharWrapper>
            <h4
            >
              {orcName}
            </h4>
            <p>{orcReview}</p>
            <SocialNet>
              <div>
                <FaFacebook size={28} />
              </div>
              <div>
                <FaLinkedin size={28} />
              </div>
              <div>
                <FaGithub size={28} />
              </div>
            </SocialNet>
          </ProfileCharWrapper>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(71, 71, 71, 0.5)",
            }}
          />
          <ContentCharWrapper>
            <ul>
              <li>
                <strong
                  onMouseEnter={() => handleMouseEnter("orcBio")}
                  onMouseLeave={handleMouseLeave}
                >
                  Bio:
                </strong>
                 
                  <div className='paragraph-wrapper'>
                    <p>
                      {orcBio}
                    </p>
                  </div>
                 
              </li>

              <li>
                <strong
                  onMouseEnter={() => handleMouseEnter("orcSpecie")}
                  onMouseLeave={handleMouseLeave}
                >
                  Specie:
                </strong>
                
                {
                  hoveredMenu === "orcSpecie" &&
                  <div className='paragraph-wrapper'>
                    <p>
                      {orcSpecie}
                    </p>
                  </div>
                  }
              </li>

              <li>
                <strong
                  onMouseEnter={() => handleMouseEnter("orcWeapon")}
                  onMouseLeave={handleMouseLeave}
                >
                  Weapon:
                </strong>

                {
                  hoveredMenu === "orcWeapon" &&
                  <div className='paragraph-wrapper'>
                    <p>
                      {orcWeapon}
                    </p>
                  </div>}
              </li>
            </ul>
          </ContentCharWrapper>
        </Card>
        <BtnLeftWrapper>
          <button onClick={nextOrcCharacter}>
            <img src={images.orcFang} alt="ring" width={32} />
          </button>
        </BtnLeftWrapper>
      </ContentWrapper>
      </SwiperSlide>
      
      </Swiper>
      <ParticulasCanva />
    </Container>
  );
};

export default Reviews;
