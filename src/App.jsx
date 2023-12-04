import { useState } from "react";
import ArtworkCarousel from "./components/ArtworkCarousel";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Exhibitions from "./components/Exhibitions";

export default function App() {
  const [screenContent, setScreenContent] = useState("Home");

  function changeScreenContent(content) {
    setScreenContent(content);
  }

  return (
    <>
      <Header verticalAlign="center" onImageClick={changeScreenContent} />
      <hr />
      <NavBar onButtonClick={changeScreenContent} />
      <hr />
      {screenContent == "Home" && <Home onExplore={changeScreenContent} />}
      {screenContent == "About Us" && <About />}
      {screenContent == "Artwork" && <ArtworkCarousel />}
      {screenContent == "Exhibition" && <Exhibitions />}
      <hr />
      <Footer className="mt-4" />
    </>
  );
}
