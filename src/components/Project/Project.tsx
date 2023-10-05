import { Broadcast } from "@phosphor-icons/react/dist/ssr/Broadcast";
import styles from "./Project.module.css";
import { GithubLogo } from "@phosphor-icons/react";

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
        <div className={styles.textContainer}>
          <div>
            <strong className={styles.projectTitle}>{projectData.title}</strong>
          </div>
          <div className={styles.yearCategoryContainer}>
            <span className={styles.projectYear}>2020</span>
            <span className={styles.projectCategory}>Dashboard</span>
          </div>
          <p className={styles.projectDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem laudantium, magni sapiente distinctio incidunt
            voluptates Exercitationem laudantium, magni sapiente distinctio
            incidunt voluptates.
          </p>
          <div className={styles.projectBtnContainer}>
            <a href={projectData.repoLink} target="_blank">
              <GithubLogo size={30} alt="Logo do github" />
              repo
            </a>
            <a
              href={projectData.deployLink ? projectData.deployLink : "#"}
              className={projectData.deployLink ? "" : styles.deployInnactive}
              target="_blank"
              title={
                projectData.deployLink ? "" : "deploy não disponível ainda"
              }
            >
              <Broadcast size={30} alt="ícone representando deploy" />
              {projectData.deployLink ? "deploy" : "breve"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
