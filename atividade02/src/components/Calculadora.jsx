import Divisao from "./Divisao";
import Multiplicacao from "./Multiplicacao";
import Soma from "./Soma";
import Subtracao from "./Subtração";

function Calculadora() {

    return <div>
        <h2>Calculadora</h2>
        <br />
        <Soma />
        <br />
        <Subtracao />
        <br />
        <Multiplicacao />
        <br />
        <Divisao />
    </div>
}

export default Calculadora;