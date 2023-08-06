
import { Card } from "./components/Card";
import { Dock } from "./components/Dock";
import { DockCard } from "./components/DockCard";
import { DockDivider } from "./components/DockDivider";

import styles from "./styles.module.scss";

const GRADIENTS = [
  "./assets/images/portfolioGray.png",
  "./assets/images/linkedinGray.png",
  "./assets/images/github.png",
  "./assets/images/gitlabGray.png",
  "./assets/images/settingsGray.png",
  "./assets/images/figmaGray.png",
];


const ValueAnimation = () => {

  const myUrls = [
    "https://www.yamilwebdeveloper.com/",
    "https://www.linkedin.com/in/yamil-pedroso/",
    "https://github.com/Yamil-Pedroso",
    "https://gitlab.com/Yamirovinci",
    "https://yp-dev-functionalities.netlify.app/",
    "https://yp-ui-design.netlify.app/",
  ];
  
  return (
    <div className={styles.body}>
        <p>👋 Hi guys, feel free to visit my content.</p>
      <div className={styles.dockWrapper}>
          <Dock>
            {GRADIENTS.map((src, index) =>
              src ? (
                <DockCard key={src}>
                  <Card src={src} url={myUrls[index]} />
                </DockCard>
              ) : (
                <DockDivider key={index} />
              )
            )}
          </Dock>
      </div>
    </div>
  );
};

export default ValueAnimation;
