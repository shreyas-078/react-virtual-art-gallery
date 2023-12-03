import { useState } from "react";
import ArtworkCarousel from "./components/ArtworkCarousel";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";

export default function App() {
  const [screenContent, setScreenContent] = useState("Home");

  function changeScreenContent(content) {
    setScreenContent(content);
  }

  return (
    <>
      <Header verticalAlign="center" />
      <hr />
      <NavBar onButtonClick={changeScreenContent} />
      <hr />
      {screenContent == "Home" && <Home onExplore={changeScreenContent} />}
      {screenContent == "About Us" && <About />}
      {screenContent == "Artwork" && <ArtworkCarousel />}
      <hr />
      <Footer className="mt-4" />
    </>
  );
}
