import ArtworkCarousel from "./components/ArtworkCarousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <Header verticalAlign="center" />
      <hr />
      <NavBar />
      <hr />
      <h2 className="text-4xl text-center my-2 font-cormorant">Our ArtWork</h2>
      <ArtworkCarousel />
      <hr />
      <Footer className="mt-4" />
    </>
  );
}
