import {React, useState} from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"

function App() {
  function saludar() {
    console.log("Buenas noches")
  };

const [cont, setCont] = useState(0); 
 

  return (
    <div className="App">
    <NavBar />
    <ItemListContainer title="Este es mi Ecommerce"  />
    {/* <p>
      Contador: {cont}
    </p>
    <button className='btn btn-primary' onClick={() => setCont(cont + 1)}>
       + 
    </button>
    <button className='btn btn-secondary' onClick={() => setCont(cont - 1)}>
      -
    </button> */}
    </div>
  );
  
}

export default App;
