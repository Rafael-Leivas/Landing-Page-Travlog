import { Banner } from "../../Components/Banner-Principal/Banner";
import { Header } from "../../Components/Header/Header";
import { Parceiro } from "../../Components/Parceiro/Parceiro";
import { CardCategory } from "../../Components/CardCategory/CardCategory";
import st from "./Home.module.css";

import booking from "../../Assets/png/booking.png";
import Expedia from "../../Assets/png/Expedia.png";
import RBITZ from "../../Assets/png/RBITZ.png";
import airbnb from "../../Assets/png/airbnb.png";
import tripadvisor from "../../Assets/png/tripadvisor.png";
import bookIcon from "../../Assets/png/booking1.png";
import destinationIcon from "../../Assets/png/destination1.png";
import cloudIcon from "../../Assets/png/cloudy1.png";

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

        <div className={st.firstCards}>
          <div className={st.contentCategories}>
            <p>SERVICES</p>
            <h2>Our top value categories for you</h2>
          </div>
          <div className={st.cardsCategories}>
            <ul>
            <CardCategory
              image={bookIcon}
              title={"Best Tour Guide"}
              content={
                "What looked like a small patch of purple grass, above five feet."
              }
            />
            <CardCategory
              image={destinationIcon}
              title={"Best Tour Guide"}
              content={
                "What looked like a small patch of purple grass, above five feet."
              }
            />
            <CardCategory
              image={cloudIcon}
              title={"Best Tour Guide"}
              content={
                "What looked like a small patch of purple grass, above five feet."
              }
            />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
