export default function login() {
  return (
    <div className="container-fluid">
      <div className="container">
        <h2 className="text-center" id="title">
          Registrate con tus datos o Inicia sesión
        </h2>
        <hr />
        <div className="row">
          <div className="col-md-5">
            <form role="form" method="post" action="register.php">
              <fieldset>
                <div className="d-grid gap-3">
                <p className="text-uppercase pull-center"> REGISTRAR UNA NUEVA CUENTA:</p>
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control input-lg"
                    placeholder="Nombre"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="apellido"
                    name="apellido"
                    id="apellido"
                    className="form-control input-lg"
                    placeholder="Apellido"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control input-lg"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control input-lg"
                    placeholder="Password"
                  />
                </div>
                
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" />
                    Clica aqui para aceptar nuestros terminos de privacidad y politica
                  </label>
                </div>
                <div>
                  <input
                    type="submit"
                    className="btn btn-lg btn-outline-success"
                    value="Register"
                  />
                </div>
                </div>
              </fieldset>
            </form>
          </div>

          <div className="col-md-2">
            <></>
          </div>

          <div className="col-md-5">
            <form role="form">
              <fieldset>
              <div className="d-grid gap-3">
                <p className="text-uppercase"> INICIAR SESIÓN CON MIS DATOS: </p>

                <div className="form-group">
                  <input
                    type="email"
                    name="username"
                    id="username1"
                    className="form-control input-lg"
                    placeholder="username"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    id="password3"
                    className="form-control input-lg"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <input type="submit" className="btn btn-outline-success" value="Sign In" />
                </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
     
    </div>
  );
}
