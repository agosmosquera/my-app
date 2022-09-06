import {React, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';



function App() {

const [cont, setCont] = useState(0); 
 

  return (
    
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/detalles/:id' element={<ItemDetailContainer/> } />
          <Route path='/' element={<ItemListContainer  />}></Route>
          <Route path='/productos' element={<ItemListContainer  />}></Route>
          <Route path='*' element={<h1>Error 404</h1>}></Route>
      </Routes>
     </div>
     </BrowserRouter>
       
   
  );
  
}

export default App;
