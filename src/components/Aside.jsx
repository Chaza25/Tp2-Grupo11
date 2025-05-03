export default function Aside() {
  return (
    <div className="col-span-1 px-4 border-2 border-dashed border-red-500">
      <h2 className="py-3 text-center text-white text-xl font-bold">Programación 2</h2>
      <p className="text-orange-400 text-center text-sm">
        Los lenguajes de programación son herramientas que permiten a los
        desarrolladores escobir instrucciones que una computadora puede entender
        y ejecutar. Estos lenguajes están diseñados para crear programas de
        software que pueden realizar una amplia variedad de tareas, desde
        calculos simples hasta operaciones complejas y manejo de datos{" "}
      </p>
      <ol className="list-decimal list-inside text-center text-sm text-white">
        <li>
          Lenguajes de bajo nivel: Están más cerca del lenguaje máquina y
          permiten un control más directo sobre el hardware. Ejemplos incluyen
          el ensamblador y el lenguaje de máquina. Estos lenguajes son muy
          eficientes, pero también más difíciles de aprender y usar.
        </li>
        <li>
          Lenguajes de alto nivel: Estos lenguajes están diseñados para ser más
          fáciles de leer y escribir para los humanos, utilizando una sintaxis
          más cercana al lenguaje natural. Ejemplos incluyen Python, Java y C#.
          Son más abstractos que los lenguajes de bajo nivel, lo que facilita la
          programación, pero a veces pueden ser menos eficientes en términos de
          rendimiento.
        </li>
        <li>
          Lenguajes compilados: Estos lenguajes requieren un proceso de
          compilación, donde el código fuente se traduce a un lenguaje de
          máquina antes de ejecutarse. Ejemplos incluyen C y C++. La compilación
          puede mejorar el rendimiento, pero introduce un paso adicional en el
          desarrollo.
        </li>
        <li>
          Lenguajes interpretados: Estos lenguajes son ejecutados directamente
          por un intérprete, sin necesidad de compilación previa. Ejemplos
          incluyen Python y JavaScript. La interpretación puede hacer que el
          desarrollo sea más ágil, aunque a menudo puede ser menos eficiente en
          términos de velocidad de ejecución.
        </li>
      </ol>
    </div>
  );
}
