function Multiplicacao() {
        
    const num1 = 10;
    const num2 = 5;

    const multiplicacao = num1 * num2;

    return <div>
        <h2>Multiplicação</h2>
        <p>{num1} * {num2} = {multiplicacao}</p>
    </div>
}

export default Multiplicacao;