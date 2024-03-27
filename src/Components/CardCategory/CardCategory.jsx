import st from "./CardCategory.module.css";

export function CardCategory({image, title, content}) {
  return (
    <>
      <div className={st.card}>
        <img src={image} alt="" />
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}
