import st from "./Item.module.css";

export function Item({name, link}) {
  return(
    <>
      <li>
        <a className={st.link_a} href="{link}">{name}</a>
      </li>
    </>
  )
}