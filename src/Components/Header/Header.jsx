import logo from "../../Assets/svg/Logo.svg";
import Button from "../Button/Button";
import { Item } from "../Item/Item";
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
            <Item name="Home" />
            <Item name="Discover" />
            <Item name="Special Deals" />
            <Item name="Contact" />
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
