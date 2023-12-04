import Header from "./Header";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className="containter flex flex-col mt-2 gap-2">
      <div className="heading">
        <Header verticalAlign={"center"} />
        <p className="font-cormorant text-xl px-4 text-center">
          React Art Gallery © 2023. All rights reserved.
        </p>
      </div>
      <ul className="font-cormorant flex gap-2 flex-row justify-center text-xl">
        <li>
          <a
            href="https://github.com/shreyas-078"
            target="_blank"
            rel="noreferrer"
          >
            GitHub |
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/shreyas-salankimatt-83588a260/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn |
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/shreyas_078"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
      </ul>
    </footer>
  );
}
