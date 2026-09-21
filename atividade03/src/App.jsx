import './App.css';
import PrimeiraSessao from './components/hero';
import SegundaSessao from './components/nav';
import TerceiraSessao from './components/body';

function App() {
  return (
    <div className="container-principal">
      <PrimeiraSessao />
      <SegundaSessao />
      <TerceiraSessao />
    </div>
  );
}

export default App;