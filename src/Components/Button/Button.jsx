import st from "./Button.module.css";

export function Button({ name, link }) {
  return (
    <>
      <button className={st.button}>{name}</button>
    </>
  );
}

export default Button;
