import { Broadcast } from "@phosphor-icons/react/dist/ssr/Broadcast";
import { GithubLogo } from "@phosphor-icons/react";
import styles from "./Project.module.css";
import AnimatedCursor from "../AnimatedCursor/AnimatedCursor";

interface projectDataProps {
  projectData: {
    title: string;
    year: number;
    category: string;
    description: string;
    repoURL: string;
    deployURL?: string;
    projectImgSrc: string;
  };
}

export function Project({ projectData }: projectDataProps) {
  console.log(projectData);

  return (
    <div className={styles.projectContainer}>
      <div className={styles.imgContainer}>
        <img src={projectData.projectImgSrc} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textContainer}>
          <div>
            <strong className={styles.projectTitle}>
              <AnimatedCursor backLetters={4} speed={50}>
                {projectData.title}
              </AnimatedCursor>
            </strong>
          </div>
          <div className={styles.yearCategoryContainer}>
            <span className={styles.projectYear}>{projectData.year}</span>
            <span className={styles.projectCategory}>
              {projectData.category}
            </span>
          </div>
          <p className={styles.projectDescription}>{projectData.description}</p>
          <div className={styles.projectBtnContainer}>
            <a href={projectData.repoURL} target="_blank">
              <GithubLogo size={30} alt="Logo do github" />
              repo
            </a>
            <a
              href={projectData.deployURL ? projectData.deployURL : "#"}
              className={projectData.deployURL ? "" : styles.deployInnactive}
              target="_blank"
              title={projectData.deployURL ? "" : "deploy não disponível ainda"}
            >
              <Broadcast size={30} alt="ícone representando deploy" />
              {projectData.deployURL ? "deploy" : "breve"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
