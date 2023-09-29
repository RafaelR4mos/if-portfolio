import { AvatarImg } from "./components/AvatarImg/AvatarImg";
import { Header } from "./components/Header/Header";

import styles from "./app.module.css";
import pdf from "./assets/curriculo.pdf";
const imgSrc =
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

function App() {
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
        </section>
      </main>
    </>
  );
}

export default App;
