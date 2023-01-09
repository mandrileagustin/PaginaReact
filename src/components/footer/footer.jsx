export default function footer() {
  return (
    <div className="bg-light">
      <hr/>
      <div className="d-flex px-3 justify-content-space-evenly d-grid gap-3 ">
        <div className=" d-flex row p-3 justify-content-space-around">
          <h4><i className="bi bi-basket2 ">Pago seguro</i></h4>
          <h5>100% garantizado</h5>
        </div>
        <div className="d-flex row p-3 justify-content-space-around">
          <h4><i className="bi bi-send-check">Envio gratis</i></h4>
          <h5>En pedidos de mas de +50€</h5>
        </div>
        <div className="d-flex row p-3 justify-content-space-around ">
          <h4><i className="bi bi-currency-exchange">2 años de garantias</i></h4>
          <h5>En productos industriales</h5>
        </div>
        <div className="d-flex row p-3 justify-content-space-around">
          <h4><i className="bi bi-check-circle">Ofertas unicas</i></h4>
          <h5>Precios mayoristas</h5>
        </div>
      </div>
      <div className="bg-dark">
        <footer className="w-100 py-4 flex-shrink-0">
          <div className="container py-4">
            <div className="row gy-4 gx-5">
              <div className="col-lg-4 col-md-6">
                <h5 className="h1 text-light">Ferreteria Miraflores</h5>
                <p className="h4 small text-secondary">
                  Estamos aqui para ayudarte en lo que nesecites para mas
                  informacion sobre nuestros beneficios puedes ver los
                  links de ayuda.
                </p>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="text-light mb-3">Atencion al cliente</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <a className="text-warning-emphasis text-decoration-none" href="#">
                      Envios
                    </a>
                  </li>
                  <li>
                    <a className="text-warning-emphasis text-decoration-none" href="#">
                      Devoluciones
                    </a>
                  </li>
                  <li>
                    <a className="text-warning-emphasis text-decoration-none" href="#">
                      Metodos de compra
                    </a>
                  </li>
                  <li>
                    <a className="text-warning-emphasis text-decoration-none" href="#">
                      Ayuda
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6">
                <h5 className="text-light mb-3">Valora nuestra pagina</h5>
                <p className="small text-light">
                  Dejanos saber tu opinion sobre nuestra pagina, buscamos
                  mejorar tu experiencia.
                </p>
                <form action="#">
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Opinion "
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-warning-emphasis"
                      id="button-addon2"
                      type="button"
                    >
                      <i className="bi bi-send"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="text-light mb-3">Nuestras Redes</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <a
                      className="text-warning-emphasis text-decoration-none"
                      href="http://instagram.com"
                    >
                      Instagram
                      <i className="bi bi-instagram"></i></a>
                  </li>
                  <li>
                    <a
                      className="text-warning-emphasis text-decoration-none"
                      href="http://facebook.com"
                    ><i className="bi bi-facebook"></i>
                      acebook
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-warning-emphasis text-decoration-none"
                      href="http://linkedIn.com"
                    >
                      Linked
                      <i className="bi bi-linkedin"></i></a>
                  </li>
                  <li>
                    <a
                      className="text-warning-emphasis text-decoration-none"
                      href="http://youtube.com"
                    ><i className="bi bi-youtube"></i>
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
