import { products } from "../const/products";
import { Link } from "react-router-dom";
export default function Card() {
  return (
    <div className="container-fluid ">
      <div className="d-flex  px-4 py-5 row g-3 justify-content-evenly">
        {products.map((productItem, index) => (
          <div
            className="card d-flex col-12 m-3 border-0 shadow-sm p-3 mb-5 bg-body-tertiary rounded"
            style={{ width: "18rem" }}
            key={index}
          >
            <img
              src="src/assets/imagenes/nivel-laser-bosch.webp"
              className="card-img-top object-fit-fill border rounded"
              width="150px"
              alt="..."
            />
            <div className="card-body ">
              <h5 className="card-title">{productItem.nombre}</h5>
              <div className="d-flex">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
              </div>
              <div>
                <i className="bi bi-currency-euro"></i>
                {productItem.precio}
              </div>
              <div>
                <p className="card-text">{productItem.descripcion}</p>
              </div>
            </div>
            <div className="card-buttons d-flex p-1 d-grid gap-3 ">
              <div>
                <Link to={"/product"} className="btn btn-warning">
                  Ver
                </Link>
              </div>
              <div className="d-flex">
                <button className="btn btn-outline-secondary" type="button">
                  {" "}
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
