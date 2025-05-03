import { LENGUAJES } from "../data/lenguajes";

export default function Article() {

  return (
    <div className="col-span-3 grid grid-cols-3 gap-4 h-fit">
      {LENGUAJES.map((lenguaje, index) => (
        <div
          key={index}
          className="col-span-1 w-full max-w-full rounded shadow-md hover:shadow-xl duration-200 shadow-black overflow-clip"
        >
          <img src={lenguaje.image} alt="" className="h-[80%] w-full" />
          <p className="w-full text-xl font-extrabold tracking-widest h-full pt-4 bg-orange-500 text-center">
            {lenguaje.name}
          </p>
        </div>
      ))}
    </div>
  );
}
