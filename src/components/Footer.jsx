import Header from "./Header";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <Header />
      <p className="font-cormorant text-xl px-4 text-center">
        React Art Gallery © 2023. All rights reserved.
      </p>
    </footer>
  );
}
