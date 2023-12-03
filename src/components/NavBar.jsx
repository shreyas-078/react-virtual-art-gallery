export default function NavBar({ onButtonClick }) {
  return (
    <nav className="m-2">
      <ul className="flex flex-row gap-4 justify-between mx-4 font-cormorant text-xl">
        <li>
          <button
            className="hover:underline decoration-1"
            onClick={() => {
              onButtonClick("Home");
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="hover:underline decoration-1"
            onClick={() => {
              onButtonClick("About Us");
            }}
          >
            About Us
          </button>
        </li>
        <li>
          <button
            className="hover:underline decoration-1"
            onClick={() => {
              onButtonClick("Artwork");
            }}
          >
            Artwork
          </button>
        </li>
        <li>
          <button
            className="hover:underline decoration-1"
            onClick={() => {
              onButtonClick("Exhibition");
            }}
          >
            Exhibitions Around You
          </button>
        </li>
      </ul>
    </nav>
  );
}
