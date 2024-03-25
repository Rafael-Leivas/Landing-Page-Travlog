import { Banner } from '../../Components/Banner-Principal/Banner';
import { Header } from '../../Components/Header/Header';

export function Home() {
  return(
    <>
      <div className="App">
      <Header />
      <Banner />
    </div>
    </>
  )
}