import { LenguajesTabla } from "../data/lenguajes"

const LangTable = () => {
    return(
        <div className="w-[80%] mx-auto col-span-4">
            <div className="grid grid-cols-12 bg-blue-200">
                <div className="col-span-1">Id</div>
                <div className="col-span-2">Lenguaje</div>
                <div className="col-span-2">Tipo</div>
                <div className="col-span-7">Descripcion</div>
            </div>
            {LenguajesTabla.map((lenguaje) =>
            
            <div key={lenguaje.ID} className="grid grid-cols-12 bg-amber-500 hover:bg-amber-600 duration-200">
                <div className="col-span-1 border border-blue-200 px-1"> 
                    {lenguaje.ID}
                </div>
                <div className="col-span-2 border border-blue-200 px-1">
                    {lenguaje.Lenguaje}
                </div>
                <div className="col-span-2 border border-blue-200 px-1">
                    {lenguaje.Tipo}
                </div>
                <div className="col-span-7 border border-blue-200 px-1">
                    {lenguaje.Descripción}
                </div>


            </div>

            )}
        </div>
    )
}

export default LangTable