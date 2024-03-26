import st from "./Parceiro.module.css";

export function Parceiro({ image }) {
  return (
    <>
      <img className={st.image} src={image} alt="" />
    </>
  );
}
