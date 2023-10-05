import styles from "./app.module.css";
import pdf from "./assets/curriculo.pdf";
import emailImg from "./assets/email.svg";
const imgSrc =
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

import { AvatarImg } from "./components/AvatarImg/AvatarImg";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Project } from "./components/Project/Project";
import { FileText } from "@phosphor-icons/react";

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
              <FileText size={30} />
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

        <section className={styles.contactSection}>
          <h2>Entre em contato</h2>
          <img
            src={emailImg}
            className={styles.contactEmailImg}
            alt="imagem de uma carta simbolizando email"
          />

          <div className={styles.contactBoxContainer}>
            <div className={styles.contactBox}>email@email.com</div>
            <div className={styles.contactBox} data-iscopy="true">
              Copiar e-mail
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
