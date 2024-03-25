import maleta from "../../Assets/svg/Maleta.svg";
import play from "../../Assets/svg/Button-Play.svg";
import image from "../../Assets/png/peoples-and-world.png";

import st from "./Banner.module.css";
import Button from "../Button/Button";

export function Banner() {
  return (
    <>
      <div className={st.conteudo}>
        <div className={st.conteudo_left}>
          <div className={st.explore}>
            <p>Explore the world!</p>
            <img src={maleta} alt="" />
          </div>
          <h1 className={st.title}>
            Travel <span> top destination </span> of the world
          </h1>
          <p className={st.text}>
            We always make our customer happy by providing as many choices as
            possible{" "}
          </p>
          <div className={st.buttons}>
            <Button name={"Get started"} />
            <button className={st.play}>
              <span>
                <img src={play} alt="" /> Watch demo
              </span>
            </button>
          </div>
        </div>
        <img className={st.image_right} src={image} alt="" />
      </div>
    </>
  );
}
