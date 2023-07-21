import React, { useEffect, useState } from "react";

export default function Index() {
  const [actualizaciones, setActualizaciones] = useState(0);
  const [AccTexto, setAccTexto] = useState(0);
  const [texto, setTexto] = useState("");


  useEffect(() => {
    console.log("useEffect");
    const interval = setInterval(async() => {
        console.log("actualizar");
        await setActualizaciones(actualizaciones => actualizaciones + 1);
    }, 3000);
    
    return () => {
        console.log("clearInterval");
        clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setAccTexto(AccTexto => AccTexto + 1);
  }, [texto]);

  return (
    <>
      <div className="container">Este es un ejemplo de UseEffect.</div>
      <div className="container">
        <div className="row">
          <div className="col">
            {/* pequeña descripcion del uso de useEffect */}
            <div className="row">
              <div className="col-12">
                <p>
                  <strong>useEffect</strong> es un hook que nos permite ejecutar
                  efectos secundarios en componentes funcionales.
                </p>
                <p>
                  <strong>useEffect</strong> se ejecuta después de que la
                  primera renderización se haya realizado en el DOM.
                </p>
              </div>
            </div>
            {/* Ejemplo de uso del useeffect escuchando una variable */}
            <div className="row">
              <div className="col-12">
                <p>
                  <strong>useEffect</strong> se ejecuta después de cada
                  renderizado, pero puedes llamarlo condicionalmente para evitar
                  ejecutarlo innecesariamente.
                </p>
                <p>
                  En este ejemplo, pasamos un array vacío ([]), lo que significa
                  que el efecto solo se ejecutará una vez (como
                  componentDidMount en las clases).
                </p>

                <p>
                  Si omitimos el array, el efecto se ejecutaría después de cada
                  renderizado.
                </p>
                <p>
                  Si pasamos un array con elementos dentro, el efecto se
                  ejecutará cuando se monte el componente y cuando alguno de los
                  elementos del array cambie.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-12">
                {/* Label con para actualizar cada 3 segundo */}
                <label className="form-label">Actualiza cada 3 segundos</label>
                {/* contador de actualizaciones */}
                <p>Actualizaciones: {actualizaciones}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {/* Label con para actualizar cada 3 segundo */}
                <label className="form-label">Actualiza cuando cambia el texto</label>
                {/* input para escribir */}
                <input type="text" className="form-control" value={texto} onChange={(e)=>setTexto(e.target.value)} />
                {/* contador de actualizaciones */}
                <p>Actualizaciones: {AccTexto}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
