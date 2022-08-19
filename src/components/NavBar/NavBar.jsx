import { CartWidget } from '../CartWidget/CartWidget';
export const NavBar = (props) =>{
  return(
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Despensa Punto Sur</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Inicio
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Bebidas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Alimentos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Frutas y verturas</a>
        </li>
      
      </ul>
      <CartWidget/>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="text" placeholder="Buscar producto" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
      </form>
       </div>
    
  </div>
</nav>
  )
}
