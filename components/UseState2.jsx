import { useState } from "react";

const UseState2 = () => {
    const [hedelmia, setHedelmia] = useState('Hedelmiä')
    const [li1, setLi1] = useState('mansikka')
    const [li2, setLi2] = useState('kirsikka')
    const [li3, setLi3] = useState('vadelma')

    const handleClick = () => {
        setHedelmia('Vihanneksia')
        setLi1('tomatti')
        setLi2('porkkana')
        setLi3('peruna')
    }

    return (
        <div className="divs">
            <h5>useState</h5>
            <h4>{hedelmia}:</h4>
            <ul className="lista">
                <li>{li1}</li>
                <li>{li2}</li>
                <li>{li3}</li>
            </ul>
            <button onClick={handleClick}>Paina</button>
        </div>
    );
}

export default UseState2