import { AvatarImg } from "./components/AvatarImg/AvatarImg";
import { Header } from "./components/Header/Header";

import styles from "./app.module.css";
import pdf from "./assets/curriculo.pdf";
import { Project } from "./components/Project/Project";
const imgSrc =
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

function App() {
  const projectData = {
    title: "Titulo projeto",
    category: "lalala",
    description:
      "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    repoLink: "https://github.com",
    deployLink: "https://umdeplpoy.com",
    imgURL: "/project-img.png",
    date: "01/01/2000",
  };

  const projectData2 = {
    title: "Titulo projeto",
    category: "lalala",
    description:
      "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    repoLink: "https://github.com",
    deployLink: "",
    imgURL: "/project-img.png",
    date: "01/01/2000",
  };

  return (
    <>
      <Header />
      <main>
        <section className={styles.heroSection}>
          <div className={styles.textContainer}>
            <h1>
              Olá, eu sou Fulana, <br />
              Front-end developer
            </h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <a href={pdf} download className={styles.curriculumBtn}>
              Baixar currículo
            </a>
          </div>
          <div className={styles.imgContainer}>
            <AvatarImg imgSrc={imgSrc} alt="foto de um homem branco" />
          </div>
        </section>

        <section>
          <h2>Projetos em destaque</h2>

          <div className={styles.projectsContainer}>
            <Project projectData={projectData} />
            <Project projectData={projectData2} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
