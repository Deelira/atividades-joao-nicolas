function Soma() {
    
    const num1 = 10;
    const num2 = 5;

    const soma = num1 + num2;

    return <div>
        <h2>Soma</h2>
        <p>{num1} + {num2} = {soma}</p>
    </div>
}

export default Soma;