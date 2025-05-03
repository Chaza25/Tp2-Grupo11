import { NOSOTROS_ALUMNOS } from "../data/nosotros";

export default function Nosotros() {

  return (
    <div className="flex-1 text-white bg-black">
      <h1 className="text-center text-3xl font-semibold">Nosotros</h1>
      <div className="grid grid-cols-4 gap-4 py-4 max-w-7xl mx-auto">
        {NOSOTROS_ALUMNOS.map((alumno, index) => (
          <div key={index} className="group col-span-2 flex flex-col items-center justify-center overflow-clip select-none">
            <img
              src={alumno.image}
              alt={`Foto de ${alumno.name}`}
              className="aspect-square w-96 mask-radial-at-center mask-radial-from-30% group-hover:mask-radial-from-50% mask-radial-to-70% overflow-clip duration-200"
            />
            <div className="group-hover:-mt-8 group-hover:pb-8 mt-0 tracking-widest duration-200">
              <h4 className="text-center text-2xl font-bold">{alumno.name}</h4>
              <p className="text-center text-sm">Estudiante TUP en UTN-FRT</p>
              <a
                href={alumno.link}
                target="_blank"
                className="flex w-fit mx-auto items-center justify-center hover:scale-110 duration-200"
              >
                <svg
                  width="3em"
                  height="3em"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                    transform="scale(64)"
                    fill="#ffff"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

