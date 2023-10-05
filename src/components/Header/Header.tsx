import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav>
        <a href="#hero-section">Início</a>
        <a href="#projetos-section">Projetos</a>
        <a href="#contato-section">Contato</a>
      </nav>
    </header>
  );
}
