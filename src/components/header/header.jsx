import { Link } from "react-router-dom";
import { homeMenu } from "../const/homemenu";
import { homeMenuDos } from "../const/homeMenuDos";
export default function header() {
  return (
    <div>
      <div className="d-flex  px-5 py-2">
        <div className="d-flex ">
          <img src="src/assets/imagenes/logo.png" width="40px d-flex " />
          <h3>Ferreteria Miraflores</h3>
        </div>
        <div className="flex-fill px-3 row">
          <form className="d-flex  " role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link to="/carrito" className="text-decoration-none">
              <button
                type="button"
                className="btn btn-outline-danger d-flex d-grid gap-2"
              >
                <i className="bi bi-basket2"></i>Cart
              </button>
            </Link>
          </form>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid d-flex px-4 ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbar navbar-dark bg-dark"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              {homeMenu.map((menuItem, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to={menuItem.path}
                  >
                    {menuItem.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex-end">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {homeMenuDos.map((menuItemdos, index) => (
                  <li className="nav-item" key={index}>
                    <Link
                      className="nav-link active text-white"
                      aria-current="page"
                      to={menuItemdos.path}
                    >
                      {menuItemdos.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
