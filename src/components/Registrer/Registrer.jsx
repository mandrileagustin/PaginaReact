import { useAuthContext } from "../../Contexts/AuthContext/AuthContext";
import { useState } from "react";

export default function Registrer() {
  const { registrer } = useAuthContext();
  const [fullData, setFullData] = useState({
    email: "",
    apellido: "",
    nombre: "",
    password: "",
  });

  function handleInput(e) {
    const newRegistrer = {
      ...fullData,
      [e.target.name]: e.target.value,
    };
    console.log(newRegistrer);
    setFullData(newRegistrer);
  }
  return (
    <div className="container">
      <div className="row">
    <div className="col-md-5">
      <form role="form" method="post" onSubmit={(e) => registrer(e, fullData)}>
        <fieldset>
          <div className="d-grid gap-3">
            <p className="text-uppercase pull-center">
              {" "}
              REGISTRAR UNA NUEVA CUENTA:
            </p>
            <div className="form-group">
              <input
                type="text"
                name="nombre"
                id="username"
                className="form-control input-lg"
                placeholder="Nombre"
                value={fullData.nombre}
                onChange={handleInput}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="apellido"
                name="apellido"
                id="apellido"
                className="form-control input-lg"
                placeholder="Apellido"
                value={fullData.apellido}
                onChange={handleInput}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control input-lg"
                placeholder="Email Address"
                value={fullData.email}
                onChange={handleInput}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                className="form-control input-lg"
                placeholder="Password"
                value={fullData.password}
                onChange={handleInput}
                required
              />
            </div>

            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" />
                Clica aqui para aceptar nuestros terminos de privacidad y
                politica
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
    </div>
    </div>
  );
}
