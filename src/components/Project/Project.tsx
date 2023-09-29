import styles from "./Project.module.css";

interface projectDataProps {
  projectData: {
    title: string;
    category: string;
    description: string;
    repoLink: string;
    deployLink?: string;
    imgURL: string;
    date: string;
  };
}

export function Project({ projectData }: projectDataProps) {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.imgContainer}>
        <img src={projectData.imgURL} />
      </div>
      <div className={styles.textContainer}>
        <strong>{projectData.title}</strong>
      </div>
    </div>
  );
}
