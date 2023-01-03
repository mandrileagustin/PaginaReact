
export default function List({list, onClick}) {

    function handleClick(id)  {

        const newList = list.filter( item => item.id !== id)
        onClick(newList);
    } 
    return(
        <div>
      <ul className="list-group ">
        {list.map((items, id) => (
          <div key={id}>
            <li className="list-group-item">
              {items.title}
              <button className="btn btn-outline-dark " type="button" onClick={() =>handleClick(items.id)}>
                X
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
    )
}