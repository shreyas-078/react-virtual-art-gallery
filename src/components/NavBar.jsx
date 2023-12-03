export default function NavBar() {
  return (
    <nav className="m-2">
      <ul className="flex flex-row gap-4 justify-between mx-4 font-cormorant text-xl">
        <li>
          <button className="hover:underline decoration-1">Home</button>
        </li>
        <li>
          <button className="hover:underline decoration-1">About Us</button>
        </li>
        <li>
          <button className="hover:underline decoration-1">Artwork</button>
        </li>
        <li>
          <button className="hover:underline decoration-1">
            Exhibitions Around You
          </button>
        </li>
      </ul>
    </nav>
  );
}
