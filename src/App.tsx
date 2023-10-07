import { useEffect, useRef, useState } from "react";
import { AvatarImg } from "./components/AvatarImg/AvatarImg";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Project } from "./components/Project/Project";
import { FileText } from "@phosphor-icons/react";
import { IuserData } from "./types/userInterface";
import { Alert } from "@mui/material";

import emailImg from "/assets/img/email.svg";
import styles from "./styles/app.module.css";

import curriculumPdf from "/assets/curriculo.pdf"; //Linke seu curriculo aqui
import portfolioProfileImg from "/assets/portfolio-profile-img.jpg"; //Linke sua imagem de perfil aqui

function App() {
  const [user, setUser] = useState<IuserData | null>(null);
  const [isCopy, setIsCopy] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputRef = useRef<any>(null);

  function handleCopyEmail() {
    const emailValue = inputRef.current ? inputRef.current.textContent : "";
    navigator.clipboard.writeText(String(emailValue));
    setIsCopy(true);
  }

  async function getUserData() {
    try {
      const response = await fetch("/db.json");
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
            <a href={curriculumPdf} download className={styles.curriculumBtn}>
              <FileText size={30} />
              Baixar currículo
            </a>
          </div>
          <div className={styles.imgContainer}>
            <AvatarImg
              imgSrc={portfolioProfileImg}
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
            {isCopy && (
              <Alert onClose={() => setIsCopy(false)}>
                Texto copiado com sucesso!
              </Alert>
            )}
            <div className={styles.contactBox} ref={inputRef}>
              {user?.userData.email}
            </div>
            <div
              className={styles.contactBox}
              onClick={handleCopyEmail}
              data-iscopy="true"
            >
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
