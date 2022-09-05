import {React, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"
import Dolar from './components/ApiDolar/Dolar';
import Home from './components/Home/Home';
import Contacto from './components/Contacto/Contacto';
import About from './components/About/About';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

const [cont, setCont] = useState(0); 
 

  return (
    <div className="App">
    <NavBar />
    <ItemListContainer  />
    <ItemDetailContainer/>

    {/* <Dolar /> */}

  {/* aca comienza el borrador de routing */}

    {/* <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<h1>Error 404</h1>}></Route>
      </Routes>
    </BrowserRouter> */}
       
    </div>
  );
  
}

export default App;
