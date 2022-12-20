import './App.css';
import Caracteristicas from './Caracteristicas';
import Header from './Header';
import Inicio from './Inicio';
import Problematica from './Problematica';

function App() {
  return (
    <div className="App">
      <Header/>
      <Inicio/>
      {/* <Caracteristicas/> */}
      <Problematica/>
    </div>
  );
}

export default App;
