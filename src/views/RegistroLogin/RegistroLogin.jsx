import Login from "../../components/Login";
import Registrer from "../../components/Registrer/Registrer";

export default function RegistroLogin() {
  return (
    <div className="container flex-column mb-3">
      <h3>Registrate o Inicia sesion</h3>
      <Login />
      <Registrer />
    </div>
  );
}
