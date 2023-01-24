import { useState } from "react";
import Registrer from "../Registrer/Registrer";
import { useAuthContext } from "../../Contexts/AuthContext/AuthContext";

export default function login() {
  const { login } = useAuthContext();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  function handleInputLogin(e) {
    const newUserData = {
      ...userData,
      [e.target.name]: e.target.value,
    };
    console.log(userData);
    setUserData(newUserData);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <form role="form" onSubmit={(e) => login(e, userData)}>
            <fieldset>
              <div className="d-grid gap-3">
                <p className="text-uppercase">
                  {" "}
                  INICIAR SESIÓN CON MIS DATOS:{" "}
                </p>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="emailLogin"
                    value={userData.email}
                    onChange={handleInputLogin}
                    className="form-control input-lg"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    id="passwordLogin"
                    value={userData.password}
                    onChange={handleInputLogin}
                    className="form-control input-lg"
                    placeholder="Password"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-outline-success"
                    value="Sign In"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
