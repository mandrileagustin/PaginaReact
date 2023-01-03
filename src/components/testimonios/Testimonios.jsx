export default function Testimonios() {
  return (
    <div className="container fluid d-flex">
      <div>
        <h4>Testimonio de clientes</h4>
        <h6> Consigue ahora los mejores productos de Ferreteria Miraflores</h6>
        <p>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseWidthExample"
            aria-expanded="false"
            aria-controls="collapseWidthExample"
          >
            Ver todos
          </button>
        </p>
      </div>
      <div className="border border-2 rounded">
        <div className="container-fluid">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          quibusdam ea molestiae officia non, voluptas deleniti beatae amet unde
          a, vero assumenda eos incidunt deserunt, quo nesciunt. Suscipit, dicta
          cupiditate?
        </p>
        <h6>Edgardo Mandrile</h6>
        </div>     
      </div>
    </div>
  );
}
