import {React, useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {Categoria} from './components/Categorias/Categoria';
import Form from './components/Form/Form';
import CartView from './components/CartWidget/CartView';
import { CarritoProvider } from './components/Context/CarritoContext';


function App() {

const [cont, setCont] = useState(0); 

  return (
    <CarritoProvider>
    <BrowserRouter>
       <div className="App row max" >
         <NavBar />
          <Routes>
           <Route path='/detalles/:id' element={<ItemDetailContainer/> } />
           <Route path='/' element={<ItemListContainer/>}></Route>
           <Route path='/form' element={<Form/>}></Route>
           <Route path='/categoria/:categoria' element={<ItemListContainer/>}></Route> 
           <Route path='*' element={<h1>Error 404</h1>}></Route>
           <Route path='/finalizarCompra' element={<Form/>}></Route> 
           <Route path='/cart' element={<CartView/>}></Route> 
       </Routes> 
    
     </div>
    </BrowserRouter>
    </CarritoProvider>
       
   
  );
  
}

export default App;
