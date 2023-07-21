export default function hooks() {
  return (
    <>
      <div className="container">
        <div className="h3 row">Hooks</div>
        <div className="row">
          <div className="col-12 col-md-6 col-sm-12 col-xl-4 p-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">useState</h5>
                <p className="card-text">
                  useState es un Hook que te permite añadir el estado de React a
                  un componente de función.
                </p>
                <a href="/hooks/useState" className="btn btn-primary">
                  Ver más
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-sm-12 col-xl-4 p-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">useEffect</h5>
                <p className="card-text">
                  useEffect es un Hook que permite realizar efectos secundarios
                </p>
                <a href="/hooks/useEffect" className="btn btn-primary">
                  Ver más
                </a>
              </div>
            </div>
          </div>
          {/*UseContext*/}
          <div className="col-12 col-md-6 col-sm-12 col-xl-4 p-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">useContext</h5>
                <p className="card-text">
                  useContext es un Hook que permite acceder a los datos de un
                  contexto
                </p>
                <a href="/hooks/useContext" className="btn btn-primary">
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
