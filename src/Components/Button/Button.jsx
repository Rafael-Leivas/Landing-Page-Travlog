import st from "./Button.module.css";

export function Button({ name }) {
  return (
    <>
      <button className={st.button}>{name}</button>
    </>
  );
}

export default Button;
