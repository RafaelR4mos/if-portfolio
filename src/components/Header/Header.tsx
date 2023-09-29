import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav>
        <a href="#">Início</a>
        <a href="#">Projeto</a>
        <a href="#">Contato</a>
      </nav>
    </header>
  );
}
