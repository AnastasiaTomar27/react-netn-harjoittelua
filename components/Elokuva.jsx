const Elokuva = ({elokuvia, title}) => {
    return (
        <div className="elokuva-lista">
            <h3>{ title }</h3>
            {elokuvia.map((elokuva) => (
                <div className="elokuva-preview" key={elokuva.id}>
                    <h4>{ elokuva.nimi }</h4>
                    <p>{elokuva.kesto}</p>
                </div>
            ))}
        </div>
    );
}

export default Elokuva;