import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../../img/Logo_liga.png";


function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
      <Link to="/">
          <img src={logo} alt="Liga016" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Usuarios">Usuarios</Link>
          </li>
          <li className={styles.item}>
            <Link to="/tabeladejogos">Tabela de Jogos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Classificacao">Classificação</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;