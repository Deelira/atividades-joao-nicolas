function Apresentacao() {

    let lista = [
        "Nome: Alisson",
        "Idade: 20",
        "Hobby: Dormir",
    ]

    return <div>
        <h2>Apresentação</h2>
        <ul>
            {lista.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
}

export default Apresentacao;