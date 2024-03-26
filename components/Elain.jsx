const Elain = ({elaimia, title}) => {
    return (
        <div className="elain-lista">
            <h3>{ title }</h3>
            {elaimia.map((elain) => (
                <div className="elain-preview" key={elain.id}>
                    <h4>{ elain.nimi }: {elain.laji}, {elain.ika}v.</h4>
                </div>
            ))}
        </div>
    );
}

export default Elain;