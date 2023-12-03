import artGalleryLogo from "../assets/images/Logo.png";

export default function Header() {
  return (
    <section
      className={`w-screen flex flex-row gap-4 items-center justify-center`}
    >
      <img
        src={artGalleryLogo}
        alt="Art Gallery Logo"
        className="object-contain w-[75px] hover:cursor-pointer"
      />
      <h1 className="text-4xl p-4 font-cormorant">React Art Gallery</h1>
    </section>
  );
}
