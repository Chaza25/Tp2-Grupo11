export default function Nav() {
  return (
    <div className=" flex gap-4 bg-blue-200 px-4 py-1 font-semibold text-black">
      <a className="relative group hover:text-blue-900 flex items-center justify-center" href="/">
        <span className="absolute inset-y-0 w-0 border-b border-black hover:border-b-black group-hover:w-full duration-200 mx-auto"></span>
        Home
      </a>
      <a
        className="relative group hover:text-blue-900 flex items-center justify-center"
        href="/nosotros"
      >
        <span className="absolute inset-y-0 w-0 border-b border-black hover:border-b-black group-hover:w-full duration-200 mx-auto"></span>
        Acerca de nosotros
      </a>
      <a
        className="relative group hover:text-blue-900 flex items-center justify-center"
        href="https://frt.utn.edu.ar/"
        target="_blank"
      >
        <span className="absolute inset-y-0 w-0 border-b border-black hover:border-b-black group-hover:w-full duration-200 mx-auto"></span>
        FRT UTN
      </a>
    </div>
  );
}
