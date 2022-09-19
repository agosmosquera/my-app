 import { CartWidget } from '../CartWidget/CartWidget';
 import './NavBar.css';
 import { Link } from 'react-router-dom';
 import { CarritoContext } from '../Context/CarritoContext';
 import {useContext} from 'react'
 
 export const NavBar = (props) =>{
  const {cantidadArticulosCarrito} = useContext(CarritoContext);
   return (
 <nav className="navbar navbar-expand-lg navbar-dark bg-primary maxWidthh">
   <div className="container-fluid">
   <Link to='/' className="nav-link navbar-brand">
           Despensa Punto Sur
         </Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon" />
     </button>
     <div className="collapse navbar-collapse" id="navbarColor01">
       <ul className="navbar-nav me-auto">
         <Link to='/' className="nav-link">
         <li className="nav-item">
           Inicio
         </li>
         </Link>
         <Link to='/categoria/bebidas' className="nav-link">
         <li className="nav-item">
           Bebidas
         </li>
         </Link>
         <Link to='/categoria/alimentos' className="nav-link">
         <li className="nav-item">
           Alimentos
         </li>
         </Link>
         <Link to='/categoria/frutasyverduras' className="nav-link">
         <li className="nav-item">
          Frutas y verduras
         </li>
         </Link>
      
      </ul>
      {cantidadArticulosCarrito() > 0 && ( <CartWidget/>) }
      {/* <Link to='/cart' className="nav-link">
         
         <CartWidget/>
         
         </Link> */}
       <form className="d-flex">
         <input className="form-control me-sm-2" type="text" placeholder="Buscar producto" />
         <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
       </form>
        </div>
    
   </div>
 </nav>
   )
 }

// borrador navbar router 

// import React from 'react'
// import { Link } from 'react-router-dom'

// export const NavBar = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     <div className="collapse navbar-collapse" id="navbarColor03">
//       <ul className="navbar-nav me-auto">
//         <li className="nav-item">
//           <Link className="nav-link" to="/"> Inicio </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/"> Productos </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/contacto"> Contacto </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/about"> Nosotros </Link>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
//           <div className="dropdown-menu">
//             <a className="dropdown-item" href="#">Action</a>
//             <a className="dropdown-item" href="#">Another action</a>
//             <a className="dropdown-item" href="#">Something else here</a>
//             <div className="dropdown-divider" />
//             <a className="dropdown-item" href="#">Separated link</a>
//           </div>
//         </li>
//       </ul>
//       <form className="d-flex">
//         <input className="form-control me-sm-2" type="text" placeholder="Search" />
//         <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>

//     </>
//   )
// }
