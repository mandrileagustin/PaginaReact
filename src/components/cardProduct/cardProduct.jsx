export default function CradProduct()   {
    return(
        <>
      <div className="d-flex align-items-center mb-5 mt-5 p-5">
        <div className="flex-shrink-0">
          <img
            src="src/assets/imagenes/nivel-laser-bosch.webp"
            alt="..."
          />

        </div>
        <div className="flex-grow-1 ms-3">
        <p className="fs-1 fw-bold text-center">Nivel Laser Bosch</p>
        <p className="fs-3 text-center"> Nivel laser de nivel profesional, para empresas constructoras con alta demanda de detalles.</p>
        <p className="fs-1 fw-bold ">178,00<i className="bi bi-currency-euro"></i></p>
        <div className="d-grid gap-2 p-3">
        <a className="btn btn-outline-danger btn-lg">Añadir al carro</a>
        </div>
        </div>
      </div>
    </>
    )
}