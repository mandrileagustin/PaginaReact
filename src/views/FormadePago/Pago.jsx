import { Link } from "react-router-dom";

export default function Pago() {
  return (
    <>
      <section>
        <div className="container py-5">
          <div className="card">
            <div className="card-body">
              <div className="row d-flex justify-content-center pb-5">
                <div className="col-md-7 col-xl-5 mb-4 mb-md-0">
                  <div className="py-4 d-flex flex-row">
                    <h5>
                      <span className="far fa-check-square pe-2"></span>
                      <b>Elige tu metodo de pago</b> |
                    </h5>
                  </div>
                  <h4 className="text-success">$178.00</h4>
                  <h4>Nivel Laser Bosch</h4>
                  <hr />
                  <div className="pt-2">
                    <div className="d-flex pb-2">
                      <div className="ms-auto">
                        <p className="text-secondary">
                          <Link
                            to={"/Tarjets"}
                            className="fas fa-plus-circle text-success pe-1"
                          >
                            Agregar tarjeta
                          </Link>
                        </p>
                      </div>
                    </div>
                    <p>
                      This is an estimate for the portion of your order (not
                      covered by insurance) due today . once insurance finalizes
                      their review refunds and/or balances will reconcile
                      automatically.
                    </p>
                    <form className="pb-3">
                      <div className="d-flex flex-row pb-3">
                        <div className="d-flex align-items-center pe-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radioNoLabel"
                            id="radioNoLabel1"
                            value=""
                            aria-label="..."
                          />
                        </div>
                        <div className="rounded border d-flex w-100 p-3 align-items-center">
                          <p className="mb-0">
                            <i className="fab fa-cc-visa fa-lg text-primary pe-2"></i>
                            Visa Debit Card
                          </p>
                          <div className="ms-auto">************3456</div>
                        </div>
                      </div>

                      <div className="d-flex flex-row">
                        <div className="d-flex align-items-center pe-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radioNoLabel"
                            id="radioNoLabel2"
                            value=""
                            aria-label="..."
                          />
                        </div>
                        <div className="rounded border d-flex w-100 p-3 align-items-center">
                          <p className="mb-0">
                            <i className="fab fa-cc-mastercard fa-lg text-dark pe-2"></i>
                            Mastercard Office
                          </p>
                          <div className="ms-auto">************1038</div>
                        </div>
                      </div>
                    </form>
                    <input
                      type="button"
                      value="Proceed to payment"
                      className="btn btn-outline-success btn-block btn-lg"
                    />
                  </div>
                </div>

                <div className="col-md-5 col-xl-4 offset-xl-1">
                  <div className="py-4 d-flex justify-content-end">
                    <h6>
                      <Link to={"/"} className="text-success">Cancelar y regresar a inicio</Link>
                    </h6>
                  </div>
                  <div className="rounded d-flex flex-column p-2">
                    <div className="p-2 me-3">
                      <h4>Order Recap</h4>
                    </div>

                    <div className="p-2 d-flex">
                      <div className="col-8">
                        Costo de envio{" "}
                        <span className="fa fa-question-circle text-dark"></span>
                      </div>
                      <div className="ms-auto">
                        <b>$00.0</b>
                      </div>
                    </div>
                    <div className="border-top px-2 mx-2"></div>
                    <div className="p-2 d-flex pt-3">
                      <div className="col-8">
                        <b>Total</b>
                      </div>
                      <div className="ms-auto">
                        <b className="text-success">$178.00</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
