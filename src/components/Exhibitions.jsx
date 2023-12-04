export default function Exhibitions() {
  const GMAPS_API_KEY = import.meta.env.VITE_GMAPS_API_KEY;

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-4xl text-center font-cormorant my-4">
        Exhibitions Around You
      </h1>
      <iframe
        src={`https://www.google.com/maps/embed/v1/search?q=Exhibitions+near+me&center=12.971,77.594&zoom=14&key=${GMAPS_API_KEY}`}
        className="w-[1000px] my-4 rounded-md h-[500px]"
      ></iframe>
    </section>
  );
}
