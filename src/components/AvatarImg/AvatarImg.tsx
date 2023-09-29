import styles from "./AvatarImg.module.css";

interface AvatarImgProps {
  imgSrc: string;
  alt: string;
}

export function AvatarImg({ imgSrc, alt }: AvatarImgProps) {
  return (
    <div className={styles.imgContainer}>
      <img src={imgSrc} alt={alt} />
    </div>
  );
}
