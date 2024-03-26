import { Banner } from "../../Components/Banner-Principal/Banner";
import { Header } from "../../Components/Header/Header";
import { Parceiro } from "../../Components/Parceiro/Parceiro";
import st from "./Home.module.css";

import booking from "../../Assets/png/booking.png";
import Expedia from "../../Assets/png/Expedia.png";
import RBITZ from "../../Assets/png/RBITZ.png";
import airbnb from "../../Assets/png/airbnb.png";
import tripadvisor from "../../Assets/png/tripadvisor.png";

export function Home() {
  return (
    <>
      <div className="App">
        <Header />
        <Banner />

        <div className={st.parceiros}>
          <Parceiro image={tripadvisor} />
          <Parceiro image={Expedia} />
          <Parceiro image={booking} />
          <Parceiro image={airbnb} />
          <Parceiro image={RBITZ} />
        </div>
      </div>
    </>
  );
}
