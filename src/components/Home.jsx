import highLifeImage from "../assets/images/high_life.png";

export default function Home({ onExplore }) {
  return (
    <section className="">
      <h1 className="font-cormorant text-4xl my-4 text-center">
        This is the Home to some of the greatest artwork in the world.
      </h1>
      <div className="w-screen flex flex-row items-center justify-center">
        <img
          src={highLifeImage}
          alt="Featured Artwork"
          className="rounded-md w-[240px] h-[240px] m-4 shadow-border-box-sm mt-4 mb-8 hover:shadow-sm ease-linear duration-300 border-2 border-stone-500"
        />
        <div className="ml-4">
          <p className="font-cormorant h-fit text-4xl">
            &quot;Harmony in Chaos&quot;
          </p>
          <p className="mt-2 font-cormorant text-xl">
            ~Featured Painting~ <br /> Dive into the mesmerizing world of
            &quot;Harmony in Chaos,&quot; a captivating masterpiece that
            seamlessly blends contrasting elements.
            <br /> This artwork invites contemplation, encouraging viewers to
            find unity within the complexity of life.
          </p>
        </div>
      </div>
      <div className="mx-8">
        <p className="font-cormorant text-xl text-center">
          Welcome to React Art Gallery, a digital haven where art comes to life.
          Immerse yourself in a world of creativity, where each stroke of the
          brush tells a unique story. Discover the magic of visual expression
          and embark on a journey through our captivating virtual art gallery.
        </p>
        <p className="font-cormorant text-xl text-center">
          At React Art Gallery, we believe that art has the power to inspire,
          provoke thought, and evoke emotions. Our curated collection features a
          diverse range of artworks from talented artists worldwide. Explore the
          boundless possibilities of artistic expression and join us in
          celebrating the beauty of imagination.
        </p>
        <p>
          <p className="text-center font-cormorant text-xl my-2">
            Stay tuned for our upcoming events and exhibitions, where we bring
            together the most talented and visionary artists working with React.
            Engage with the artists, participate in interactive installations,
            and witness the evolution of art in real-time.
          </p>
        </p>
        <p className="font-cormorant text-xl text-center">
          Ready to embark on a visual adventure? Click the button below to
          explore our virtual art gallery, where each click opens a door to a
          new realm of artistic brilliance. <br />
          <button
            className="p-3 border-2 my-4 rounded-xl border-stone-600 hover:bg-stone-600 hover:text-white ease-in-out duration-300"
            onClick={() => {
              onExplore("Artwork");
            }}
          >
            Explore Artwork
          </button>
        </p>
      </div>
    </section>
  );
}
