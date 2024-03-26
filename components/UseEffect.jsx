import { useState, useEffect } from "react"

const UseEffect = () => {
    const [nimi, setNimi] = useState('Elsa');
    const [ika, setIka] = useState(20);


    const handleClick = () => {
        setNimi('Mikko');
        setIka(30);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(nimi);
    }, [nimi, ika]);

    return (
        <div className="divs">
            <p>{nimi} on {ika}-vuotias.</p>
            <button onClick={handleClick}>Paina</button>
        </div>
    );

}
    

export default UseEffect;
