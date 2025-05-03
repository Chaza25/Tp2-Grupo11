import Article from "./Article";
import Aside from "./Aside";
import LangTable from "./Lang-Table";

export default function MainHome() {
  return (
    <div
      className="w-full grid grid-cols-4 gap-4 bg-[#337ac1] py-5 px-2"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23622abd' fill-opacity='0.3'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <h2 className="col-span-4 text-center font-extrabold text-2xl underline">
        Lenguajes de Programacion 2024
      </h2>
      <Aside />
      <Article />
      <LangTable />
    </div>
  );
}
