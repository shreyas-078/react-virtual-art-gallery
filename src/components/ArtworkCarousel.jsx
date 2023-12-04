// Components
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

// Carousel Imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Data Import
import { artworkDetails } from "../assets/data/artworkDetails";
import { useState } from "react";

export default function ArtworkCarousel() {
  const [index, setIndex] = useState(0);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (oldIndex, newIndex) => {
      setIndex(newIndex);
    },
  };

  return (
    <section className="my-6 mx-48">
      <h2 className="text-4xl text-center my-4 font-cormorant">Our Artwork</h2>
      <Slider {...settings}>
        {artworkDetails.map((artwork, artIndex) => (
          <img
            src={artwork.imageSource}
            alt={artwork.Description}
            key={artwork.Name}
            className={artIndex === index ? "active" : "inactive"}
          />
        ))}
      </Slider>
      <p className="text-center mt-4 font-cormorant text-xl font-bold">
        {artworkDetails[index].Name}
      </p>
      <p className="text-center font-cormorant text-lg">
        {artworkDetails[index].Description}
      </p>
      <p className="text-center font-cormorant text-lg">
        You can find More Artwork At the React Art Gallery!
      </p>
    </section>
  );
}
