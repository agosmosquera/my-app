import './App.css';
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListContainer title="Este es mi Ecommerce"  />
    </div>
  );
  
}

export default App;
