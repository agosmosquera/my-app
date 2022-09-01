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
    
    
    </div>
  );
  
}

export default App;
