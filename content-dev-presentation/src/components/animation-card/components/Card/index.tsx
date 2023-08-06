
import { Link, LinkProps } from "react-router-dom";
import styles from "./styles.module.scss";

interface CardProps {
  src: string | undefined;
  onClick?: () => void;
  url: string  | undefined;
}


export const Card: React.FC<CardProps> = ({ src, url }) => {
  return (
    <>
      <Link className={styles.card} to={url as LinkProps['to']} target="_blank">
        <img className={styles.card__blur} src={src} alt="" />
        <img className={styles.card__img} src={src} alt="" />
      </Link>
    </>
  );
};
