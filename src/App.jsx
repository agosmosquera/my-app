import {React, useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {Categoria} from './components/Categorias/Categoria';
import Form from './components/Form/Form';
import CartView from './components/CartWidget/CartView';
import FinalizarCompra from './components/FinalizarCompra';

function App() {

const [cont, setCont] = useState(0); 

  return (
    
    <BrowserRouter>
       <div className="App row" >
         <NavBar />
          <Routes>
           <Route path='/detalles/:id' element={<ItemDetailContainer/> } />
           <Route path='/' element={<ItemListContainer/>}></Route>
           <Route path='/form' element={<Form/>}></Route>
           <Route path='/categoria/:categoria' element={<Categoria/>}></Route> 
           <Route path='*' element={<h1>Error 404</h1>}></Route>
           <Route path='/finalizarCompra' element={<FinalizarCompra/>}></Route> 
           <Route path='/cart' element={<CartView/>}></Route> 
       </Routes> 
    
     </div>
    </BrowserRouter>
       
   
  );
  
}

export default App;
