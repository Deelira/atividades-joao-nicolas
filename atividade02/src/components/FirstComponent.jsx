import Calculadora from "./Calculadora";
import SecondComponent from "./SecondComponent";
import "./Apresentacao";
import Apresentacao from "./Apresentacao";

function HelloWorld() {

    const nome = "Alisson";

    return (
        <div>
            <Apresentacao />
            <br />
            <SecondComponent />
            <br />
            <Calculadora />            
        </div>
    );
}

export default HelloWorld;