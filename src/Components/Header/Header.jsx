import logo from "../../Assets/svg/Logo.svg";
import Button from '../Button/Button';
import st from "./Header.module.css";

export function Header() {
  return (
    <>
      <header>
        <div className={st.logo}>
          <img src={logo} alt="" />
          <p>Travlog</p>
        </div>

        <div className={st.itens}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Special Deals</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className={st.buttons}>
          <button className={st.logIn}>Log In</button>
          <Button name={"Sign Up"} />
        </div>
      </header>
    </>
  );
}
