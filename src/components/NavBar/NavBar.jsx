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
      
    
        </div>
    
   </div>
 </nav>
   )
 }

