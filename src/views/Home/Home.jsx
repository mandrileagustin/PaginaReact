import Banner from "../components";
import Card from "../../components/Cards";
import SeccionOfertas from "../../components/seccion/seccion-ofertas";
export default function Login() {
  return (
    <div className="d-grid gap-3">
      <div>
        <Banner />
      </div>
      <div>
        <SeccionOfertas />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}
