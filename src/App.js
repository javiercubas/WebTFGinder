import './App.css';
import Caracteristicas from './Caracteristicas';
import Header from './Header';
import Inicio from './Inicio';
import Problematica from './Problematica';
import SolutionPropose from './SolutionPropose';

function App() {
  return (
    <div className="App">
      <Header/>
      <Inicio/>
      {/* <Caracteristicas/> */}
      <Problematica/>
      <SolutionPropose/>
    </div>
  );
}

export default App;
