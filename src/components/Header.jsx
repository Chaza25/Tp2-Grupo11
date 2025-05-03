import Nav from "./Nav";

export default function Header() {
  return (
    <div className="flex flex-col justify-between h-32 text-white w-full bg-[url(https://loopgk.com/wp-content/uploads/2021/02/lenguaje-min.jpg)]">
      <div className="flex flex-col justify-center items-center h-full gap-3 font-bold">
        <h1>Trabajo Práctico N°2</h1>
        <h2>Comisión 2 - Grupo 11</h2>
      </div>
      <Nav />
    </div>
  );
}
