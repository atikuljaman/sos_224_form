import "./App.css";
import FormTwo from "./components/Form/FormTwo";
import Nav from "./components/Nav/Nav";

import bannerImg_1 from "./assets/banner-3.png";
import bannerImg_2 from "./assets/banner-4.png";
import waveBg from "./assets/wave-bg.svg";

function App() {
  return (
    <>
      <Nav />
      <FormTwo />

      <img src={bannerImg_1} alt="" className="banner-img-1" />
      <img src={bannerImg_2} alt="" className="banner-img-2" />
      <img src={waveBg} alt="" className="wave-bg" />
    </>
  );
}

export default App;
