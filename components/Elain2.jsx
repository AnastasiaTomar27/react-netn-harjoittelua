const Elain = ({elaimia, title, handleDeelete}) => {
    return (
        <div className="elain-lista">
            <h3>{ title }</h3>
            {elaimia.map((elain) => (
                <div className="elain-preview" key={elain.id}>
                    <h4>{ elain.nimi }: {elain.laji}, {elain.ika}v.</h4>
                    <button onClick={() => {handleDeelete(elain.id)}}>Poista</button>
                </div>
            ))}
        </div>
    );
}

export default Elain;