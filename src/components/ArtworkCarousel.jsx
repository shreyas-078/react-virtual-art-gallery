// Components
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

// Carousel Imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Data Import
import { artworkDetails } from "../assets/data/artworkDetails";

export default function ArtworkCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section className="my-8 mx-10">
      <Slider {...settings}>
        {artworkDetails.map((artwork) => (
          <img
            key={artwork.Name}
            src={artwork.imageSource}
            alt={artwork.Description}
            className="w-[480px] h-[480px] border-[2px] border-stone-600 rounded-md"
          />
        ))}
      </Slider>
      <p className="text-center mt-4 font-cormorant text-xl font-bold">Title</p>
      <p className="text-center font-cormorant text-lg">Description</p>
    </section>
  );
}
