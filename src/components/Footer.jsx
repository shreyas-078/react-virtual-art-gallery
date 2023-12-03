import Header from "./Header";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <Header />
      <p className="font-cormorant text-l px-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum eaque
        consequatur nostrum beatae. Similique, quae consectetur ipsa incidunt,
        cumque neque quod, officia vitae quaerat quasi iste laboriosam. Nemo,
        accusamus minima? Lorem ipsum dolor sit amet consectetur, adipisicing
        elit.
      </p>
    </footer>
  );
}
