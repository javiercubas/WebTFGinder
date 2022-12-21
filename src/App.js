import './App.css';
import Beneficts from './Beneficts';
import Caracteristicas from './Caracteristicas';
import Header from './Header';
import Inicio from './Inicio';
import MiTFG from './MiTFG';
import PreguntasFrecuentes from './PreguntasFrecuentes';
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
      <Beneficts/>
      <MiTFG/>
      <PreguntasFrecuentes/>
    </div>
  );
}

export default App;
