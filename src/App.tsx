import { useEffect, useState } from "react";
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
import { IuserData } from "./types/userInterface";

function App() {
  const [user, setUser] = useState<IuserData | null>(null);

  async function getUserData() {
    try {
      const response = await fetch("../db.json");
      const data = await response.json();

      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className={styles.heroSection} id="hero-section">
          <div className={styles.textContainer}>
            <h1>
              Olá, eu sou {user?.userData.name}, <br />
              {user?.userData.occupation}
            </h1>
            <p>{user?.userData.shortDescription}</p>
            <a href={pdf} download className={styles.curriculumBtn}>
              <FileText size={30} />
              Baixar currículo
            </a>
          </div>
          <div className={styles.imgContainer}>
            <AvatarImg
              imgSrc={imgSrc}
              alt="foto de uma mulher de capuz e óculos"
            />
          </div>
        </section>

        <section className={styles.projectSection} id="projetos-section">
          <h2>Projetos em destaque</h2>

          <div className={styles.projectsContainer}>
            {user?.userData.projects ? (
              user.userData.projects.map((project) => (
                <Project key={project.id} projectData={project} />
              ))
            ) : (
              <span>Nenhum projeto foi encontrado</span>
            )}
          </div>
        </section>

        <section className={styles.contactSection} id="contato-section">
          <h2>Entre em contato</h2>
          <img
            src={emailImg}
            className={styles.contactEmailImg}
            alt="imagem de uma carta simbolizando email"
          />

          <div className={styles.contactBoxContainer}>
            <div className={styles.contactBox}>{user?.userData.email}</div>
            <div className={styles.contactBox} data-iscopy="true">
              Copiar e-mail
            </div>
          </div>
        </section>
      </main>

      <Footer socialMediaLinks={user?.userData.socialMediaLink} />
    </>
  );
}

export default App;
