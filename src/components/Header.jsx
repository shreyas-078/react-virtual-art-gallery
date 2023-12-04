import artGalleryLogo from "../assets/images/Logo.png";

export default function Header({ verticalAlign, onImageClick }) {
  let classes = `w-screen flex flex-row gap-4 items-center`;
  if (verticalAlign === "center") {
    classes += " justify-center";
  }
  return (
    <section className={classes}>
      <img
        src={artGalleryLogo}
        alt="Art Gallery Logo"
        className="object-contain w-[75px] hover:cursor-pointer"
        onClick={() => {
          onImageClick("Home");
        }}
      />
      <h1 className="text-4xl p-4 font-cormorant">React Art Gallery</h1>
    </section>
  );
}
